import React from 'react'
import prkgupta from '../images/prkgupta.jpeg'


const About = () => {
      return (
            <div className="pt-20 pb-20 skill" >
            {/* <div style={{height:'2px',background-color:''}}></div> */}
            <div >
            <div style={{ color:"#7CFC00"}} className="skill">"     " </div>
            <hr id="linee" className='skill'></hr>
             <h1 className=" mt-8 font bold text-center font-bold text-5xl" style={{ color:"#7CFC00"}}> ABOUT </h1>
             </div>
                  <div className="flex h-4/6 text-white bg-black full pl-24">
                              <div className="w-60 h-60 h-auto border-0 rounded-full overflow-hidden ">
                                    <img className="aboutimg" src={prkgupta} alt="about"></img>
                              </div>

                              <div className="w-4/6 p-20 items-center justify-center">
                                    <p>I'm a Full Stack Web and Mobile app Developer with MERN stack and React Native .I'm committed to learn, grow and excel in Development sector.
                                          Tried hands on Ml and AI stuff in past.I consider myself an passinate, innovator, creator, developer and a startup enthusiast.
                                          Currently, my major explored area comprises Javascript and various tools under it to build awesome websites,applications and software.
                                          I'm up for new opportunities and associations,anytime. Just start converstion, drop me a message or write it to me on priyankgupta2120@gmail.com</p>
                                    {/* <button> Download Resume</button> */}
                              </div>
                      
                  </div>
                  <hr id="linee"></hr>

            </div>
      )
}

export default About
