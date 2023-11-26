import { useEffect, useState } from "react";
import image from "../../photos/uni_logo.png";
import "./Signup.css";
// import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
// import { useForm } from "react-hook-form";
import AuthServices from "services/AuthServices";

function SignUp() {
  const [fname, setFname] = useState<any>();
  const [lname, setLname] = useState<any>();
  const [email, setEmail] = useState<any>();
  const [telephone, setTelephone] = useState<any>();
  const [indexnum, setiIndexnum] = useState<any>();
  const [userRole, setUserRole] = useState<any>()
  const [password, setPassword] = useState<any>();
  const [cpassword, setCpassword] = useState<any>();
  const [isPasswordMismatch, setIsPasswordMismatch] = useState<any>(false);

  const validatePassword = () => {
    if (password !== cpassword) {
      setIsPasswordMismatch(true);
    } else {
      setIsPasswordMismatch(false);
    }
  };

  const userType = [{
    name:"Alumni",
    value:"ALUMNI"
  },
  {
    name:"Undergraduate",
    value:"STUDENT"
  }];

  const navigate = useNavigate();
  const [userJson, setUserJson] = useState<any>(null);

  useEffect(()=>{
    const u=localStorage.getItem("loggedUser");
    console.log(u)
    if(u!=null){
      setUserJson(u)
      const role=localStorage.getItem("role")
      if(role==="ALUMNI"){
        navigate("/userDetails")
      }
      else{
        navigate("/Category")
      }
    }
  },[])

  const [error, setError] = useState<any>();

  const validateForm=()=>{
    setError("");
    if(!fname){
      setError("Enter first name")
      return false
    }
    else if(!lname){
      setError("Enter last name")
      return false
    }
    else if(!email){
      setError("Enter email")
      return false
    }
    else if(!telephone){
      setError("Enter mobile number")
      return false
    }
    else if(!indexnum){
      setError("Enter index number")
      return false
    }
    else if(!userRole){
      setError("Select role")
      return false
    }
    else if(!password){
      setError("Enter password")
      return false
    }
    else if(!cpassword){
      setError("Enter confirm password")
      return false
    }
    return true;
   }

  
  const handleRegister = (e: any) => {
    e.preventDefault();

    if(!validateForm()){
      return;
    }

    if (password !== cpassword) {
      setError("Passwords are didn't matched")
      return;
    }

    // if (password !== cpassword) {
    //   setError("Passwords are didn't matched")
    //   return;
    // }
    const newUser = {
      fname: fname,
      lname: lname,
      emailPersonal: email,
      contactNo: telephone,
      regNo: indexnum,
      password: password,
      
    };
    console.log(newUser)

    if(userRole==="ALUMNI"){
      AuthServices.registerAlumni(newUser).then((res:any)=>{
        if(res?.status===200){
          localStorage.setItem("loggedUser",JSON.stringify(res?.data?.data));
          localStorage.setItem("role",userRole);
          navigate("/")    
        }
      }).catch((e:any)=>{console.log(e)})
    }
    else{
      AuthServices.registerStudent(newUser).then((res:any)=>{
        if(res?.status===200){
          localStorage.setItem("loggedUser",JSON.stringify(res?.data?.data));
          localStorage.setItem("role",userRole);
          navigate("/Category")    
        }
      }).catch((e:any)=>{console.log(e)})
    }
      
  };

  return (
    <div style={{ marginTop: "30px", marginBottom: "30px" }}>
      <form action="" method="" className="sign">
        <img className="logo" src={image} alt="univetsity logo" />
        <h2 className="header">SIGN UP</h2>

        {error&&
            <p className="w-full text-center text-sm text-red-600 mt-5 mb-2 font-bold">{error}</p>}
        <div className="input-section">
          <label className="input-label" htmlFor="fname">
            FIRST NAME
          </label>
          <input
            type="text"
            className="input-text"
            id="fname"
            placeholder="First Name"
            // {...register("fname", {
            //   required: true,
            // })}
            // variant="outlined"
            // />
            onChange={(e) => {
              setFname(e.target.value);
            }}
          />
          {/* {errors.fname && (
            <p className="text-xs text-red-600">First name is required</p>
          )} */}
        </div>
        <div className="input-section">
          <label className="input-label" htmlFor="lname">
            LAST NAME
          </label>
          <input
            type="text"
            className="input-text"
            id="lname"
            placeholder="Last Name"
            onChange={(e) => {
              setLname(e.target.value);
            }}
          />
        </div>
        <div className="input-section">
          <label className="input-label" htmlFor="email">
            EMAIL
          </label>
          <input
            type="text"
            className="input-text"
            id="email"
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="input-section">
          <label className="input-label" htmlFor="telephone">
            Telephone Number
          </label>
          <input
            type="tel"
            className="input-text"
            id="telephone"
            placeholder="Telephone Number"
            onChange={(e) => {
              setTelephone(e.target.value);
            }}
          />
        </div>
        <div className="input-section">
          <label className="input-label" htmlFor="telephone">
            Index Number
          </label>
          <input
            type="index"
            className="input-text"
            id="indexnum"
            placeholder="Index Number"
            onChange={(e) => {
              setiIndexnum(e.target.value);
            }}
          />
        </div>
        <div className="input-section">
          <label className="input-label" htmlFor="userRole">
            User Type
          </label>
          <select
            className="input-text"
            id="userRole"
            onChange={(e) => setUserRole(e.target.value)}
          >
            <option value={""} selected disabled>
                Select Type
              </option>
            {userType.map((item, index) => (
              <option value={item?.value} key={index}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <div className="input-section">
          <label className="input-label" htmlFor="password">
            PASSWORD
          </label>
          <input
            type="password"
            className="input-text"
            id="password"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          {/* <p onClick={handleClick}>show pw</p> */}
        </div>
        <div className="input-section">
          <label className="input-label" htmlFor="cpassword">
            CONFIRM PASSWORD
          </label>
          <input
            type="password"
            className="input-text"
            id="cpassword"
            placeholder="Confirm Password"
            onChange={(e) => {
              setCpassword(e.target.value);
              setIsPasswordMismatch(false);
            }}
          />
        </div>
        {isPasswordMismatch && <p>Password mismatch</p>}
        <button className="submit" onClick={(e) => handleRegister(e)}>
          Register
        </button>
      </form>
    </div>
  );
}

export default SignUp;
