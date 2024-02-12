import axios from "axios";

const API_URL = "http://localhost:3000";

export const userLogin = async (credentials) => {
  try {
    const res = await axios.post(`${API_URL}/api/login`, credentials, {});
    const token = res.data.token;
    return token;
  } catch (error) {
    console.error("Error en el login:", error);
    throw error;
  }
};

export const userSignUp = async (signUpData) => {
  const res = await axios.post(`${API_URL}/api/register`, signUpData, {});
  return res.data;
};

export const bringAllArtists = async ()  => { 
    const res = await axios.get(`${API_URL}/api/artists/list`)
    return res.data.results
}

export const bringProfile = async (token, id)  => { 
  const config = {
    headers: {
      Authorization: "Bearer " + token
    }
  }

  const res = await axios.get(`${API_URL}/api/${id}`, config)
  console.log(res.data)
  return res.data
  
} 

export const createAppointment = async (newAppointment, token) => {
  console.log(newAppointment)
  console.log(token)
  const config = {
    headers: {
      Authorization: "Bearer " + token.credentials.token
    }
  }
  console.log(config)
  const res = await axios.post(`${API_URL}/api/appointments/newAppointment`, newAppointment, config)
  return res.data
}