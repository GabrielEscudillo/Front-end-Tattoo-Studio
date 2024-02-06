import { CustomInput } from "../../Components/CustomInput/CustomInput";
import "./Register.css";
import { useEffect, useState } from "react";

export const Register = () => {
  const [registerData, setRegisterData] = useState({
    name: "",
    last_name: "",
    address: "",
    email: "",
    password: "",
    phone_number: "",
  });

  const inputHandler = (event) => {
    setRegisterData((prevState) => ({
        ...prevState,
        [event.target.name]: event.target.value,
    }));
};
console.table(registerData);
  return (
    <>
      <div className="body">
        <div className="requiredFields">
          <CustomInput
            placeholder={"name"}
            type={"text"}
            name={"name"}
            handler={inputHandler}
          ></CustomInput>
          <CustomInput
            placeholder={"last_name"}
            type={"text"}
            name={"last_name"}
            handler={inputHandler}
          ></CustomInput>
          <CustomInput
            placeholder={"address"}
            type={"text"}
            name={"address"}
            handler={inputHandler}
          ></CustomInput>
          <CustomInput
            placeholder={"email"}
            type={"email"}
            name={"email"}
            handler={inputHandler}
          ></CustomInput>
          <CustomInput
            placeholder={"password"}
            type={"password"}
            name={"password"}
            handler={inputHandler}
          ></CustomInput>
          <CustomInput
            placeholder={"phone_number"}
            type={"phone_number"}
            name={"phone_number"}
            handler={inputHandler}
          ></CustomInput>
        </div>
        <input
          type="submit"
          onClick={buttonHandler}
          value="Register"
        ></input>
      </div>
    </>
  );
};
