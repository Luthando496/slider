import { useState } from 'react'
import './index.css'
import {FaArrowLeft,FaArrowRight} from 'react-icons/fa'
import data from './data'



function App() {
  let total = data.length - 1
  const [num, setNum] = useState(0)
  const [slide, setSlide] = useState(data[num])


  const nextHandler =()=>{
    if(num >= total){
      return;
    }
    setNum((prev) => prev + 1)
    setSlide(data[num])
  }


  const previousHandler=()=>{
    if(num === 0){
      return
    }
    setNum((prev) => prev - 1)
    setSlide(data[num])
  }

  return (
    <section className='w-full bg-orange-400 min-h-screen grid justify-center items-center px-8 md:px-0'>


      <article className="px-10 py-8 rounded-sm bg-white shadow-lg my-14 w-[470px]">
      <div className="img md:w-full overflow-hidden h-[250px] flex justify-center items-center rounded-full">
        <img src={slide.image} alt="image" className="w-full h-full hover:scale-150 duration-700 rounded-full object-cover" />
      </div>
      <div className="w-full px-4">
      <h2 className="text-2xl font-semibold text-black/80 text-center capitalize my-6">{slide.name}</h2>
      <p className="text-base font-semibold text-sky-500 text-center uppercase my-3">{slide.job}</p>


      <p className="text-center font-normal text-gray-600">{slide.text}</p>

      <div className="flex justify-center items-center">
        <div className="flex gap-10 items-center">
            <FaArrowLeft  onClick={previousHandler} className='text-2xl text-pink-400'  />
            <FaArrowRight onClick={nextHandler} className='text-2xl text-pink-400 my-6' />
        </div>
      </div>
      </div>

      </article>
      
    </section>
  )
}

export default App
