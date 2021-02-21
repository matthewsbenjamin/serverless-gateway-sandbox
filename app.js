import * as express from 'express'
import awsServerlessExpress from 'aws-serverless-express'

export let app = express.default()
app.use(express.json())

app.use('/', (req, res) => {
  console.log(req)
  res.status(200)
  res.send('Hello from the API')
})

const server = awsServerlessExpress.createServer(app, undefined)
export const handler = (event, context) => awsServerlessExpress.proxy(server, event, context)