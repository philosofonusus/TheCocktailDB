const express = require('express')
const config = require('config');
const PORT = config.get('port') || 5000
const app = express()

app.use(express.json({ extended: true }))

app.use('/api/cocktails', require('./routes/cocktail.route'))

async function start() {
    try{
        app.listen(PORT, ()=> console.log('The server has been started'))
    } catch (e) {
        console.log("Server error -> ", e)
        process.exit(1)
    }
}
start()
