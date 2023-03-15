// model maps data to database

const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const TodoSchema= new Schema(
    {
        todo:{
            type: String,
            required: true

        },
        status: {
            
            type: String,
            required: true
    }
},
    {
        timestamps:true
    }
)
const SignupSchema = new Schema(
    {
        email:{
            type: String,
            required: true

        },
        password: {
            
            type: String,
            required: true
    }
},
    {
        timestamps:true
    }

)
module.exports= mongoose.model("Todos",TodoSchema);
module.exports= mongoose.model("Signup",SignupSchema);