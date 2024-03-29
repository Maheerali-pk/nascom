import { Link } from "react-router-dom";

const ProjectItem = ({ id, projectDeveloper, title, image, price, location, className }: IProject) => {
  title = title.split(" ").join("");

  const onClickHandler = () => {
    console.log("clicked");
    // navigate(`/property/${data.id}/${title}`, { state: { projectDeveloper } });
    // navigate(`/property`, {
    //   state: { id: data.id, projectDeveloper },
    // });
  };

  return (
    <Link to={`/project-details/?projectId=${id}`}
      className={`${className} bg-gray-50 px-4 py-7 rounded-md mx-auto w-3/4 sm:w-4/5 md:w-11/12 font-avant-grade-semibold`}
    >
      <img src={image} alt={title} className="rounded-md w-full h-[190px] bg-[#EFEFEF]"/>
      <div className="px-4">
        <div className="flex flex-col w-full mt-4 gap-0 font-avant-grade-bold">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">{title}</h2>
          </div>
          <span className="text-gray-500">
            {projectDeveloper || "Project Developer"}
          </span>
        </div>

        <div className="flex flex-col gap-0 mt-1">
          <h3 className="text-xl sm:text-2xl font-bold text-primary">
            {(price)}
          </h3>
          {/* <span className="font-semibold">{data.continent || ''}</span> */}
        </div>
        <div className="flex gap-0 sm:gap-2 my-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.3}
            stroke="rgba(208,157,54,255)"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>
          <span className="text-sm sm:text-base">{location}</span>
        </div>        
      </div>
    </Link>
  );
};
export default ProjectItem;
