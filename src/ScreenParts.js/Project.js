import React from 'react'
import curveback from '../images/curveback.png'
const project = [
      {
            title: "Emart",

            duration: " July2021-present ",
            detail: "Meant for real ecommerce trading Customer can filter and sort items based on parameters. Can add items on wishlist or directly on his cart, place order and checkout.Shopkeeper can add new item on his store site anytime.The backend of this app uses Nodejs, Express, Mongo db. Postman for api test. Frontend uses Reactjs, Redux",
      },
      {
            title: "InfoVaccine",
            duration: " May-2021",

            detail: "In the time when nobody was getting vaccination slot I tried to create this app to find a slot easily. It get your details saved. Refresh itself timely and whenever a vaccine gets available in your location it I form u via mail. I uses Html, Css, Cowin api and Express.",
      },
      {
            title: "Mpeb",

            duration: "July-2021",
            detail: "It's an app process electric bills of household digitally, reducing human cost. Households can login via IVRS nos, send live image of electric meters along with reading. Someone at board can verify reading, raise error if needed, or if reading is correct can send bill to user via message. Uses Reactjs, Redux, Express, Mongoose.",


      },

]


const Project = () => {
      return (


            <div className="bg-black -mt-4">
                  <h1 className=" font bold pt-4 my-4 text-center font-bold text-5xl" style={{ color: "#7CFC00" }}>Projects</h1>
                  <hr id="linee"></hr>

                  <div className="" >
                  {project.map((item)=>(
                        <div class=" grid-cols-6 mx-8 mx-12 mx-auto bg-white border-2 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                              <div class="md:flex bg-black">
                                    <div class="md:flex-shrink-0">
                                          <img class="h-48 p-4 w-full  object-cover md:h-full md:w-48" src={curveback} alt="Man looking at item at a store" />
                                    </div>
                                    <div class="p-8 bg-black">
                                          <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{item.title}</div>
                                          {/* <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding customers for your new business</a> */}
                                          <p class="mt-2 text-white ">{item.detail}</p>
                                    </div>
                              </div>
                        </div>
                        ))}
                       
                  </div>
            </div>
      )
}

export default Project
