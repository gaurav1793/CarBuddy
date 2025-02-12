
const axios = require('axios');


const getAddressCoordinste = async(address)=>{
    const apikey =process.env.MAPS_API;
    const url ='';

    try{
        const response = await axios.get(url);

        if(response.data.status === 'OK'){
            const location = response.data.results[ 0 ].geometry.location
            return {
                ltd: location.lat,
                lng: location.lng
            };
        } else {
            throw new Error('Unable to fetch coordinates');
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
}




module.exports={getAddressCoordinste};