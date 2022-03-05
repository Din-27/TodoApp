const express = require('express')
const router = require('./src/routes')
const cors = require('cors')
const app = express()

const port = 5000

app.use(express.json())
app.use(cors())
app.use('/api/v1/', router)


app.listen(port, ()=> console.log(`Wellcome Author ${port}`))