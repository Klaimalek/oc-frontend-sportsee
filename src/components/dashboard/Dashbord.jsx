import React from 'react'
import Banner from '../banner/Banner'
import DailyActivity from '../graphe/dalyActivity/DailyActivity'

function Dashbord() {
  return (
    <div className='dashbord'>
   <Banner/>  
    <DailyActivity/>
    </div>
  )
}

export default Dashbord