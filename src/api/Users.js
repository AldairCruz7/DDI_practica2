import {ENV} from '../utils/constants';

const getMe = async (token) => {
    try{
        const reponse = await fetch(`${ENV.API_URL}/${ENV.ENDPOINTS.USERS_ME}`,{
            method: 'GET',
            headers:{
                Authorization: `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjk2MjgwOTQ2LCJleHAiOjE2OTg4NzI5NDZ9.I2TpLFodRrB2U0xKH2K6isB4bq-3RvGIpD-3JxCnouw'}`
            }        
        })
        const result = await reponse.json();

        return result;
    }
    catch(error){
        console.log("src/api/users",error)
        return null;
    }
}

export const userController = {
    getMe
}