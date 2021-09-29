const mongoose = require('mongoose')

const { Schema } = mongoose; 


const formSchema = new Schema ({
    
})

const Form = mongoose.model('Form', formSchema);

module.exports = Form;