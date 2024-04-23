import { useState } from 'react'

import './App.css'
import violin from "./assets/violin.svg"
import kick from "./assets/kick.svg"
import basketball from "./assets/basketball.svg"
import soccer from "./assets/soccer.svg"
import taekwondo from "./assets/teakwondo.svg"
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import yellow from "./assets/yellow.svg"
import blue from "./assets/blue.svg"
import Navbar from './components/Navbar'
function App() {

  gsap.registerPlugin(useGSAP)

  useGSAP(()=>{
    gsap.to(".soccer",{
      scale:1,
      duration:2,
      opacity:1,
      ease:"sine.inOut"
  
    })
    gsap.to(".basketball",{
      right:0,
      duration:2,
      opacity:1,
      delay:1.8,
      ease:"sine.inOut"
    })
    gsap.to(".taekwondo",{
      left:0,
      duration:2,
      opacity:1,
      delay:1.8,
      ease:"sine.inOut"
    })
    gsap.to(".violin",{
      top:0,
      duration:2,
      opacity:1,
      delay:1.2,
      ease:"sine.inOut"
      })
      gsap.to(".kick",{
        bottom:0,
        duration:2,
        opacity:1,
        delay:1.2,
        ease:"sine.inOut"
      })
      gsap.to(".blob",{
        bottom:"-20%",
        right:0,
        duration:2,
        delay:1.8

      })
      gsap.to(".blue",{
        top:"-5%",
        left:0,
        duration:2,
        delay:1.8
      })
      gsap.from(".nav",{
        top:"-100%",
        duration:3,
      })
  },[])

  return (
    <div className='w-screen min-h-screen  overflow-hidden relative' >
      <Navbar/>
      <img src={blue} alt=""  className='absolute blue top-[-100%] left-[-100%]' />
    <div className='flex overflow-hidden absolute top-[45%] gap-10 left-[2%] h-[16rem]  w-screen md:scale-[0.9]'>
      <img src={taekwondo} alt=""className='taekwondo relative left-[-100%] opacity-0' />
      <img src={violin} alt=""className='violin relative top-[-100%] opacity-0' />
      <img src={soccer} alt="" className='soccer relative  scale-0 opacity-0'/>
      <img src={kick} alt="" className='kick relative bottom-[-100%] opacity-0'/>
      <img src={basketball} alt=""className='basketball relative right-[-100%] opacity-0' />
    </div>
    <img src={yellow} className='absolute blob bottom-[-100%] right-[-100%]' />
    </div>

  )
}

export default App
