// import ButtonProfile from "../../components/UI/ButtonProfile";
import UserDetails from "./components/UserDetails";
import Profile from "./components/Profile";

const UserProfile = () => {
  return (
    <div className="text-center lg:text-left px-6 md:px-10 lg:px-20 py-4 mb-6">
      <h2 className="my-8 text-2xl font-bold">My Profile</h2>
      <div className="flex justify-between flex-col-reverse md:flex-row gap-8">
        <div className="w-full">
          <UserDetails title="Full Name" value="Kajal Sharma" edit={true} />
          <UserDetails
            title="Mobile Number"
            value="+92 | 000009999"
            edit={true}
          />
          <UserDetails title="Email" value="kajavats96@gmail.com" edit={true} />
          <UserDetails title="Date of birth" value="24-06-1996" edit={false} />
          <UserDetails title="Gender" value1="Male" value2="Female" checkBoxes={true} edit={false} />
        </div>
        <Profile />
      </div>
      <div className="flex gap-4 mt-8 justify-center md:justify-start">
        <button type="button" className="bg-secondary-400 text-white">SAVE</button>
        <button type="button" className="bg-primary-400 hover:bg-primary-600 text-white transition-all duration-300">CANCEL</button>
      </div>
    </div>
  );
};

export default UserProfile;