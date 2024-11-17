const mongoose = require("mongoose")

const mongoDbUrl='mongodb+srv://codewithzosh:lognBCBmtWNPjrKC@cluster0.wvt9jpw.mongodb.net/?retryWrites=true&w=majority'
// const mongoDbUrl='mongodb+srv://kritijulia:MzZNIqfgkFDSh33y@ecommcluster.qwzvz.mongodb.net/?retryWrites=true&w=majority&appName=ecommCluster'
const connectDb=()=>{
    return mongoose.connect(mongoDbUrl)
}

module.exports={connectDb}