
# Tienda Fullstack - Paquete inicial

## Estructura
- frontend/  -> React + Vite (ShopPage)
- backend/   -> Express API (endpoints de ejemplo)
- .env.example

## Cómo ejecutar localmente

### Frontend
```bash
cd frontend
npm install
npm run dev
```
Abre `http://localhost:5173`

### Backend
```bash
cd backend
npm install
node server.js
```
API disponible en `http://localhost:4000/api/ping`

## Deploy
- Frontend: Vercel / Netlify (subir carpeta `frontend`).
- Backend: Render / Railway / Vercel serverless.

## Notas
- El asistente de IA en el frontend llama a `/api/ai` que es un placeholder. Para usar OpenAI real añade la lógica en `backend/server.js` y guarda la clave en `OPENAI_API_KEY`.
