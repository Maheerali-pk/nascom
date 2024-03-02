const Profile = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center w-full">
      <span className="flex gap-0 relative">
        {/* <img src={ProfileBg} alt="Background" /> */}
        <div className="w-[130px] h-[130px] rounded-full overflow-hidden border">
          <img src="/images/profile.jpg" alt="Profile" className="rounded-full w-full h-full object-cover" />
        </div>
      </span>
      <div className="flex gap-4">
        <button type="button" className="font-bold text-gray-400 underline">Update</button>
        <button type="button" className="font-bold text-primary-400 underline">Remove</button>
      </div>
    </div>
  );
};

export default Profile;
