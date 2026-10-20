
<h1 align="center">
  Portafolio personal
  
</h1>
<p align="center" style="font-size: 1.2rem;">Bienvenido.</p>

![React](https://img.shields.io/badge/-React-333333?style=flat&logo=react)
![Vite](https://img.shields.io/badge/-Vite-B73BFE?style=flat&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/tailwindcss-0F172A?&logo=tailwindcss)


Portafolio personal el cual se inspiro en Instagram, hecho con React, Vite y Tailwind CSS. Presenta perfil, proyectos, experiencia y habilidades, e incluye un formulario de contacto con validación del lado cliente.

En cuanto a la paleta de colores, esta fue inspirada por la ![xbox](https://img.shields.io/badge/xbox-107C10.svg?logo=xbox&logoColor=white) 360 slim

## Características

- **Header** con foto de perfil, datos personales, estadísticas, botón de contacto y enlaces a redes sociales.
- **Navegación por pestañas**: Proyectos, Experiencia, Habilidades y Contacto.
- **Formulario de contacto** validado en el lado del cliente (nombre requerido, correo válido y mensaje de al menos 10 caracteres). Al enviarse abre el cliente de correo con los datos cargados.
- **Footer** con redes sociales y año actual.
- Diseño responsive (mobile first) con Tailwind CSS.
- Suite de pruebas con Vitest y Testing Library.

## Explicacion

- El proyecto tiene los datos en Index.jsx, la cual es importada desde Header.jsx, Footer.jsx, Projects.jsx, Experience.jsx, Skills.jsx y a ContactForm, cada una leyendo lo que le corresponde.
- Los componentes de Projects, Experience, Skills y ContactForm se importan dede Content.jsx donde tambien se importa el componente tabs desde Index.jsx, controla las tabs activas (useEstate) y renderiza la que correspondiente.
- Al final la pagina se arma en App.jsx, donde se compone dentro de un contenedor el Header, Content y Footer.


## Tecnologías

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [react-icons](https://react-icons.github.io/react-icons/)
- [Vitest](https://vitest.dev/) + [Testing Library](https://testing-library.com/) + jsdom

## Instalación

bajas el repo, lo abres en la terminal y escribes 
```bash
npm intall
```

## Scripts

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run test` | Ejecuta los tests una sola vez |

## Pruebas

Los tests validan:

- **Renderizado de los organismos principales**: `Header` (nombre, ocupación, foto, botón de contacto) y `Footer` (año, nombre).
- **Comportamiento del formulario**: comprueba si reenderiza el formulario.

Configuración (en `vite.config.js`):

```js
test: {
  environment: 'jsdom',
  globals: true,
  setupFiles: './src/setupTests.js',
}
```

```bash
npm run test
```

## Estructura

```
src/
├── components/
├──── organisms/
│     ├── Header.jsx
│     ├── Footer.jsx
│     ├── ContactForm.jsx
│     └── ...
├── data/
│   └── Index.jsx        # personalInfo, tabs, proyectos, etc.
├── App.jsx
├── setupTests.js
└── main.jsx
```

## Personalización

Los datos del portafolio (nombre, ocupación, correo de contacto, redes, etc.) se editan en `src/data/Index.jsx`, dentro de `personalInfo`. 
Tambien se puede editar los proyectos, habilidades y experiencia.

## Autor

**Franco**
