import React from 'react'
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import pic1 from "../images/AlienPoster.avif"
import pic2 from "../images/BondPoster.jpg"
import pic3 from "../images/DjangoPoster.avif"
import pic4 from "../images/jokerPoster.jpg"
import pic5 from "../images/RockyPoster.webp"
import pic6 from "../images/FODPoster.jpg"
import pic7 from "../images/Batman.jpg"
import pic8 from "../images/Dune.jpeg"
import pic10 from "../images/Beekeeper.webp"
import pic11 from "../images/PoorThings.avif"
import pic12 from "../images/PulpFiction.jpg"
import pic13 from "../images/Sicario.jpg"
import pic14 from "../images/StopMotionwebp.webp"
import pic15 from "../images/Inception.jpg"
import pic16 from "../images/RagingBull.jpg"
import pic17 from "../images/TTCM.jpg"
import pic18 from "../images/OUTIH.webp"
import pic9 from "../images/Fighter.avif"
import pic19 from "../images/1899.jpg"
import pic20 from "../images/dark.webp"
import pic21 from "../images/arcane.webp"
import pic22 from "../images/heeramandi.jpg"
import pic23 from "../images/HOC.jpg"
import pic24 from "../images/LastOfUs.jpeg"
import pic25 from "../images/theWitcher.jpg"
import pic26 from "../images/RebelMoonLong.webp"
import pic27 from "../images/RED.jpg"
import pic28 from "../images/THG.png"
import pic29 from "../images/watchman.webp"
import pic30 from "../images/mandalorian.jpg"
import pic31 from "../images/highTown.jpg"


import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Movie from '../components/Movie';


function Home() {
  return (
    <>
      <div className="w-screen h-full font-poppins bg-zinc-700 text-white">
        <div className="w-screen h-[500px] px-[80px] rounded-xl pt-5">
          <Swiper

            navigation={true}
            autoplay={
              {
                delay: 2500,
                disableOnInteraction: false
              }
            }
            modules={[Autoplay, Navigation, Pagination]}
            className="w-full h-full"
          >
            <SwiperSlide className="flex items-center justify-center rounded-2xl text-3xl font-bold bg-transparent">
              <img className="  rounded-xl w-full h-full max-h-[500px] object-contain " src={pic6} alt="" />
            </SwiperSlide>
            <SwiperSlide className="flex items-center justify-center rounded-2xl text-3xl font-bold bg-transparent">
              <img className="  rounded-xl w-full h-full max-h-[500px] object-contain" src={pic7} alt="" />
            </SwiperSlide>
            <SwiperSlide className="flex items-center justify-center rounded-2xl text-3xl font-bold bg-transparent">
              <img className=" rounded-xl w-full h-full max-h-[500px] object-contain" src={pic26} alt="" />
            </SwiperSlide>
            <SwiperSlide className="flex items-center justify-center rounded-2xl text-3xl font-bold bg-transparent">
              <img className=" rounded-xl w-full h-full max-h-[500px] object-contain" src={pic9} alt="" />
            </SwiperSlide>
            <SwiperSlide className="flex items-center justify-center rounded-2xl text-3xl font-bold bg-transparent">
              <img className=" rounded-xl w-full h-full max-h-[500px] object-contain" src={pic3} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className='px-[100px]'>
          <h3 className='text-3xl my-5'>Movies</h3>
          <Swiper
            slidesPerView={5}
            spaceBetween={30}

            pagination={{
              clickable: true,
            }}
            autoplay={
              {
                delay: 2500,
                disableOnInteraction: false
              }
            }
            modules={[Autoplay, Navigation, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Movie item={pic2}/>
            </SwiperSlide>
            <SwiperSlide>
              <Movie item={pic1} />
            </SwiperSlide>
            <SwiperSlide>
              <Movie  item={pic4}/>
            </SwiperSlide>
            <SwiperSlide>
              <Movie item={pic5} />
            </SwiperSlide>
            <SwiperSlide>
              <Movie item={pic10}/>
            </SwiperSlide>
            <SwiperSlide>
              <Movie item={pic11}/>
            </SwiperSlide>
            <SwiperSlide>
              <Movie item={pic12}/>
            </SwiperSlide>
            <SwiperSlide>
              <Movie item={pic13}/>
            </SwiperSlide>
            <SwiperSlide>
              <Movie item={pic14}/>
            </SwiperSlide>
            <SwiperSlide>
              <Movie item={pic15} />
            </SwiperSlide>
            <SwiperSlide>
              <Movie item={pic16}/>
            </SwiperSlide>
            <SwiperSlide>
              <Movie item={pic17}/>
            </SwiperSlide>
            <SwiperSlide>
              <Movie item={pic18}/>
            </SwiperSlide>

          </Swiper>
        </div>
        <div className='px-[100px] pb-5'>
          <h3 className='text-3xl my-5'>Series</h3>
          <Swiper
            slidesPerView={5}
            spaceBetween={30}

            pagination={{
              clickable: true,
            }}
            autoplay={
              {
                delay: 2500,
                disableOnInteraction: false
              }
            }
            modules={[Autoplay, Navigation, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Movie item={pic19}/>
            </SwiperSlide>
            <SwiperSlide>
              <Movie item={pic20}/>
            </SwiperSlide>
            <SwiperSlide>
              <Movie item={pic21}/>
            </SwiperSlide>
            <SwiperSlide>
              <Movie item={pic22}/>
            </SwiperSlide>
            <SwiperSlide>
              <Movie item={pic23}/>
            </SwiperSlide>
            <SwiperSlide>
              <Movie item={pic24}/>
            </SwiperSlide>
            <SwiperSlide>
              <Movie item={pic25} />
            </SwiperSlide>
            <SwiperSlide>
              <Movie item={pic27} />
            </SwiperSlide>
            <SwiperSlide>
              <Movie item={pic28}/>
            </SwiperSlide>
            <SwiperSlide>
              <Movie item={pic29} />
            </SwiperSlide>
            <SwiperSlide>
              <Movie item={pic30}/>
            </SwiperSlide>
            <SwiperSlide>
              <Movie item={pic31}/>
            </SwiperSlide>

          </Swiper>
        </div>
      </div>


    </>
  )
}

export default Home