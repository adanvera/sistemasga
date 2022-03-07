const mongoose = require('mongoose')
const MONGO_CNN = 'mongodb+srv://sga:5FwlSR0Y3iUESm1J@cluster0.gsgsm.mongodb.net/'
const dbConection =  async ()=>{
    try {
        await mongoose.connect(MONGO_CNN,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('Base de datos online ');

    } catch (error) {
        console.log(error);
        throw new Error('Error en la DB');
    }

}

module.exports = {
    dbConection
}