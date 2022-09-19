import React from 'react'
import curveback from '../images/curveback.png'
const project = [
      {
            title: "Workfig",

            duration: " Oct-2021 ",
            detail: "Solves the problem of daily wage utility workers not getting work and of common people who could not find accurate servicemen for daily household jobs..Developed a React native mobile application which connects servicemen and CLients.This is single app for both serviceman as well as work provider, The user chooses his role either as serviceman or Work Provider, login and thereafter app divides into 2 branches.each has different set of screens, functionality,features and UI for a seamless experince to job seeker and job provider.Beside basic functionality like login, registering verification ->i have integrated functionalities like Google map for live location detaction,Push notifications Various feature to choose domain ,read reviews,set a deal,Post reviews , If not satisfied with quality, raise a report, etc",
      },
      {
            title: "Pickflip-",
            duration: " Oct-2021",

            detail: "An application which facilitate  Offline shopping(by replacing billing counter) and stock management process in stores. AOI- development,PS through Coding, AI-ML .Making a web app which replace most tedious part of shopping in stores i.e. billing counter. It add items into your invoice on go. User just need to speak item id and quantity of item on microphone and it detect command and save it. It enable easy checkout. It automate items stock management as well reducing manpower need. Beside its runs mask-detection tensorflow algorithm in background to keep a mask check on customer.It uses React, Firebase, Tensorflow, Material-ui."
      },
      {
            title: "InfoVaccine",

            duration: "July-2021",
            detail: "Created an app to conveniently find a vaccination appointment. It notifies the user whenever a vacant slot is available in nearby locality. I developed a server which gets your details saved via a simple html form, calls the Cowin API in intervals, fetchesprocesses data, and informs the user about availabilityThis web application uses Express, Html, Css and Cowin api",


      },

]


const Project = () => {
      return (


            <div className=" mt-1 mb-4">
                  <h1 className=" font bold pt-4 text-center font-bold text-5xl my-7 mb-7" style={{ color: "#7CFC00" }}>Projects</h1>
                  {/* <hr id="linee"></hr> */}

                  <div className=" mt-8 flex transition duration-500 ease-in-out duration-300 ease-out delay-150 " >
                  {project.map((item)=>(
                        <div class="bg-white flex mx-2  grid-cols-4 mx border-2 rounded-xl shadow-md overflow-hidden">
                            
                                    {/* <div class="md:flex-shrink-0 bg-black">
                                          <img class="h-48 p-4 w-full  object-cover md:h-full md:w-48" src={curveback} alt="Man looking at item at a store" />
                                    </div> */}
                                    <div class="p-6">
                                          <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{item.title}</div>
                                          {/* <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding customers for your new business</a> */}
                                          <p class="mt-2 text-white ">{item.detail}</p>
                                    </div>
                            
                        </div>
                        ))}
                       
                  </div>
            </div>
      )
}

export default Project
