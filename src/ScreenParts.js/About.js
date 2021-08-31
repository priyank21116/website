import React from 'react'
import prkphoto from '../images/prkphoto.jpeg'


const About = () => {
      return (
            <div className="bg-black" >
            <hr></hr>
             <h1 className=" mt-8 font bold text-center font-bold text-5xl" style={{ color:"#7CFC00"}}> ABOUT </h1>
             
                  <div className="flex h-4/6 text-white bg-black full pl-24">
                              <div className="w-60 h-60 h-auto border-0 rounded-full overflow-hidden ">
                                    <img className="aboutimg" src={prkphoto} alt="about"></img>
                              </div>

                              <div className="w-4/6 p-20 items-center justify-center">
                                    <p>I'm a Full Stack Web Developer with MERN stack . I'm committed to learn, grow and excel in Development sector.
                                          Tried hands on Ml, DS stuff in past , therefore have a gist of techs in AI world also.
                                          Beside these I'm strengthening my problem solving skill and gaining hold on Data structure and algorithm.
                                          All this said and done, but my current working domain is MERN stack and I'm aspiring to develop impactful websites n applications and with that some good relationships and networks too.</p>
                                    <button> Download Resume</button>
                              </div>
                      
                  </div>

            </div>
      )
}

export default About
