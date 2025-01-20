```markdown
# 🌟 Proyectos de Captación 🌟

¡Bienvenido al repositorio **Proyectos de Captación**! Este espacio está diseñado para
que los programadores demuestren sus habilidades en GitHub y en lenguajes de programación
específicos a través de proyectos de prueba. Aquí podrás mostrar tu conocimiento y capacidad
técnica, ya sea en desarrollo **Frontend**, **Backend** o **Fullstack**.

## 🎯 Objetivo

El objetivo de este repositorio es facilitar la captación de personal mediante la creación de proyectos
donde los candidatos puedan demostrar sus competencias técnicas y su familiaridad con las buenas prácticas
en GitHub. Cada candidato tendrá la oportunidad de trabajar en un proyecto individual, siguiendo las pautas
establecidas a continuación.

## 🛠️ Uso del Repositorio

### 📂 Estructura del Repositorio

El repositorio está organizado por ramas y carpetas, según el rol del programador:

- **Ramas por Rol:**
  - `frontend`
  - `backend`
  - `fullstack`

Cada programador debe crear su propia carpeta dentro de la rama correspondiente a su rol. Esta carpeta contendrá todo el
código relacionado con su proyecto de captación.

### 🚀 Descargando el Código

Para descargar el código adecuado, asegúrate de clonar la rama correspondiente a tu interés. La rama principal (`main`) tiene
una estructura de carpetas diferente y no es adecuada para todos los propósitos. Sigue estos pasos:

1. **Clonar el Repositorio:**
   Clona el repositorio en tu máquina local utilizando el siguiente comando:
   ```
   git clone https://github.com/innovafreelancer/proyectos-de-captacion.git
   ```

2. **Cambiar a la Carpeta del Proyecto:**
   Navega a la carpeta del proyecto:
   ```
   cd proyectos-de-captacion
   ```

3. **Cambiar a la Rama Adecuada:**
   Luego, cambia a la rama que necesitas:
   - Para Frontend:
     ```
     git checkout frontend
     ```
   - Para Backend:
     ```
     git checkout backend
     ```
   - Para Fullstack:
     ```
     git checkout fullstack
     ```

4. **Crear una Nueva Rama Local:**
   A partir de la rama adecuada, crea una nueva rama local que derive de esta. Utiliza el siguiente formato para nombrarla:
   ```
   <usuariogithub>-<rol>-<iniciales-del-proyecto>-dev
   ```
   Por ejemplo, si tu usuario es `johndoe`, estás trabajando en el rol `frontend`, y las iniciales del proyecto son `abc`, puedes crear la nueva rama con el siguiente comando:
   ```
   git checkout -b johndoe-frontend-abc-dev
   ```

### 🚀 Proceso para Contribuir

1. **Crear una Carpeta para Tu Proyecto:**
   Dentro de la nueva rama, crea una nueva carpeta con tu nombre o un identificador único:
   ```
   mkdir tu-nombre-o-id
   ```

2. **Agregar Tu Código:**
   Coloca todos los archivos relacionados con tu proyecto dentro de esta nueva carpeta.

3. **Hacer Commits como un Programador Profesional:**
   - **Frecuencia de Commits:** Realiza commits frecuentemente, idealmente cada vez que completes una pequeña funcionalidad o corrijas un error.
   - **Commits Relacionados:** Asegúrate de que cada commit contenga cambios relacionados.
   - **Mensajes Claros:** Escribe mensajes claros y descriptivos para cada commit que expliquen qué cambios realizaste.

4. **Publicar la Nueva Rama (si es la primera vez):**
   Si esta es la primera vez que subes esta rama local al repositorio remoto, necesitarás publicarla. Usa el siguiente comando para hacerlo:
   ```
   git push -u origin johndoe-frontend-abc-dev
   ```
   El `-u` establece un seguimiento entre tu rama local y la rama remota, lo que significa que en futuras ocasiones podrás usar simplemente `git push`
   sin especificar el nombre de la rama.

5. **Fetch antes de Push:**
   Antes de hacer un `push`, asegúrate de realizar un `fetch` para actualizar tu rama local con los cambios más recientes del repositorio remoto:
   ```
   git fetch origin
   ```
   Si hay conflictos, resuélvelos antes de proceder.

6. **Hacer Push:**
   Una vez que hayas resuelto cualquier conflicto y estés listo para compartir tus cambios, haz push a tu rama:
   ```
   git push origin johndoe-frontend-abc-dev
   ```

7. **Crear un Pull Request:**
   Una vez que hayas subido tus cambios, crea un Pull Request desde tu rama hacia la rama principal del repositorio(depende del rol backend-fronted-fullstack). Asegúrate
   de proporcionar una descripción clara sobre lo que has implementado.

## ✅ Buenas Prácticas

- **Comentarios:** Asegúrate de comentar tu código para que sea fácil de entender.
- **Estructura del Código:** Mantén una estructura clara y organizada en tu proyecto.
- **Documentación:** Incluye un archivo README dentro de tu carpeta con información sobre cómo ejecutar tu proyecto y cualquier otra información relevante.
- **Pruebas:** Si es posible, incluye pruebas unitarias para demostrar la funcionalidad de tu código.

## 🎉 Conclusión

Este repositorio es una oportunidad para mostrar tus habilidades técnicas y tu capacidad para trabajar con GitHub. Estamos emocionados por ver lo que puedes crear.
¡Buena suerte!

---
**¡Esperamos verte pronto en nuestros proyectos! 🚀**
```



