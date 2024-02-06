import axios from "axios"

const API_URL = "http://localhost:3000"

export const userLogin = async (credentials) => {
    try {
        const res = await axios.post(`${API_URL}/api/login`, credentials, {})
        const token = res.data.token
        return token
    } catch (error){
        console.error('Error en el login:', error);
    throw error;
    }
    
}

// export const authenticateUser = async (credentials) => {
//     console.log(credentials); const res = await axios.post(`${API_URL}/api/login`, credentials);
   
//     return res;
// }


// // export const authenticateUser = async (credentials) => {
// //     try {
// //         if (!credentials.email || !credentials.password) {
// //             throw new Error('Both email and password are required.');
// //         }

// //         const res = await axios.post(`${API_URL}/api/login`, credentials);
// //         // const token = res;
// //         return res;
// //     } catch (error) {         
// //         console.log(credentials)
// //         console.error('Error en el login:', error);
// //         console.log('Server response:', error);
// //         throw error;
// //     }
    
// // }




