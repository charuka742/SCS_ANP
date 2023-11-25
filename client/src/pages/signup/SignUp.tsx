import { useState } from "react";
import image from "../../photos/uni_logo.png";
import "./Signup.css";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

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

  const userType = ["Your type", "Alumini", "Undergrtuate"];

  const navigate = useNavigate();

  // const {
  //   register,
  //   handleRegister,
  //   formState: { errors },
  // } = useForm();

  //Hnadle form submit
  const handleRegister = (e: any) => {
    e.preventDefault();

    const newUser = {
      fname: fname,
      lname: lname,
      email: email,
      telephone: telephone,
      indexnum: indexnum,
      userRole: userRole,
      password: password,
      
    };
    console.log(newUser);
    console.log(cpassword);

    if (password === cpassword) {
      console.log(newUser);
      var config = {
        method: "post",
        url: `${process.env.REACT_APP_API_BASE_URL}/user/auth/register`,
        headers: {
          "Content-Type": "application/json",
        },
        data: newUser,
      };

      axios(config)
        .then(function (response) {
          console.log(response);
          if (response.data.status === 1) {
            console.log(response.data);
            // window.location.reload();
            toast.success("Registation Successful");
            navigate("/login");
            navigate(0);
            return;
          } else {
            toast.error("Bad Credentials");
            console.log(response.data.message);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      setIsPasswordMismatch(true);
    }
  };

  return (
    <div style={{ marginTop: "30px", marginBottom: "30px" }}>
      <form action="" method="" className="sign">
        <img className="logo" src={image} alt="univetsity logo" />
        <h2 className="header">SIGN UP</h2>
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
            {userType.map((item, index) => (
              <option value={item} key={index}>
                {item}
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
