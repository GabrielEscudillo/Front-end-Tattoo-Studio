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

export const bringAllArtists = async () => {
  const res = await axios.get(`${API_URL}/api/artists/list`);
  return res.data;
};

export const bringProfile = async (token, id) => {
  const config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };

  const res = await axios.get(`${API_URL}/api/${id}`, config);
  return res.data;
};

export const updateProfile = async (token, id, updateData) => {
  console.log(token, id, updateData)
  const config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  const res = await axios.patch(`${API_URL}/api/${id}`, updateData, config);
  return res.data;
};

export const createAppointment = async (token, appointmentData) => {
  console.log(appointmentData);
  const config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  const res = await axios.post(
    `${API_URL}/api/appointments/newAppointment`,
    appointmentData,
    config
  );
  return res;
};


export const bringAppointments = async (token, id) => {
  const config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };

  const res = await axios.get(`${API_URL}/api/appointments/mysessions/${id}`, config);
  return res.data;
};


