import { Hono } from 'hono'
import { createHandler } from '@vercel/slack-bolt'
import { app as boltApp, receiver } from './bolt/app.js'

const app = new Hono()


app.get('/', (c) => {
  return c.text('Invalid Request')
})

const handler = createHandler(boltApp, receiver)

app.post('/api/slack/events', c => handler(c.req.raw))

export default app
