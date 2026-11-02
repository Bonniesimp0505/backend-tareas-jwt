# Backend en Node.js + Express con autenticación JWT

API REST desarrollada en Node.js, Express y MongoDB (Mongoose) bajo el patrón **MVC**. Permite registrar usuarios con contraseñas encriptadas (`bcrypt`), iniciar sesión generando un **JSON Web Token (JWT)** y realizar un CRUD de tareas protegido con **Bearer Token**, donde cada usuario únicamente puede ver, modificar y eliminar sus propias tareas.

---

## Instalación

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/Bonniesimp0505/backend-tareas-jwt.git
   cd backend-tareas-jwt
   ```

2. Instalar las dependencias:
   ```bash
   npm install
   ```

3. Configurar las variables de entorno:
   Crea un archivo `.env` en la raíz del proyecto basándote en el archivo `.env.example`:
   ```env
   NODE_ENV=development
   PORT=5000
   MONGO_DB=tu_cadena_de_conexion_a_mongodb
   JWT_SECRET=tu_secreto_jwt
   ```

---

## Cómo ejecutar el servidor

- **Modo desarrollo (con Nodemon):**
  ```bash
  npm run server
  ```

- **Modo producción:**
  ```bash
  npm start
  ```

El servidor correrá en `http://localhost:5000`.

---

## Lista de Endpoints

| Método | Ruta | Descripción | ¿Requiere token? |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/users` | Crear usuario (`registrar`) | No |
| `POST` | `/api/users/login` | Iniciar sesión y devolver el JWT (`login`) | No |
| `GET` | `/api/users/datos` | Datos del usuario dueño del token (`misDatos`) | Sí (`Bearer <token>`) |
| `GET` | `/api/tareas` | Listar **solo** las tareas del usuario logueado (`getTareas`) | Sí (`Bearer <token>`) |
| `POST` | `/api/tareas` | Crear una tarea asignada al usuario logueado (`createTareas`) | Sí (`Bearer <token>`) |
| `PUT` | `/api/tareas/:id` | Modificar una tarea propia (`updateTareas`) | Sí (`Bearer <token>`) |
| `DELETE` | `/api/tareas/:id` | Eliminar una tarea propia (`deleteTareas`) | Sí (`Bearer <token>`) |
