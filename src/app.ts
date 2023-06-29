import express, { Application } from 'express'
import cors from 'cors'
import { createUser } from './app/modules/user/user.service'
const app:Application = express()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/',async (req,res)=>{
    res.send('welcome to server')
    await createUser({
        id:'000',
        password:"234hfwe",
        role:'student'
    })
})

export default app