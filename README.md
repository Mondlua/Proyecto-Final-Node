# Servidor Node.js con Express, Firebase y Arquitectura en Capas

Este proyecto es una plantilla base para desarrollar un servidor backend con **Express**, estructurado en capas, que se conecta a **Firebase Firestore** para almacenar datos. Está diseñado para facilitar el desarrollo organizado y escalable de APIs REST.

## Características

- **Express** para la gestión de rutas y middlewares.
- **Firebase Firestore** como base de datos en la nube.
- **CORS** habilitado para peticiones desde frontend externos.
- **Body-parser** para interpretar solicitudes con body en formato JSON.
- **Arquitectura en capas**: separación clara entre modelos, servicios, controladores y rutas.
- **Nodemon** para recarga automática en desarrollo.
- **dotenv** para configuración de variables de entorno.
- **JWT** preparado para futuras implementaciones de autenticación.

---

## Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/Mondlua/Proyecto-Final-Node.git
cd Proyecto-Final-Node
```

### 2. Instalar dependencias

```bash
npm install
```

---

## Comandos disponibles

### Iniciar el servidor

```bash
npm run dev
```

### Ejecutar en producción

```bash
npm start
```

---

## Estuctura del proyecto

```plaintext
src/
├── config/                 # Configuración de Firebase y entorno
│   └── db.js
│   └── envs.js
│
├── controllers/           # Lógica que responde a las rutas
│   └── auth.controller.js
│   └── product.controller.js
│
├── middlewares/           # Lógica de autenticación
│   └── auth.middleware.js
│
├── models/                # Acceso a Firestore y lógica de datos
│   └── product.model.js
│
├── routes/                # Definición de rutas de la API
│   └── auth.routes.js
│   └── product.routes.js
│
├── services/              # Lógica de negocio reutilizable
│   └── product.service.js
│
├── utils/                 # Funciones auxiliares
│   └── index.js
│   └── jwt.js
│
├── index.js               # Punto de entrada del servidor
│
└── .env.example           # Variables de entorno

```

---

## Endpoints disponibles

| Método | Ruta                   | Descripción                    |
| ------ | ---------------------- | ------------------------------ |
| GET    | `/api/products`        | Devuelve todos los productos   |
| GET    | `/api/products/:id`    | Devuelve un producto por su ID |
| POST   | `/api/products/create` | Crea un nuevo producto         |
| DELETE | `/api/products/:id`    | Elimina un producto por su ID  |
| POST   | `/auth/login`          | Autentica un usuario           |
