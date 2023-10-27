import React from 'react'
import'./sideNav.css'
/** le composant qui permet d'afficher les différentes icons dans sidenavbar */
function Activity({image}) {
  return (
    <div className='sideNave-activity'>
     <img src= {image} alt='activité' className='icon-sideNave'/>
    </div>
  )
}

export default Activity
