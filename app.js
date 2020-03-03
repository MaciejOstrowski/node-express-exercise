const express = require('express')
const port = process.env.PORT || 3000

const generateTitle = (title) => {
    return `New Title ${title}`
}

const app = express()
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
    const title = generateTitle('New page')

    res.render('index', {
        pageTitle: 'Node JS',
        pageBody: title
    })
})

app.get('/kontakt', (req, res) => {
    res.send('dane kontaktowe!!')
})

app.listen(port)