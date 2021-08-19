import { createServer } from 'http'
import express from 'express'
import { Server, Socket } from 'socket.io'
import cors from 'cors'

const app = express()
const httpServer = createServer(app)
const PORT = process.env.PORT || 5500
const options: any = {
  cors: true,
  origins: '*',
}
const io = new Server(httpServer, options)

io.on('connection', (socket: Socket) => {
  console.log(`made socket: ${socket.id} connection`)

  // Handle chat events
  socket.on('chat', data => {
    const time = new Date()
    data = { ...data, time }
    console.log('received chat', data)
    io.sockets.emit('chat', data)
  })

  socket.on('typing', data => {
    socket.broadcast.emit('typing', data)
    console.log('typing', data)
  })
})

app.get('/', (req, res) => res.send('<h4>Socket is up and running...</h4>'))
httpServer.listen(PORT, () => console.log(`socket up @ http://localhost:${PORT}`))
