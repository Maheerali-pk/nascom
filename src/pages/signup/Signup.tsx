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
import { useEffect } from "react";
import PageWrapper from "../../components/PageWrapper";
import UploadFile from "../../components/UploadFile";
import NotificationPopup from "../../components/NotificationPopup";
import { routes } from "../../utils/constants";
import { useNavigate } from "react-router-dom";
import { icons } from "../../utils/helpers";
import { registerApi } from "../../apis/auth";
import Textarea from "../../components/Textarea";

const Signup: React.FC = () => {
   const [state, dispatch] = useGlobalContext();
   const navigate = useNavigate();
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
   const [email, setEmail] = useState("");
   const [experience, setExperience] = useState("");
   const [interest, setInterest] = useState("");
   const [location, setLocation] = useState("");
   const onSubmit = async () => {
      dispatch({ setState: { loading: true } });
      await registerApi({
         email,
         interest,
         location,
         password,
         username,
         experience,
      });
      dispatch({ setState: { loading: false } });
   };

   return (
      <>
         <AuthPageWrapper
            icon={<></>}
            // icon={icons..login}
            heading="Create a new account"
            subHeading="Become a memeber"
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
                  label="Username"
                  placeholder="Enter your username"
               ></Input>
               <Input
                  value={password}
                  onChange={setPassword}
                  label="Password"
                  placeholder="Enter your password"
                  helperText="This is a hint text to help user."
                  endIcon={icons.input.question}
               ></Input>
               <Input
                  onChange={setEmail}
                  value={email}
                  label="Email"
                  placeholder="Enter your email"
               ></Input>
               <Input
                  onChange={setExperience}
                  value={experience}
                  type="number"
                  label="What is your experience in gerdening"
                  placeholder="No of years"
               ></Input>
               <Textarea
                  onChange={setInterest}
                  value={interest}
                  type="text"
                  label="Interests"
                  placeholder="Write about your interests"
               ></Textarea>
               <Input
                  onChange={setLocation}
                  value={location}
                  type="text"
                  label="Location"
                  placeholder="Location"
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
               Sign up
            </button>

            <div className="flex gap-1 w-full justify-center items-center mb-10">
               <div className="text-sm text-gray-600">
                  Already have an account?
               </div>
               <div
                  className="btn btn-link btn-primary w-fit"
                  onClick={() => navigate(routes.login)}
               >
                  Sign in
               </div>
            </div>
         </AuthPageWrapper>
      </>
   );
};

export default Signup;
