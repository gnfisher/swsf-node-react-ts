import express from 'express'
import path from 'path'

const app = express()

app.use(express.static(path.join(path.resolve('../'), 'client/build')))

app.get('/api/hello', (_, res) => {
  res.json('Hello, world...')
})

app.get('*', (_, res) => {
  res.sendFile(path.join(path.resolve('../') + '/client/build/index.html'))
})

const PORT = 3000
app.listen(process.env.PORT || PORT, () => {
  console.log(`⚡️ [server]: Server is running at https://localhost:${PORT}`)
})
