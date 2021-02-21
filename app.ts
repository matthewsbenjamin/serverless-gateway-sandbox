import * as express from 'express'
import awsServerlessExpress from 'aws-serverless-express'

export let app = express.default()
app.use(express.json())

export let authApp = express.default()
app.use(express.json())

export let registrationApp = express.default()
app.use(express.json())


app.use('/v1', (req: express.Request, res: express.Response) => {
  console.log(req)
  res.status(200)
  res.send('Hello from the API')
})

authApp.use('/', (req: express.Request, res: express.Response) => {
  console.log(req)
  res.status(200)
  res.send('Hello from the authentication API')
})

registrationApp.use('/', (req: express.Request, res: express.Response) => {
  console.log(req)
  res.status(200)
  res.send('Hello from the registration API')
})

const authServer = awsServerlessExpress.createServer(authApp, undefined)
export const authHandler = (event: any, context: any) => awsServerlessExpress.proxy(authServer, event, context)

const registrationServer = awsServerlessExpress.createServer(registrationApp, undefined)
export const registrationHandler = (event: any, context: any) => awsServerlessExpress.proxy(registrationServer, event, context)

const server = awsServerlessExpress.createServer(app, undefined)
export const handler = (event: any, context: any) => awsServerlessExpress.proxy(server, event, context)