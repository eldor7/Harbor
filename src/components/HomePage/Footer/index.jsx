import React from 'react'
import { Center, Container, Down, Footercon, Instaimg, Leftcon, Logo, Meta, Right, Twinimg, Upcon } from './style'
import logo from '../../../assets/img/logo.png'
import instaimg from '../../../assets/img/inst.png'
import meta from '../../../assets/img/meta.png'
import twinimg from '../../../assets/img/twin.png'



const Footer = () => {
  return (
    <Container>
        <Footercon>
            <Leftcon>
                <Logo src={logo}/>
                <p>© 2020 harbor. All rights reserved</p>
                <Upcon>
                    <p>Privacy</p>
                    <p>Terms</p>
                    <p>FAQ</p>
                </Upcon>
                <Down>
                   <p>Journal</p>
                    <p>Contact</p>
                    <p>Shop</p>
                </Down>
            </Leftcon>
            <Center>
                <h3>Home</h3>
                <h3>About</h3>
                <h3>Risks</h3>
            </Center>
            <Right>
                <Twinimg src={twinimg}/>
                <Instaimg src={instaimg}/>
                <Meta src={meta}/>
            </Right>
        </Footercon>
    </Container>
  )
}

export default Footer