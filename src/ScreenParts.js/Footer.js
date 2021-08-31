import React from 'react'
import mmm from '../images/contact.jpg'
const Footer = () => {
      return (
            <div className="bg-black pt-8">
                  <div className="h-2 w-full mb-2" style={{ backgroundColor: "#7CFC00" }}></div>

                  <div className="h-52 flex text-blue-600">

                       
                        <div className="text-weigth mx-auto -mb-0">
                              <h1 className=" pt-4 my-4 text-center font-bold text-5xl" style={{ color:"#7CFC00"}}>I'm <span style={{color:"#ff4500"}}>Open</span> for freelancing.</h1>
                        </div>
                  </div>
                  <footer>
<hr className="-mt-16 mb-16"></hr>
                        <div className="text-white tracking-wide leading-relaxed text-xl">

                              <div className="flex mx-20 pb-16" >
                                    <div className="w-2/6">
                                          <h3>know about</h3>
                                          <ul>
                                                <li>Skills</li>
                                                <li>About</li>
                                                <li>Projrcts</li>
                                                <li>Blogs</li>
                                          </ul>
                                    </div>
                                    <div className="w-2/6">
                                          <h3>checkout my handles</h3>
                                          <ul>
                                                <li>LinkedIn</li>
                                                <li>Github</li>
                                                <li>Leetcode</li>

                                          </ul>
                                    </div>
                                    <div className="w-2/6">
                                          <h3>Ping me on</h3>
                                          <ul>

                                                <li>email: 2019116@iiitdmj.ac.in</li>
                                                <li>mobile :8085879544</li>
                                                <li><input placeholder="write a message"></input><button>submit</button></li>
                                          </ul>
                                    </div>
                              </div>


                        </div>

                  </footer>

            </div>

      )
}

export default Footer
