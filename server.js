const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3080; // Använd miljöport eller 3000 som standard

// Tjäna statiska filer från "public"-mappen
app.use(express.static(path.join(__dirname, 'public')));

// Starta servern
app.listen(port, () => {
  console.log(`Servern körs på http://localhost:${port}`);
});