import React from 'react'
import html from '../images/html.png'
import css from '../images/css.png'
import javascript from '../images/javascript.png'
import bootstrape from '../images/bootstrape.png'
import materailui from '../images/materailui.png'
import reduxx from '../images/redux.png'
import reactt from '../images/react.png'
import nodejs from '../images/nodejs.png'
import mongo from '../images/mongo.png'
import pyhton from '../images/pyhton.png'



const Skills = () => {
      return (
      
                  <div id="skill" className="bg-black">
                        <div className="my-5 pt-4">
                              <h1 className=" font bold pt-4 my-4 text-center font-bold text-5xl" style={{ color:"#7CFC00"}}>SKILL SET</h1>
                              <hr id="linee"></hr>

                        </div>
                        <div className="flex bg-black">

                              <div className="">
                                    <div className=" flex mt-10">
                                          <img className=" w-36 mx-14 h-36 bg-white border-1 rounded-3xl" src={html} alt="xyz"></img>
                                          <img className=" w-36 mx-14 h-36 bg-white border-1 rounded-3xl" src={css} alt="xyz"></img>
                                          <img className=" w-36 mx-14 h-36 bg-white border-1 rounded-3xl" src={javascript} alt="xyz"></img>
                                          <img className=" w-36 mx-14 h-36 bg-white border-1 rounded-3xl" src={bootstrape} alt="xyz"></img>
                                          <img className=" w-36 mx-14 h-36 bg-white border-1 rounded-3xl" src={materailui} alt="xyz"></img>

                                    </div>
                                    <div  className="flex mt-10">
                                          <img className=" w-36 mx-14 h-36 bg-white border-1 rounded-3xl" src={reactt} alt="xyz"></img>
                                          <img className=" w-36 mx-14 h-36 bg-white border-1 rounded-3xl" src={reduxx} alt="xyz"></img>
                                          <img className=" w-36 mx-14 h-36 bg-white border-1 rounded-3xl" src={nodejs} alt="xyz"></img>
                                          <img className=" w-36 mx-14 h-36 bg-white border-1 rounded-3xl" src={mongo} alt="xyz"></img>
                                          <img className=" w-36 mx-14 h-36 bg-white border-1 rounded-3xl" src={pyhton} alt="xyz"></img>
                                    </div>


                                  

                             
                             
                        </div>

                      
                  </div>

                  <div className="h-3 mt-16 w-full" style={{backgroundColor :"#7CFC00"}}></div>
            </div>
            

                  )
}

export default Skills