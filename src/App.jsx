import { useState } from 'react'
import Generator from './components/Generator'
import Workout from './components/Workout'
import Hero from './components/Hero'

function App() {

  return (
    <main className='min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white text-sm sm:text-base'>
    <Hero/>
      <Generator/>
      <Workout/>
    </main>
  )
}

export default App
