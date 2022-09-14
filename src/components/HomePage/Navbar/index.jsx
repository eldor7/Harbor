import React from 'react'
import { Apple, Border, Btn, Button, Container, Homepage, Logo, Menu, Para, Tel } from './style'
import logo from '../../../assets/img/logo.png'
import apple from '../../../assets/img/apple.png'
import button from '../../../assets/img/play.png'
import tel from '../../../assets/img/tel.png'



const Nav = () => {
  return (
    <Container>
      <Menu>
        <Logo src={logo}/>
        <Para>
          <p>Home</p>
          <p>About</p>
          <p>Know Your Risks</p>
          <p>For Work</p>
          <p>Journal</p>
          <p>Shop</p>
        </Para>
      </Menu>
      <Homepage>
        <h1>Reimagining readiness for <br />
           life's uncertain moments.</h1>
           <p>The app that makes disaster preparedness easy and accessible. <br />
               Because sometimes tomorrow doesn't look like today.</p>
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
        <Tel src={tel}/>
        <Border/>
      </Homepage>
    </Container>
  )
}

export default Nav