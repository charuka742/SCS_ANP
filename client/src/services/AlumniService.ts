import axios from "axios";

const BaseUrl = 'http://localhost:8080/api/v1';

const getAlumniDetailsByDegreeAndBach = async (batch:any,stream:any) => {
  const response = await axios({
    method: "get",
    url: `${BaseUrl}/get-alumni-details-degree-batch/${stream}/${batch}`,
    headers: {
      "Content-Type": "application/json; ",
    },
  });
  return response;
};


const AlumniService = {
    getAlumniDetailsByDegreeAndBach
};

export default AlumniService;
