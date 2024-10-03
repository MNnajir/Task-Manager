const express = require('express')
const app = express()
const tasks = require('./routes/tasks.js')
const conncetedDB = require('./db/connect')
require('dotenv').config()
const notFound = require('./middleware/not-found.js')
const errorHandlerMiddleware = require('./middleware/error-handler.js')

// middllewre
app.use(express.static('./public'));
 app.use(express.json())



// routes
// app.get('/hello', (req, res) => {
//     res.send('Task manager app')
// })

app.use('/api/v1/tasks', tasks)
app.use(notFound)
app.use(errorHandlerMiddleware)

// app.get('/api/v1/tasks')   - get all the tasks 
// app.post('/api/v1/tasks')    - create a new task 
// app.get('/api/v1/tasks/:id')  -get single task 
// app.patch('/api/v1/tasks/:id')   -update task
// app.delete('/api/v1/tasks/:id')  -delete task



const port = process.env.PORT || 3000

const start = async () => {
    try {
        await conncetedDB(process.env.MONGO_URL)
        app.listen(port, console.log(`Server is connceted on port ${port}....`)) 

    } catch (error) {
        console.log(error)
    }
}
start()

