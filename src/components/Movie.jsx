import React from 'react'
import pic1 from "../images/AlienPoster.avif"
import pic2 from "../images/BondPoster.jpg"
import pic4 from "../images/jokerPoster.jpg"
import pic5 from "../images/RockyPoster.webp"
function Movie({item}) {
  return (
    <>
    <div className='w-[200px] h-[300px] rounded-md cursor-pointer transition duration-300 transform hover:scale-110'>
    <img className="w-full h-full object-cover rounded-md  transition duration-300" src={item} alt="" />
    </div>
    </>
  )
}

export default Movie