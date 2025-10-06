const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para mostrar carpeta "public"
app.use(express.static("public"));

// Ruta principal
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// Servidor escuchando
app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en puerto ${PORT}`);
});
