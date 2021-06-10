const options = {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
}

const io = require("socket.io")(options);

io.on("connection", socket => {
  console.log(`${ socket.id } - connected`)

  socket.on('update', ({ target, data }) => {
    io
      .to(target)
      .emit('update', { from: socket.id, data })
  })
})

io.listen(process.env.PORT || 3005)