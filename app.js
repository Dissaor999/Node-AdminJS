
import AdminJS, { ComponentLoader } from 'adminjs'
import AdminJSExpress from '@adminjs/express'
import express from 'express'
import mongoose from 'mongoose'
import * as AdminJSMongoose from '@adminjs/mongoose'
import importExportFeature from '@adminjs/import-export'

import { User } from './models/User.js'
//import {UserResource} from './resources/userResource.js'

const PORT = 3000

const uri = "mongodb+srv://danv999:XIwajxiTboL0Cmyz@dissaordb.eja9h.mongodb.net/Dissaor_db?retryWrites=true&w=majority&appName=DissaorDB";



const componentLoader = new ComponentLoader;
const start = async () => {
  const app = express()
  await mongoose.connect(uri)
  AdminJS.registerAdapter({
    Resource: AdminJSMongoose.Resource,
    Database: AdminJSMongoose.Database,
  })

  let createCustomResource = (componentLoader) => {
   return {
      resource: User,
      features: [
            importExportFeature({ componentLoader }),
       ],
     }
  }

 
  const admin = new AdminJS({
    componentLoader,
    resources: [createCustomResource(componentLoader)
    ],
  })

  const adminRouter = AdminJSExpress.buildRouter(admin)
  admin.watch()
  admin.initialize()
  app.use(admin.options.rootPath, adminRouter)

  app.listen(PORT, () => {
    console.log(`AdminJS started on http://localhost:${PORT}${admin.options.rootPath}`)
  })
}

start()




