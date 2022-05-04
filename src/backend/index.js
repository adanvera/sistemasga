const express = require('express')
const cors = require('cors')
const {dbConection} = require('./database/config')
const usuarioRoute = require('./routes/usuario')
const authRoute = require('./routes/auth')
const rolRoute = require('./routes/role')
const proyectoRoute = require('./routes/proyecto')
const backlogRoute = require('./routes/backlog')
const userStoryRoute = require('./routes/userStory')
const sprintRoute = require('./routes/sprint')
const app = express()
app.use(cors())
app.use(express.json())
dbConection()
app.use('/api/auth',authRoute)
app.use('/api/usuario',usuarioRoute)
app.use('/api/role',rolRoute)
app.use('/api/proyecto',proyectoRoute)
app.use('/api/backlog',backlogRoute)
app.use('/api/user-story',userStoryRoute)
app.use('/api/sprint',sprintRoute)

app.listen(4000,()=>{
  console.log('Servidor levantado');
})