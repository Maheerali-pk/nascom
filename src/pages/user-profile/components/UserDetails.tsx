const UserProfile = (props) => {
  return (
    <div className="relative flex items-center justify-between gap-4 w-full  pt-2 pb-3 pr-2 m-2 border-b border-gray-400">
      <div className="flex items-center gap-4">
        <div className="align-middle items-center text-center h-[36px] w-[36px] rounded-full overflow-hidden">
          {/* <img src={Pic} alt="Client" className="" /> */}
          <span className="inline-block bg-secondary-400 w-full h-full"></span>
        </div>
        <div className="flex flex-col gap-2 font-gillsans">
          <h4 className="font-medium text-xs md:text-sm lg:text-base text-gray-500">{props.title}</h4>
          {!props.checkBoxes && (
            <h5 className="font-bold text-sm">{props.value}</h5>
          )}
          {props.checkBoxes && (
            <div className="font-bold text-sm flex gap-5">
              <div className="flex items-center gap-1">
                <input type="radio" name="gender" id="male" title="Female"/>
                <span>{props.value1}</span>
              </div>
              <div className="flex items-center gap-1">
                <input type="radio" name="gender" id="female" title="Male"/>
                <span>{props.value2}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default UserProfile;
