import Navbar from '../../base-compoents/Navbar';
import ProjectItem from './components/ProjectItem'

function Projects() {
  const loading = false;
  const projects = [
    {
      id: "1",
      title: 'Project 1',
      image: 'https://via.placeholder.com/150',
      price: '100,000',
      location: 'Lagos',
      projectDeveloper: 'Developer 1'
    },
    {
      id: "2",
      title: 'Project 2',
      image: 'https://via.placeholder.com/150',
      price: '200,000',
      location: 'Abuja',
      projectDeveloper: 'Developer 2'
    },
    {
      id: "3",
      title: 'Project 3',
      image: 'https://via.placeholder.com/150',
      price: '300,000',
      location: 'Port Harcourt',
      projectDeveloper: 'Developer 3'
    },
    {
      id: "4",
      title: 'Project 4',
      image: 'https://via.placeholder.com/150',
      price: '400,000',
      location: 'Enugu',
      projectDeveloper: 'Developer 4'
    },
  ]
  return (
    <>
    <Navbar />
    <div className='px-8'>
      <div className='flex gap-0 justify-between items-center'>
        <h1 className='text-2xl mb-4 mt-8 font-semibold'>Projects</h1>
        <button type='button' className='bg-primary-700 hover:bg-primary-900 text-white px-4 h-fit transition-all duration-300' onClick={() => console.log('clicked')} color='primary'>Add Project</button>
      </div>
      {projects.length > 0 ? (
        <div className={`grid ${ projects.length > 3 ? "grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4" : `grid-cols-1 md:grid-cols-2 xl:grid-cols-3`} gap-4 w-full`}>
          {projects.map((project) => (
            <ProjectItem key={project.id} 
              id={project.id} 
              title={project.title} 
              image={project.image} 
              price={project.price}
              location={project.location}
              projectDeveloper={project.projectDeveloper}
            />
          ))}
      </div>
      ) : !projects && loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 w-full mt-4">
              {[...Array(12)].map((val, index) => (
                <div
                  className={`animate-pulse bg-transparent border border-gray-300 px-4 py-7 rounded-md mx-auto w-full font-avant-grade-semibold`}
                  key={index}
                >
                  <div className="w-full h-[180px] rounded-md bg-gray-300"></div>
                  <div className="px-4">
                    <div className="flex flex-col w-full mt-4 gap-2 font-avant-grade-bold">
                      <div className="flex justify-between items-center">
                        <h2 className="text-xl font-bold py-4 bg-gray-300 w-36 rounded-md"></h2>
                      </div>
                      <span className="text-gray-500 py-3 bg-gray-300 rounded-md w-24"></span>
                    </div>
                    <div className="text-xl sm:text-2xl font-bold bg-gray-300 py-6 rounded-md px-24 mt-4 w-fit"></div>
                    <div className="flex gap-0 sm:gap-2 my-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="gray"
                        viewBox="0 0 24 24"
                        strokeWidth={0}
                        stroke=""
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
                      <span className="text-sm sm:text-base py-2 bg-gray-300 w-24 rounded-md"></span>
                    </div>
                    <div className="flex gap-2 sm:gap-4 w-full">
                      <div className="flex items-center gap-2 py-2 pr-2">
                        <span className="w-6 h-6 bg-transparent rounded-md bg-gray-300" />
                        <span className="py-2 px-6 bg-gray-300 rounded-md"></span>
                      </div>
                      <div className="flex items-center gap-2 py-2 pr-2">
                        <div className="relative">
                          <i className="fa-solid fa-calculator text-xl text-gray-300"></i>
                        </div>
                        <span className="py-2 px-4 bg-gray-300 rounded-md"></span>
                      </div>
                    </div>
                    <div className="relative flex items-center gap-2 pl-2 w-full">
                      <i className="fas fa-calendar-alt text-xl text-gray-300"></i>
                      <span className="py-2 px-4 bg-gray-300 rounded-md"></span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            !projects &&
            !loading && (
              <div className="w-full justify-center md:mt-12">
                <div className="text-white text-center w-full font-avant-grade-bold text-3xl pt-3">
                  No Results Found
                </div>
                <div className="my-6  text-white text-xl text-center font-avant-grade-bold">
                  Your search preferences have{" "}
                  <span className="text-dark">(0) results</span>.
                </div>
                <div className="font-bold text-center text-3xl text-white w-full">
                  <span>Try again? </span>
                </div>
              </div>
            )
          )}
    </div>
    </>
  )
}

export default Projects
