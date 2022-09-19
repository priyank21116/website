import React from 'react'

import homecoding from '../images/homecoding.gif'
const Home = () => {
      return (
            <div className="bg-black h-full w-full flex border-b">
<hr style={{ color:"#7CFC00"}}></hr>

                  <div className="w-3/6 p-24"> 
                  <p className="text-white font-bold m-2 text-2xl mb-2"> Hey ! I'm <br/><br />
                    <span className="  text-green-700 pl-4  font-boldv -ml-7 text-7xl" style={{ color:"#7CFC00"}}>Priyank</span></p>
                    <p className=" text-white font-bold my-8 text-xl"> React | React Native | MERN stack | Frontend Web & Mobile app developer.</p>
</div>
                  <div className="pb-20">
                  <img src={homecoding} alt="homecoding" />
                  </div>
            <hr id="linee" className='skill'></hr>

            </div>
      )
}

export default Home
