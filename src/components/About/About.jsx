import { Helmet } from "react-helmet";
import logo from "../../assets/logo.png"
const About = () => {
  return (
    <div className="min-h-screen text-white">
      <Helmet>
        <title>About</title>
      </Helmet>
      <div className="lg:flex border-b pb-10 border-neutral-800 border-spacing-x-3 lg:justify-evenly items-center lg:py-16 px-4 lg:px-0">
        <div className="lg:w-1/2">
          <p className="hidden lg:block mt-10 text-4xl lg:text-6xl font-bold leading-normal lg:leading-snug mx-4 lg:mx-0">
            Our Vision is <br />
            <span className="bg-gradient-to-r from-cyan-300 to-indigo-500 text-transparent bg-clip-text">
              Automated AI
            </span>{" "}
            Healthcare <br /> Solution
          </p>
        </div>
        <div className="mt-8 lg:mt-0">
          <img
            src= "src\assets\logo.png"
            alt="ArogyaGuide Image"
            className="w-full max-w-2xl mx-auto lg:mx-0"
          />
        </div>
        <p className="lg:hidden mt-10 text-3xl leading-normal text-center font-bold mx-4">
          Our Vision is{" "}
          <span className="bg-gradient-to-r from-cyan-300 to-indigo-500 text-transparent bg-clip-text">
            Automated AI
          </span>{" "}
          Healthcare Solution
        </p>
      </div>
      <br />
      <h1 className="text-center mt-5 text-2xl lg:text-3xl">
        Write A Love Letter To Develepers❤️
      </h1>
      <div className="py-12 mx-5">
        <div className="flex justify-center items-center lg:flex-row flex-col">
          <div className="lg:mx-4 mb-6">
            <div className="bg-gray-800 hover:bg-slate-950 rounded-lg p-6 shadow-neumorphism">
              <div className="flex flex-col items-center">
             
                <h2 className="text-2xl font-bold mb-2 text-center">
                  Kundan Rajoria
                </h2>
                <p className="text-xl mb-4 text-center">
                  Developer
                </p>
              </div>
              <div className="grid grid-cols-2 gap-x-4 gap-y-4 text-sm">
                <p className="font-semibold">Session:</p>
                <p>2025</p>
                <p className="font-semibold">Program:</p>
                <p> Computer Science</p>
                <p className="font-semibold">College:</p>
                <p>MIT Ujjain</p>
                <p className="font-semibold">Email:</p>
                <p className="whitespace-normal break-all">rajoriakundan@gmail.com</p>


              </div>
            </div>
          </div> 
           <div className="lg:mx-4 mb-6">
            <div className="bg-gray-800 hover:bg-slate-950 rounded-lg p-6 shadow-neumorphism">
              <div className="flex flex-col items-center">
              
                <h2 className="text-2xl font-bold mb-2 text-center">
                  kratik khatri
                </h2>
                <p className="text-xl mb-4 text-center">Developer</p>
              </div>
              <div className="grid grid-cols-2 gap-x-4 gap-y-4 text-sm">
              <p className="font-semibold">Session:</p>
                <p>2025</p>
                <p className="font-semibold">Program:</p>
                <p> Computer Science</p>
                <p className="font-semibold">College:</p>
                <p>MIT Ujjain</p>
                
                <p className="font-semibold">Email:</p>
                
                
                <p className="whitespace-normal break-all">kratikkhatri7287@gmail.com</p>

              </div>
            </div>
          </div>
          <div className="lg:mx-4 mb-6">
            <div className="bg-gray-800 hover:bg-slate-950 rounded-lg p-6 shadow-neumorphism">
              <div className="flex flex-col items-center">
              
                <h2 className="text-2xl font-bold mb-2 text-center">
                  Keshav Nagar
                </h2>
                <p className="text-xl mb-4 text-center">Developer</p>
              </div>
              <div className="grid grid-cols-2 gap-x-4 gap-y-4 text-sm">
              <p className="font-semibold">Session:</p>
                <p>2025</p>
                <p className="font-semibold">Program:</p>
                <p> Computer Science</p>
                <p className="font-semibold">College:</p>
                <p>MIT Ujjain</p>
                <p className="font-semibold">Email:</p>
                
                <p className="whitespace-normal break-all">keshavnagar887@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
