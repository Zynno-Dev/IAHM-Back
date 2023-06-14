# IAHM Backend

## Descripcion del proyecto
.....

## Flujo de CI/CD
En este documento, se describe el flujo de CI/CD (Integración Continua/Despliegue Continuo) para las ramas `dev` y `master`, donde `dev` se considera el entorno de desarrollo y `master` el entorno de producción.

### Rama `dev` (Entorno de Desarrollo)

La rama `dev` se utiliza como el entorno principal para el desarrollo de nuevas características y corrección de errores. El flujo de CI/CD para esta rama es el siguiente:

1. **Push a la rama `dev`:** Cuando se realizan cambios en el código y se hace push a la rama `dev`, se desencadena automáticamente un proceso de integración continua.
2. **Despliegue en entorno de prueba:** El código se despliega automáticamente en [ms-iahm-dev.ejercito.mil.ar](https://ms-iahm-dev.ejercito.mil.ar) para realizar pruebas.

### Rama `master` (Entorno de Producción)

La rama `master` se considera el entorno de producción, donde el código ha pasado por todas las pruebas y revisiones necesarias y está listo para ser desplegado. El flujo de CI/CD para esta rama es el siguiente:

1. **Merge a la rama `master`:** Cuando los cambios en la rama `dev` han sido aprobados y se considera que están listos para ser desplegados en producción, se realiza un merge a la rama `master`.
2. **Ejecución de pruebas finales:** Una vez que los cambios se han fusionado en la rama `master`, se ejecutan pruebas finales para asegurarse de que el código integrado funciona correctamente en el entorno de producción.
3. **Despliegue manual en entorno de producción:** Si las pruebas finales son exitosas, el código se despliega automáticamente en [ms-iahm.ejercito.mil.ar](https://ms-iahm.ejercito.mil.ar), lo que pone en marcha la implementación continua.

## Responsables del Desarrollo

 - TT Arakaki - CPS.
 - ....
 - ....

 ## Responsables del Despliegue

 - Equipo Networking - CPS.
