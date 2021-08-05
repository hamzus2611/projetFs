const express = require("express");
const connectDB = require("./config/connectDB");

const session = require("express-session");
const mongodbStore = require("connect-mongodb-session")(session);
const config = require("config");
const user = require("./routes/user");
const exercise = require("./routes/exercise");
const groupe = require("./routes/groupe");
const cours = require("./routes/cours");
const db=config.get('db');
//const jwtPrivatekey=config.get('jwtPrivatekey');


const app=express();
app.use(express.json());

const store = new mongodbStore({
    uri:db,
    collection : "mySessions"
})

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(
    session({
      secret: "jwtPrivatekey",
      resave: false,
      saveUninitialized: false,
      store: store,
    })
  );

PORT= process.env.PORT|| 5000;

connectDB()
app.use("/user",user);
app.use("/exercise",exercise);
app.use("/groupe",groupe);
app.use("/cours",cours);

app.listen(PORT , (err)=>
err? console.log(err):
console.log(`server Running on PORT ${PORT} ...`)
)
