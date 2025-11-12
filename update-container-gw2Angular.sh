#!/bin/bash
# Script para actualizar el contenedor gw2angular-local
# chmod +x update-container-gw2Angular.sh
# ./update-container-gw2Angular.sh

cd "$(dirname "$0")" || { echo "No se pudo acceder al directorio del script"; exit 1; }

# Variables
IMAGE_NAME="gw2angular-local"
CONTAINER_NAME="gw2angular-local"
DOCKERFILE_NAME="Dockerfile-local"
PORT="4201"
RESTART_OPT="unless-stopped" 

echo "Iniciando actualizacion de la app gw2Angular..."

# 1 Build de Angular
while true; do
  read -p "¿Deseas compilar Angular en modo produccion? (s/n): " confirm

  if [[ "$confirm" =~ ^[sSyY]$ ]]; then
    echo "Compilando Angular en modo produccion..."
    ng build --configuration production || { echo "❌ Error en ng build"; exit 1; }
    break
  elif [[ "$confirm" =~ ^[nN]$ ]]; then
    echo "Compilacion cancelada por el usuario."
    break
  else
    echo "Respuesta no valida."
  fi
done

# 2 Detener y eliminar contenedor antiguo (si existe)
if [ "$(docker ps -a -q -f name=$CONTAINER_NAME)" ]; then
    echo "Deteniendo contenedor existente..."
    docker stop $CONTAINER_NAME
    echo "Eliminando contenedor antiguo..."
    docker rm $CONTAINER_NAME
fi

# 3 Reconstruir la imagen
echo "Construyendo nueva imagen Docker..."
docker build -f $DOCKERFILE_NAME -t $IMAGE_NAME . || { echo "❌ Error en docker build"; exit 1; }

# 4 Levantar nuevo contenedor
echo "Levantando contenedor actualizado..."
docker run -d -p $PORT:80 --name $CONTAINER_NAME --restart $RESTART_OPT $IMAGE_NAME || { echo "❌ Error en docker run"; exit 1; }

echo "Actualizacion completada. La app esta disponible en http://localhost:$PORT"