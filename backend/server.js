//dependencies
const app = require('./app')

//config
require('dotenv').config();
const PORT = process.env.PORT;

//listen
app.listen(PORT, () => {
    console.log(`Listening on poArt ${PORT}`)
});