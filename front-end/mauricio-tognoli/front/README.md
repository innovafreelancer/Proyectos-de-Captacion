# Aplicación de Clima 🌤️

Una aplicación moderna de clima desarrollada con *Next.js* y *Tailwind CSS*. Ofrece información actual, pronósticos por hora y extendidos, con una experiencia de usuario intuitiva.

## Funcionalidades Principales

### Flujo del Usuario

1. *Inicio*:  
   - Al abrir la aplicación, el usuario puede:  
     1. Ver automáticamente el clima actual de su ubicación si permite compartirla.  
     2. Buscar una ciudad manualmente si no desea compartir su ubicación.

2. *Visualización del clima*:  
   - Una vez seleccionada una ubicación, se muestra:  
     - Clima actual (temperatura, sensación térmica, entre otros).  
     - Pronóstico por hora (las siguientes 6 horas).  
     - Pronóstico extendido (7 días).

### Interacciones Principales

- *Buscar ciudad*:  
  Botón de búsqueda para ingresar manualmente una ciudad.

- *Ubicación automática*:  
  Detectar la ubicación del usuario automáticamente y mostrar el clima correspondiente.

- *Elementos interactivos*:  
  Detalles adicionales del clima disponibles al hacer clic en ciertos elementos (por ejemplo, condiciones climáticas, viento, humedad).

### Jerarquía de la Información

1. Mostrar la información más relevante en el siguiente orden:
   - *Temperatura y sensación térmica*: centradas en la pantalla.
   - *Clima por hora*: presentado en una sección debajo.
   - *Pronóstico semanal*: ubicado al final.

### Acciones de Fallback

- *Sin ubicación compartida*:  
  Si el usuario no permite compartir su ubicación, se muestra un mensaje pidiéndole buscar una ciudad manualmente.

## Tecnologías Utilizadas

- *Next.js*: Framework de React para SSR y SSG.
- *Tailwind CSS*: Librería de estilos para diseño responsivo y moderno.
- *API de clima*: Para obtener datos en tiempo real del clima (reemplazar con la API usada, por ejemplo, OpenWeather).