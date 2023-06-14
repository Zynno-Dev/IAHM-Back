# Establecer la imagen base
FROM node:16-alpine

# Crear y establecer el directorio de trabajo
WORKDIR /app

# Copiar los archivos del proyecto al contenedor
COPY . .

# Instalar las dependencias del proyecto
RUN npm install

# Compilar la aplicación
RUN npm run build 


# Exponer el puerto 3000 para que sea accesible desde fuera del contenedor
#EXPOSE 3000

# Iniciar la aplicación
CMD ["npm", "start"]
