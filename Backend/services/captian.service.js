const CaptianModel=require('../Models/captian.model');

const createCaptian = async({firstname , lastname , email , password ,color,plate,capacity,vehicleType})=>{
    if(!firstname || !email || !password || !color || !plate || !vehicleType || !capacity){
        throw new Error("All fields are required");
    }

    const user = CaptianModel.create({
        fullname:{
            firstname,lastname
        },
        email,
        password,
        vehicle:{
            color,
            plate,
            capacity,
            vehicleType
        }

    });

    return user;
}



module.exports={createCaptian};