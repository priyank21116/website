import React from 'react'

import xxx from '../images/logo1transperant.png'

const Navbar = () => {
      return (
            <div className="flex h-24 w-full  text-white bg-black  border-b-4 shadow-xl  overflow-hidden bboor">
                  <div className="w-52 h-52 -mt-20 mx-16">
                        <img src={xxx} alt="Logo" />
                  </div>
                  <div className="flex float-right  text-white  ml-20 mt-10 object-right md:pl-96">
                       <p className={`w-20 h-24 hover:bg-black hover: border-0 rounded-xl`}>Home</p>
                       <p className="w-20 h-24 hover:bg-black hover:text-green-700 border-0 rounded-xl  ">About</p>
                       <p className="w-20 h-24 hover:bg-black hover:text-green-700 border-0 rounded-xl  ">Skills</p>
                       <p className="w-20 h-24 hover:bg-black hover:text-green-700 border-0 rounded-xl  ">Projects</p>
                  </div>
<div style={{ color:"#7CFC00",height:'2px'}}></div>
<hr id="linee" style={{ color:"#7CFC00",height:'2px'}}></hr>

            </div>
            

      )
}

export default Navbar

