const mongoose= require('mongoose')
mongoose.connect('mongodb+srv://ankita_chatterjee_2001:Arshi@2001@cluster0.pwojo.mongodb.net/?retryWrites=true&w=majority',
{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(ok =>console.log("Connected to Database"))
.catch(err =>console.log(err))

module.exports = mongoose;