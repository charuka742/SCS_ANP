import React, { useEffect, useState } from 'react'
import Card from "Components/Card";
import AlumniService from 'services/AlumniService';

const CS = () => {

  const [streamParam, setStreamParam] = useState<any>();
  const [batch, setBatch] = useState<any>();
  const [alumnies, setAlumnies] = useState<any>([]);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const streamParameter = searchParams.get("stream");
    const batchParam = searchParams.get('batch');

    if (streamParameter) {
      // Do something with the streamParam value
      setStreamParam(streamParameter);
    }
    if (batchParam) {
      // Do something with the streamParam value
      setBatch(batchParam);
    }
  }, [window.location.search]);

  useEffect(() => {
    if(streamParam && batch){
      AlumniService.getAlumniDetailsByDegreeAndBach(batch,streamParam).then((res:any)=>{
        if(res?.status===200){
          setAlumnies(res?.data?.data)
        }
      }).catch((e:any)=>{console.log(e)})
    }
  }, [streamParam,batch]);

  return (
    
    
    <div className='grid grid-cols-3 gap-2 w-[70%] mx-auto my-10'>
      {alumnies && alumnies?.length>0 && alumnies?.map((alumni:any)=>(
        <Card
        key={alumni?.regNo}
        name={`${alumni?.fname} ${alumni?.lname}`}
        company={alumni?.currentCountry}
        telephone={alumni?.contactNo}
        email={alumni?.emailPersonal}
        year={alumni?.batch}
      />
      ))}
      {/* <Card
        name="John"
        company="Acme Inc."
        telephone="555-555-5555"
        email="john.doe@example.com"
        year="2023"
      />{" "}
      <Card
        name="John"
        company="Acme Inc."
        telephone="555-555-5555"
        email="john.doe@example.com"
        year="2023"
      />{" "}
      <Card
        name="John"
        company="Acme Inc."
        telephone="555-555-5555"
        email="john.doe@example.com"
        year="2023"
      />
      {" "}
      <Card
        name="John"
        company="Acme Inc."
        telephone="555-555-5555"
        email="john.doe@example.com"
        year="2023"
      /> */}
    </div>
  );
}

export default CS