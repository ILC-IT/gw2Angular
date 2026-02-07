#!/bin/bash

# Ejecutar esto para hacer ng build y recargar el contenedor de nginx
# ./build_and_reload.sh

USER=""

# Cargar nvm

export NVM_DIR="$HOME/.nvm"

[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"

# Usar .nvmrc
nvm use

# Ruta del proyecto Angular
DIST_PATH="/home/$USER/Escritorio/gw2Angular/dist/gw2Angular"

# ID o nombre del contenedor nginx
CONTAINER_NAME="nginx-server"

# Hacer build de Angular
echo "Construyendo Angular..."
ng build

# Cambiar permisos de los archivos generados (para que nginx pueda leerlos)
#echo "Cambiando permisos de la carpeta dist..."
#sudo chown -R 101:101 "$DIST_PATH"

# Recargar nginx dentro del contenedor para que detecte los cambios sin reiniciar
echo "Recargando nginx dentro del contenedor..."
sudo docker restart "$CONTAINER_NAME"

echo "Proceso completado."
