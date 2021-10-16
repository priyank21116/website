import React from 'react'
import heyperson from '../images/heyperson.gif'

const Hello = () => {
      return (
            <div className=" ">
            <div className="w-1/2 h-screen justify-content  items-align mx-auto">
            <img className=" h-full py-8 pl-12  " src={heyperson} alt="Hey!!!" />
            </div>
            </div>
      )
}

export default Hello
