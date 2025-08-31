# Plataforma de Aprendizaje y Visualización de Metaheurísticas

Este proyecto es un espacio de trabajo para aprender y experimentar con algoritmos metaheurísticos. La aplicación permitira seleccionar, configurar y ejecutar diferentes metaheurísticas sobre problemas de optimización clásicos, visualizando el proceso y los resultados en tiempo real.

## Visión del Proyecto

El objetivo principal es doble:
1.  **Aprender sobre Metaheurísticas:** Implementar y entender el funcionamiento interno de diversos algoritmos (como Recocido Simulado, Búsqueda Tabú, Algoritmos Genéticos, etc.).
2.  **Desarrollar una Aplicación Full-Stack Moderna:** Utilizar el proyecto como un medio para aprender y aplicar mejores prácticas en el desarrollo web con tecnologías actuales.

---

## Stack Tecnológico

La aplicación está dividida en dos componentes principales:

### 🚀 Frontend
*   **Framework:** [Next.js](https://nextjs.org/) (con App Router)
*   **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
*   **UI:** [React](https://react.dev/)
*   **Estilos:** [Tailwind CSS](https://tailwindcss.com/)

### ⚙️ Backend
*   **Framework:** [FastAPI](https://fastapi.tiangolo.com/)
*   **Lenguaje:** [Python](https://www.python.org/)
*   **Validación de Datos:** [Pydantic](https://pydantic.dev/)

---

## Cómo Empezar

Sigue estos pasos para levantar el entorno de desarrollo local.

### Prerrequisitos
*   [Node.js](https://nodejs.org/) (versión 20.x o superior)
*   [Python](https://www.python.org/downloads/) (versión 3.10 o superior)

### 1. Configuración del Backend

```bash
# Navega a la carpeta del backend
cd backend

# Crea y activa un entorno virtual
# En Windows:
python -m venv .venv
.venv\Scripts\activate
# En macOS/Linux:
# python3 -m venv .venv
# source .venv/bin/activate

# Instala las dependencias
pip install -r requirements.txt

# Inicia el servidor de desarrollo
uvicorn main:app --reload
```
El backend estará disponible en `http://localhost:8000`.

### 2. Configuración del Frontend

```bash
# (Desde la raíz del proyecto) Navega a la carpeta del frontend
cd frontend

# Instala las dependencias
npm install

# Inicia el servidor de desarrollo
npm run dev
```
El frontend estará disponible en `http://localhost:3000`.
