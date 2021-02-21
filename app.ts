import * as express from 'express'
import awsServerlessExpress from 'aws-serverless-express'

export let app = express.default()
app.use(express.json())

app.use('/action', (req: express.Request, res: express.Response) => {
  console.log(req)
  res.status(200)
  res.send('Hello from the action API')
})

app.use('/authenticate', (req: express.Request, res: express.Response) => {
  console.log(req)
  res.status(200)
  res.send('Hello from the authentication API')
})

app.use('/register', (req: express.Request, res: express.Response) => {
  console.log(req)
  res.status(200)
  res.send('Hello from the registration API')
})

app.use('/v1', (req: express.Request, res: express.Response) => {
  console.log(req)
  res.status(200)
  res.send('Hello from the API')
})


const server = awsServerlessExpress.createServer(app, undefined)
export const handler = (event: any, context: any) => awsServerlessExpress.proxy(server, event, context)