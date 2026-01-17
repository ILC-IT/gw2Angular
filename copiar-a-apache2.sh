#!/bin/bash
# Script para desplegar la aplicacion Angular en Apache2 en el directorio /var/www/html
# chmod +x copiar-a-apache2.sh
# ./copiar-a-apache2.sh

USER=""

# Salir si ocurre un error
set -e

# Moverse al directorio donde esta el build
cd /home/$USER/gw2Angular/gw2Angular/dist/gw2Angular/ || { echo "Directorio de build no encontrado"; exit 1; }

# Limpiar el directorio del servidor web
echo "Eliminando archivos antiguos de /var/www/html..."
sudo rm -rf /var/www/html/* || { echo "Error al eliminar archivos antiguos"; exit 1; }

# Copiar los nuevos archivos
echo "Copiando archivos nuevos a /var/www/html..."
sudo cp -r * /var/www/html || { echo "Error al copiar nuevos archivos"; exit 1; }

# Cambiar al directorio del servidor web
ls /var/www/html/ || { echo "No se pudo acceder a /var/www/html"; exit 1; }

echo "Despliegue completado con exito."