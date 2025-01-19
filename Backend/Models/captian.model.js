const {Schema,model} = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const CaptianSchema = new Schema({
    fullname:{
        firstname: {
            type: String,
            required: true,
            minlength:[3 , 'First name must be at least 3 characters long'],
            maxlength: 50
        },
        lastname: {
            type: String,
            minlength:[3 , 'Last name must be at least 3 characters long'],
            maxlength: 50
        },
    },
    email:{
        type:String,
        required:true,
        unique : true,
    },
    password:{
        type:String,
        required : true,
        select:false,
    },
    socketId: {
        type: String,
    },
    status: {
        type: String,
        enums: ['active', 'inactive', 'banned'],
        default: 'inactive',
    },
    vehicle: {
        color:{
            type: String,
            required: true,
            minlength:[3 , 'Color must be at least 3 characters long'],
        },
        plate:{
            type: String,
            required: true,
            minlength:[3 , 'Plate must be at least 3 characters long'],
        },
        capacity:{
            type: Number,
            required: true,
            min:[1 , 'Capacity must be at least 1'],
        },
        vehicleType:{
            type: String,
            required: true,
            enums: ['car', 'motorcycle', 'auto'], 
        }
    },
    location: {
        lat:{
            type: Number,
        },
        lng:{
            type: Number,
        }
    },
});

CaptianSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({_id: this._id} , process.env.JWT_SECRET , {expiresIn: '1d'});
    return token;
}
CaptianSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password,this.password);
}
CaptianSchema.statics.hashPassword = async function(password){
    return await bcrypt.hash(password,10);
}

const CaptianModel = model('Captian', CaptianSchema)

module.exports = CaptianModel;