import HomeContent from '@/components/HomeContent'
import React from 'react'
import About from './about/page'
import Donuts from './donuts/page'
import Contact from './contact/page'
export default function Home (){
return(
  <div>
     <HomeContent />
     <About />
     <Donuts />
     <Contact />
  </div>
)
}