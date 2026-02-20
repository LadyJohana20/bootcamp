const express = require('express');
const { log } = require('node:console');
const path = require('node:path');
const { json } = require('node:stream/consumers');
const app = express();
const PORT = 3000;

//Rutas válidas 
app.get('/index', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'), (err) => {
    if (err) next(err);
  });
});

app.get('/about', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'public', 'about.html'), (err) => {
    if (err) next(err);
  });
});

app.get('/contact', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'public', 'contact.html'), (err) => {
    if (err) next(err);
  });
});

// ── 404 ───────────────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).send(`
    <!DOCTYPE html>
    <html lang="es">
    <head><meta charset="UTF-8"><title>404 – Página no encontrada</title>
    <style>
      body { font-family: sans-serif; display: flex; flex-direction: column;
             align-items: center; justify-content: center; height: 100vh;
             margin: 0; background: #f8f9fa; color: #343a40; }
      h1 { font-size: 5rem; margin: 0; color: #dc3545; }
      p  { font-size: 1.2rem; }
      a  { color: #0d6efd; text-decoration: none; }
    </style></head>
    <body>
      <h1>404</h1>
      <p>La página <strong>${req.path}</strong> no existe.</p>
      <a href="/index">← Volver al inicio</a>
    </body>
    </html>
  `);
});

// ── 500 ───────────────────────────────────────────────────────
app.use((err, req, res, next) => {
  console.error('Error interno:', err.message);
  res.status(500).send(`
    <!DOCTYPE html>
    <html lang="es">
    <head><meta charset="UTF-8"><title>500 – Error del servidor</title>
    <style>
      body { font-family: sans-serif; display: flex; flex-direction: column;
             align-items: center; justify-content: center; height: 100vh;
             margin: 0; background: #f8f9fa; color: #343a40; }
      h1 { font-size: 5rem; margin: 0; color: #fd7e14; }
      p  { font-size: 1.2rem; }
      a  { color: #0d6efd; text-decoration:none; }
    </style></head>
    <body>
      <h1>500</h1>
      <p>Error interno del servidor. Inténtalo más tarde.</p>
      <a href="/index">← Volver al inicio</a>
    </body>
    </html>
  `);
});

// ── Iniciar servidor ──────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`✅  Servidor corriendo en http://localhost:${PORT}`);
});
