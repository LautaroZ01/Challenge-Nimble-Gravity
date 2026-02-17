# Challenge Nimble Gravity

Este proyecto es una aplicación web construida con **React**, **TypeScript** y **Vite**, diseñada para gestionar y visualizar postulaciones o listados de posiciones. Utiliza herramientas modernas para el manejo de estado, formularios y estilos.

## 🚀 Tecnologías Utilizadas

El proyecto hace uso de las siguientes librerías y herramientas clave:

- **Core**:
  - [React 19](https://react.dev/): Biblioteca para construir interfaces de usuario.
  - [Vite](https://vitejs.dev/): Herramienta de build y servidor de desarrollo rápido.
  - [TypeScript](https://www.typescriptlang.org/): Tipado estático para JavaScript.

- **Estilos**:
  - [Tailwind CSS v4](https://tailwindcss.com/): Framework de CSS utilitario para un diseño rápido y responsivo.
  - [React Icons](https://react-icons.github.io/react-icons/): Colección de iconos populares.

- **Gestión de Estado y Datos**:
  - [TanStack Query (React Query)](https://tanstack.com/query/latest): Manejo eficiente del estado asíncrono y caché de datos del servidor.
  - [Axios](https://axios-http.com/): Cliente HTTP para realizar peticiones a la API.

- **Formularios y UI**:
  - [React Hook Form](https://react-hook-form.com/): Manejo de formularios performante y flexible.
  - [Sonner](https://sonner.emilkowal.ski/): Componente de notificaciones (toasts) elegante y personalizable.

## 📂 Estructura del Proyecto

La estructura de carpetas del código fuente (`src`) está organizada de la siguiente manera:

```
src/
├── components/      # Componentes reutilizables de la UI
│   ├── PositionItem.tsx
│   └── PositionsList.tsx
├── lib/             # Utilidades y configuración de librerías
├── services/        # Lógica de peticiones a APIs externas
├── types/           # Definiciones de tipos TypeScript
├── App.tsx          # Componente principal
├── main.tsx         # Punto de entrada de la aplicación
└── index.css        # Estilos globales y configuración de Tailwind
```

## 🛠️ Instalación y Ejecución

Para correr este proyecto localmente, sigue estos pasos:

1. **Clonar el repositorio**:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd postulacion-nimble
   ```

2. **Instalar dependencias**:
   ```bash
   npm install
   # o si usas pnpm
   pnpm install
   # o si usas yarn
   yarn install
   ```

3. **Iniciar el servidor de desarrollo**:
   ```bash
   npm run dev
   ```

4. **Ver la aplicación**:
   Abre tu navegador y ve a `http://localhost:5173` (o el puerto que indique la consola).

## 📦 Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo con Vite.
- `npm run build`: Compila el proyecto para producción.
- `npm run preview`: Previsualiza la build de producción localmente.
- `npm run lint`: Ejecuta ESLint para buscar problemas en el código.

## 📝 Características

- Visualización de listados de posiciones.
- Interacción con formularios optimizados.
- Feedback visual al usuario mediante notificaciones.
- Diseño responsivo y moderno.
