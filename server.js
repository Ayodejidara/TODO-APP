require("dotenv").config();
const http = require("http");
const app = require("./app");
const url = process.env.MONGO_URI;
const connectDB = require("./database/connect");



const server = http.createServer(app);

const PORT = process.env.PORT || 3000;

const start = async() =>{
try {
    await connectDB(url);
    server.listen(PORT, ()=>{
        console.log(`Server is listening on port ${PORT}`);
    })
} catch (err) {
    console.log(err);
}
};

start();