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
    <StaticRouter location={req.url} context={context}>
      <App/>
    </StaticRouter>
  );

  const indexFile = path.resolve('./build/index.html')
  fs.readFile(indexFile,'utf-8',(err,data)=>{
    if(err){
      console.log("error !")
      return res.status(500).send("oops!","error!")
    }
    return res.send(data.replace('<div id="root"></div>',``))
  })
})