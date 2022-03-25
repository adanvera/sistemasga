const express = require('express')
const cors = require('cors')
const {dbConection} = require('./database/config')
const usuarioRoute = require('./routes/usuario')
const authRoute = require('./routes/auth')
const rolRoute = require('./routes/role')

const app = express()
app.use(cors())
app.use(express.json())
dbConection()
app.use('/api/auth',authRoute)
app.use('/api/usuario',usuarioRoute)
app.use('/api/role',rolRoute)

app.listen(4000,()=>{
  console.log('Servidor levantado');
})