import React from 'react'
import { Apple, Bgimg, Btn, Button, Likeimg, Main, Missioncon, Stepcon, Stepleft, Stepright } from './style'
import bgimg from '../../../assets/img/bgimg.png'
import likeimg from '../../../assets/img/like.png'
import apple from '../../../assets/img/apple.png'
import button from '../../../assets/img/play.png'





const Mission = () => {
  return (
    <Main>
      <Missioncon>
        <Likeimg src={likeimg}/>
        <h1>Our mission is to <br />
            encourage readiness for all</h1>
        <p>It's our dream that one day, everyday readiness will be quite ordinary <br />
          - like brushing your teeth.</p>
        <p>A little bit of effort with a big payoff.</p>
        <button>Learn more about us</button>
        <Bgimg src={bgimg}/>
      </Missioncon>
      <Stepcon>
        <Stepleft>
           <h1>Stay one step <br />
               ahead with harbor</h1>
          <Btn>
               <button className='btn'>
                <Apple src={apple}/>
                  App Store
                </button>
                <button className='bt'>
                <Button src={button}/>
                 Play Store
                </button>
        </Btn>  
        <h5>Join the Waitlist</h5>
        </Stepleft>
        <Stepright>

        </Stepright>
      </Stepcon>
    </Main>
  )
}

export default Mission