import React from 'react'
import { Border, Harbor, Maincon, Next } from './style'
import next from '../../../assets/img/next.png'

const Foter = () => {
  return (
    <Maincon>
        <Harbor>
            <h1>Join harbor high fives</h1>
            <p>Up high. Down low. Tips on how to find your way through any disaster <br />
               in the best way possible: together. And be the first in line for Android.</p>
               <input type="text" placeholder='Email address' className='input' />
               <button className='submit'>
                 Sign Up 
                 <Next src={next}/>
               </button>
               <h6>Our commitment to protecting your <span>Data Privacy</span></h6>
        </Harbor>
        <Border/>
    </Maincon>
  )
}

export default Foter