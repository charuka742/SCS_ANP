import axios from "axios";

const BaseUrl = 'http://localhost:8080/api/v1';

const login = async (data: any) => {
    // console.log(BaseUrl);
  const response = await axios({
    method: "post",
    url: `${BaseUrl}/auth/login`,
    data: data,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
  return response;
};


const registerStudent = async (data: any) => {
    // console.log(BaseUrl);
  const response = await axios({
    method: "post",
    url: `${BaseUrl}/add-student`,
    data: data,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
  return response;
};

const registerAlumni = async (data: any) => {
    // console.log(BaseUrl);
  const response = await axios({
    method: "post",
    url: `${BaseUrl}/add-alumini`,
    data: data,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
  return response;
};


const AuthServices = {
  login,
  registerStudent,
  registerAlumni
};

export default AuthServices;
