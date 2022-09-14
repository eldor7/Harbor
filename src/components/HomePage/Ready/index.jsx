import React from 'react'
import { Antonea, Apple, Border, Downcon, Ioc, Maincon, Paragrif, Readycon, Star } from './style'
import star from '../../../assets/img/star.png'
import apple from '../../../assets/img/applee.png'











const Ready = () => {
  return (
    <Maincon>
        <Readycon>
            <h1>We're ready, are you?</h1>
            <p>Here's what people are saying about harbor.</p>
        </Readycon>
        <Downcon>
            <Antonea>
                <p>It's beautiful, easy to use, and is <br />
                   genuinely growing my confidence <br />
                   for crisis preparation.</p>
                <Star src={star}/>
                <Ioc>
                    <Apple src={apple}/>
                    <Paragrif>
                    <h1>Antonea</h1>
                    <h5>iOS Beta Tester</h5>
                    </Paragrif>
                </Ioc>   
            </Antonea>
            <Antonea>
                <p>This app is something I’ve been <br />
                   hoping for for a while now. So <br />
                    I’m excited to be beta testing it.</p>
                <Star src={star}/>
                <Ioc>
                    <Apple src={apple}/>
                    <Paragrif>
                    <h1>Kathryn</h1>
                    <h5>iOS Beta Tester</h5>
                    </Paragrif>
                </Ioc>   
            </Antonea>
            <Antonea>
                <p>It’s a great app and I can’t wait to <br />
                   use it more and see what all <br />
                   content you add.</p>
                <Star src={star}/>
                <Ioc>
                    <Apple src={apple}/>
                    <Paragrif>
                    <h1>Gabriel</h1>
                    <h5>iOS Beta Tester</h5>
                    </Paragrif>
                </Ioc>   
            </Antonea>
        </Downcon>
        <Border/>
    </Maincon>
  )
}

export default Ready