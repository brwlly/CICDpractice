const express = require('express');
const app = express();


app.get('/health', (req, res) => res.json({ status: 'ok' }));
app.get('/', (req, res) => res.send('Hello from CI/CD challenge!'));


if (require.main === module) {
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server on ${port}`));
}


module.exports = app;