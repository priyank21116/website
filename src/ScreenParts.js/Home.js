import React from 'react'

import homecoding from '../images/homecoding.gif'
const Home = () => {
      return (
            <div className="bg-black h-full w-full flex">
                  <div className="w-3/6 p-24"> 
                  <p className="text-white font-bold m-2 text-2xl mb-2"> Hey ! I'm <br/><br />
                    <span className="  text-green-700 pl-4  font-boldv -ml-5 text-7xl" style={{ color:"#7CFC00"}}>Priyank</span></p>
                    <p className=" text-white font-bold my-8 text-4xl">I'm a Full Stack developer</p>
</div>
                  <div className="pb-20">
                  <img src={homecoding} alt="homecoding" />
                  </div>
            </div>
      )
}

export default Home
