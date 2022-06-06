const express = require('express')
const path = require('path')

const expressLayouts = require('express-ejs-layouts')

const app = express()

//pra dizer que o express vai usar o ejs como view engine
app.set('view engine', 'ejs')

// para dizer que o express vai usar o arquivo views como pasta de views
app.use(expressLayouts)

// para dizer que o express vai usar a pasta public como pasta de arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')))

const router = require('./routes/router')
app.use(router.routes)

//utilizamos router
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'view.html'))
// })

app.listen(3000, () => {
    console.log('Server started on port 3000')
    })

