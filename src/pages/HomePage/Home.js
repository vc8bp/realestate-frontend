import React from 'react'
import Hero from '../../components/Hero'
import NavBar from '../../components/NavBar'
import Properties from '../../components/Properties'
import TopProperties from '../../components/topProeperties/TopProperties'

function Home() {
  return (
    <>
    <NavBar/>
    <Hero/>
    <Properties limit={5} />
    <TopProperties/>
   
    </>
  )
}

export default Home