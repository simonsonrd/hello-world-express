const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

// Only start the server when this file is run directly (not when required by tests)
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

module.exports = app;
