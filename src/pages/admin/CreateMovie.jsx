import React, { useState } from 'react';

function CreateMovie() {
  const[image,setImage]=useState("");
  function getImage(e){
    const file=e.target.files[0];
    let tempURL=URL.createObjectURL(file)
    setImage(tempURL)
    document.getElementById("realImg").src=tempURL
    document.querySelector(".uploading > h2").style.display="none"
  }
  return (
    <div className="w-full min-h-screen flex flex-col font-poppins bg-zinc-700 text-white px-10 py-6">

      {/* Heading at Top Left */}
      <h3 className="text-3xl font-bold">Add a New Movie</h3>
      <div>
        <div className="flex w-[40vw]  bg-zinc-200 rounded-lg p-2 mb-6 mt-6">
          <input
            required
            type="text"
            autoComplete="off"
            placeholder="Movie Name"

            className="flex-1 bg-transparent  appearance-none border-none outline-none rounded-md m-2 text-black "

          />
        </div>
        <div className="flex w-[40vw]  bg-zinc-200 rounded-lg p-2 mb-6 mt-6">
          <input
            required
            type="text"
            autoComplete="off"
            placeholder="video Url"

            className="flex-1 bg-transparent  appearance-none border-none outline-none rounded-md m-2 text-black "

          />
        </div>
        <div className="flex w-[40vw]  bg-zinc-200 rounded-lg p-2 mb-6 mt-6">
          <textarea
            required
            
            autoComplete="off"
            placeholder="Description"

            className="flex-1 min-h-[100px] bg-transparent  appearance-none border-none outline-none rounded-md m-2 text-black "

          />
        </div>
        <div className="flex w-[40vw]  bg-zinc-200 rounded-lg p-2 mb-6 mt-6">
          <input
            type="file"
            id="file" 
            hidden
            onChange={getImage}
            className="flex-1 bg-transparent  appearance-none border-none outline-none rounded-md m-2 text-black "
          />
          <div
          onClick={(e)=>{document.getElementById("file").click();}}
           className=' uploading bg-zinc-200 flex items-center overflow-hidden justfify-centre w-[200px] h-[300px] rounded-xl cursor-pointer'>
            <img id="realImg" />
            <h2 className='text-black text-xl ml-[140px]'>Image</h2>
          </div>

        </div>
        <button className="px-4 py-2   bg-blue-600 text-white rounded-md cursor-pointer text-xl border-0 w-[140px] hover:bg-blue-700 transition">
              Add Movie
            </button>
      </div>

    </div>
  );
}

export default CreateMovie;