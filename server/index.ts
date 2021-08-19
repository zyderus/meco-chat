import { createServer } from 'http'
import express from 'express'
import { Server, Socket } from 'socket.io'
import cors from 'cors'

const app = express()
const httpServer = createServer(app)
const options: any = {
  cors: true,
  origins: ['localhost:3000'],
}
const io = new Server(httpServer, options)

// const room = 'general'

io.on('connection', (socket: Socket) => {
  console.log(`made socket: ${socket.id} connection`)
  // socket.join(room)

  // Handle chat events
  socket.on('chat', data => {
    console.log('received chat', data)
    io.sockets.emit('chat', data)
    // io.in(room).emit('chat', data)
  })

  socket.on('typing', data => {
    socket.broadcast.emit('typing', data)
    console.log('typing', data)
  })

  // socket.on('disconnect', () => socket.leave(room))
})

httpServer.listen(5500, () => console.log('socket up @ http://localhost:5500'))
