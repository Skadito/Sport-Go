# Sport-Go

Sport-Go es una plataforma intermediaria que conecta clientes con clubs deportivos para realizar reservas.

## 🚀 Instalación y Configuración

Sigue estos pasos para lanzar el proyecto en tu entorno local.

### **1. Clonar el repositorio**
```bash
git clone https://github.com/tu_usuario/sport-go.git
cd sport-go
```

### **2. Instalar Node.js y npm**
Si no tienes Node.js y npm instalados, ejecútalo en Ubuntu:
```bash
sudo apt update
sudo apt install nodejs npm -y
```
Para verificar la instalación:
```bash
node -v
npm -v
```
Si necesitas la última versión de Node.js, usa **NodeSource**:
```bash
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt install -y nodejs
```

### **3. Instalar dependencias**
#### 📌 Backend (Node.js y Express)
```bash
cd server
npm install
```

#### 📌 Frontend (React)
Si `src/` no contiene un `package.json`, inicializa el frontend como un proyecto React:
```bash
cd ../src
npx create-react-app .  
npm install
```
Si `package.json` ya existe, solo ejecuta:
```bash
npm install
```

### **4. Configurar variables de entorno**
Crea un archivo `.env` dentro de la carpeta `server/` y agrega lo siguiente:
```env
MONGO_URI=mongodb://localhost:27017/sport-go
PORT=5000
JWT_SECRET=tuClaveSecreta
```
Asegúrate de modificar `MONGO_URI` si usas MongoDB Atlas u otro servicio externo.

### **5. Iniciar MongoDB**
Si usas MongoDB localmente, debes iniciarlo con:
```bash
sudo systemctl start mongod
```
Si usas Docker:
```bash
docker run -d -p 27017:27017 --name mongo-sportgo mongo
```

### **6. Levantar el backend**
Desde la carpeta `server/`, ejecuta:
```bash
npm start
```
Si usas Nodemon para desarrollo:
```bash
npx nodemon server.js
```
El backend estará corriendo en `http://localhost:5000`.

### **7. Levantar el frontend**
Desde `src/`, ejecuta:
```bash
npm start
```
El frontend se abrirá en `http://localhost:3000`.

## 📌 Tecnologías utilizadas
- Node.js + Express (Backend)
- MongoDB (Base de datos)
- React (Frontend)

## 📬 Contacto
Si tienes dudas o sugerencias, contáctame en [tu email o redes sociales].

