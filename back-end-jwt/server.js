require('dotenv').config()
const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')

app.use(express.json())

const posts = [
    {
        userName: "Adib",
        title: "Post 1"
    },
    {
        userName: "Hasan",
        title: "Post 2"
    }
]
app.get('/posts',authenticateToken,(req,res)=>{
    res.json(posts.filter(post => post.userName == req.user.userName))
})

app.post('/login',(req,res)=>{
    const userName = req.body.userName
    const user = {userName:userName}

    const accessToken = jwt.sign(user,process.env.ACCESS_TOKEN_SECRET)
    res.json({ accessToken: accessToken })
})

function authenticateToken(req,res,next){
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if(token == null){
        return res.sendStatus(401)
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET,(err,user)=>{
        if(err){
            return res.sendStatus(403)
        }
        req.user = user
        next()
    })

}

app.listen(3000)