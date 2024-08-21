import React, {useState} from 'react'
import SectionWrapper from './SectionWrapper'
import { WORKOUTS } from '../utils/excercises'

function Header(props) {
  const { index, title, description } = props
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex justify-center items-center gap-2'>

        <p className='text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400'>{index}</p>
        <h4 className='text-xl sm:text-2xl md:text-3xl'>{title}</h4>

      </div>
      <p className='text-sm sm:text-base mx-auto'>{description}</p>
    </div>
  )
}

export default function Generator() {

  const [showModal, setShowModal] = useState(false)
  const [poison, setPoison] = useState('individual')
  const [muscles, setMuscles] = useState([])
  const [goals, setGoals] = useState('strength_power')

  //let showModal = false
  
  function toggleModal() {
    setShowModal(!showModal)
  }

  return (
    <SectionWrapper header={'Generate Your Workout'} title={['It\'s', 'Huge', ' o\'Clock']}>
      <Header index={'01'} title={'Pick your poison'} description={'Select the workout you wish to endure.'} />

      <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>

        {Object.keys(WORKOUTS).map((type, typeIndex) => {
          {/*mapping out WORKOUTS from utils to create buttons*/ }
          return (

            <button className='bg-slate-950 border border-blue-400 py-3 rounded-lg duration-200 hover:border-blue-600' key={typeIndex}>

              <p className='capitalize'>{type.replaceAll('_', ' ')}</p>      {/* replaceAll is javascript fucntion to replace underscores with space*/}

            </button>
          )
        })}
      </div>



      <Header index={'02'} title={'Lock on targets'} description={'Select the muscles judged for annihilation.'} />

      <div className='flex flex-col bg-slate-950 border border-solid border-blue-400 rounded-lg'>
        <button onClick={toggleModal} className='relative p-3 flex items-center justify-center'>
          <p>Select muscle groups</p>
          <i className="fa-solid fa-caret-down absolute right-3 top-1/2 -translate-y-1/2"></i>
        </button>
        {showModal && (
          <div>Modal</div>
        )}
      </div>


      <Header index={'01'} title={'Pick your poison'} description={'Select the workout you wish to endure.'} />

      <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>

        {Object.keys(SCHEMES).map((type, typeIndex) => {
          {/*mapping out WORKOUTS from utils to create buttons*/ }
          return (

            <button className='bg-slate-950 border border-blue-400 py-3 rounded-lg duration-200 hover:border-blue-600' key={typeIndex}>

              <p className='capitalize'>{type.replaceAll('_', ' ')}</p>      {/* replaceAll is javascript fucntion to replace underscores with space*/}

            </button>
          )
        })}
      </div>

    </SectionWrapper>
  )
}
