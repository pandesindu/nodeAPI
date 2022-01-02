import express from "express"
import Mongoose from "mongoose"
import router from "./routes/transactionRoutes.js";
import transactionroute from "./routes/transactionRoutes.js";


const app = express()
const port = 3000
app.use(express.json());

// route app 
app.use('/transaction', router);
// database connection
Mongoose.connect("mongodb://localhost:27017/mevn_app", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = Mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('database connected'));





app.listen(port, () => console.log(`Example app listening on port ${port}!`))