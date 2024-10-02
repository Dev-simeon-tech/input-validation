const  express =  require('express');
const  {MongoClient} = require('mongodb')
const  {connectDb, getDb} =  require('./db')
const bodyParser =  require('body-parser')

const app =  express();
app.use(express.static('public'))
app.use(bodyParser.json());

const PORT = 3000;
let database;


app.post('/signup', async(req,res)=>{

    const {email, username,password1} = req.body;
    const password = password1;
    const usersCollection = database.collection('users');
    const sendToDb = await usersCollection.insertOne({username,email,password})
    console.log(sendToDb)
    if(sendToDb.acknowledged){
        return res.json({ success: true });
    }
    

})

connectDb( async(err)=>{
    if(!err){
        
        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });

        database = getDb();
    }
})

