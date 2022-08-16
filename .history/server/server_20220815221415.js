import path from 'path'
import fs from 'fs'
import express from 'express'
import React from 'react'
import ReactDomServer from "react-dom/server"
import { StaticRouter } from 'react-router-dom'

import App from '../src/App'

const PORT = 8000
const app = express()

const route = app.router()

app.use('/build', express.static('build'));

app.get('*', (req, res) => {
  const context = {}
  const app = ReactDomServer.renderToString(
    <StaticRouter location={req}
  )
})