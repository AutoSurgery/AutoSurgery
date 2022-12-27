const express= require("express");
require('./database/db');
const User = require('./database/user_db');
const cors=require("cors");

const app=express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.get("/login",(req,res)=>{
    res.send("hello");
});


app.post("/login", (req,res)=>{
    const { username, password} = req.body
    User.findOne({ username: username}, (err, user) => {
        if(user){
            if(password === user.password )
                res.send({message: "Login Successfull", user: user})
            else 
                res.send({ message: "Wrong password !!!"})
        }
        else{
            res.send({message: "No User found"});
            
        }
    })
});

app.post("/signup", (req,res)=>{
    const { name, username, password} = req.body;
    console.log(req.body);
    User.findOne({username: username}, (err, user) => {
        if(user){  
            res.send({message: "Username already exists !!!"});
        }  
        else {
            const user = new User({
                name : name,
                username : username,
                password : password
            });

            user.save(err => {
                if(err) res.send(err);
                else res.send( { message: "Sign Up Successfull" });
            });
        }
    });
});

const PORT = 3001;
app.listen(PORT, () => console.log(`App running on port ${PORT}`));