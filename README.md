# 🃏 Chuck Norris Jokes App

Aplicación web construida con React + TypeScript para mostrar chistes aleatorios o por categoría utilizando la [Chuck Norris Jokes API](https://api.chucknorris.io/). La interfaz es intuitiva, responsiva y amigable para el usuario.

## 🚀 Características principales

- Filtra chistes por categoría o genera uno completamente aleatorio.
- Obtención dinámica de categorías directamente desde la API.
- Validación de datos usando **Zod** para asegurar la estructura correcta de los chistes y categorías.
- Interfaz hecha con **Tailwind CSS**.
- Componente reutilizable para selección de categorías y botón de acción.
- Manejo de errores y carga de datos con `async/await`.

## 🛠️ Tecnologías utilizadas

- **React**
- **TypeScript**
- **Tailwind CSS**
- **Axios**
- **Zod** 
- **Vite** 

## 📦 Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/Steph0329/chuck-norris-jokes.git
cd chuck-norris-jokes

Instala las dependencias:
npm install
Inicia la aplicación en modo desarrollo:
npm run dev

🌐 API utilizada
Chuck Norris Jokes API
GET /jokes/random
GET /jokes/random?category={category}
GET /jokes/categories