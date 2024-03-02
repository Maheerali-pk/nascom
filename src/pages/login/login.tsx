import { useState } from "react";
import AuthPageWrapper from "../../components/AuthPageWrapper";
import Checkbox from "../../components/Checkbox";
import CustomOTPInput from "../../components/CustomOTPInput";
import CustomRadioGroup from "../../components/CustomRadioGroup";
import DialogWrapper from "../../components/DialogWrapper";
import Input from "../../components/Input";
import Loader from "../../components/Loader";
import Navbar from "../../components/Navbar";
import ProfileSetupFooter from "../../components/ProfileSetupFooter";
import Select from "../../components/Select";
import {
   GlobalContextProvider,
   useGlobalContext,
} from "../../contexts/GlobalContext";
import * as React from "react";
import Swal from "sweetalert2";
import { routes } from "../../utils/constants";
import { useNavigate } from "react-router-dom";
import { icons } from "../../utils/helpers";
import { loginApi } from "../../apis/auth";

const Login: React.FC = () => {
   const [state, dispatch] = useGlobalContext();
   const navigate = useNavigate();
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
   const [usernameError, setUsernameError] = useState("");
   const [passwordError, setPasswordError] = useState("");
   const onSubmit = async () => {
      dispatch({ setState: { loading: true } });
      try {
         await loginApi({ username, password });
      } catch (err: any) {
         Swal.fire({ text: err.toString(), icon: "error", color: "red" });
      }
      dispatch({ setState: { loading: false } });
   };
   return (
      <>
         <AuthPageWrapper
            icon={<></>}
            // icon={icons..login}
            heading="Log in to your account"
            subHeading="Welcome back! Please enter your details."
         >
            <Loader></Loader>

            {/* <NotificationPopup
               acceptText="Got it, thanks"
               description="Your profile will be confidential and can be seen by recruiters only when you apply for their job."
               title="Your identity is safe & confidential"
               icon={icons.safety}
            ></NotificationPopup> */}
            <div className="inputs-y">
               <Input
                  onChange={setUsername}
                  value={username}
                  label="Email"
                  placeholder="Enter your email"
               ></Input>
               <Input
                  value={password}
                  onChange={setPassword}
                  label="Password"
                  placeholder="Enter your password"
                  helperText="This is a hint text to help user."
                  endIcon={icons.input.question}
               ></Input>
            </div>
            {/* <div className="flex  checkbox justify-between w-full my-6">
               <Checkbox
                  {...inputsData.rememberMe}
                  label="Remember for 30 days"
                  className="checkbox-sm"
               ></Checkbox>
               <div
                  onClick={() => router.push(routes.forgetPass.base)}
                  className=" cursor-pointer text-sm font-semibold text-primary-400"
               >
                  Forgot Password?
               </div>
            </div> */}
            <button
               className="btn-primary btn btn-sm mb-4 mt-4"
               data-testid="btn_sign-in"
               onClick={onSubmit}
            >
               Sign in
            </button>

            <div className="flex gap-1 w-full justify-center items-center mb-10">
               <div className="text-sm text-gray-600">
                  Don’t have an account?
               </div>
               <div
                  className="btn btn-link btn-primary w-fit"
                  onClick={() => navigate(routes.signup)}
               >
                  Sign up
               </div>
            </div>
         </AuthPageWrapper>
      </>
   );
};

export default Login;
