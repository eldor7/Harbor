import React from 'react'
import { Border, Box, Createcon, Createimg, Downcon, File, Getcon, Getimg, Icon, Import, Importimg, Knowcon, Knowimg, Maincon, Paragrif, Stric, Upcon } from './style'
import createimg from '../../../assets/img/create.png'
import icon from '../../../assets/img/icon.png'
import box from '../../../assets/img/box.png'
import importimg from '../../../assets/img/import.png'
import knowimg from '../../../assets/img/know.png'
import stric from '../../../assets/img/stric.png'
import getimg from '../../../assets/img/get.png'
import file from '../../../assets/img/file.png'











const Planed = () => {
  return (

    <Maincon>
        <Paragrif>
            <h1>The right plan for when <br />
               things don't go as planned</h1>
               <p>Not prepared? You're not alone. Emergency planning is <br />
                  overwhelming. We work with experts to make the hard parts easy, so <br />
                  you can have confidence when it matters most.</p>
        </Paragrif>
        <Upcon>
            <Createcon>
                <Createimg src={createimg}/>
                <Icon src={icon}/>
                <h2>Create your family's <br />
                 emergency plan</h2>
                 <p>Our app is tailored to you, your family and your <br />
                    little dog, too. We tell you what you need to stay <br />
                    safe from hurricanes to wildfires and everything <br />
                    in between.</p>
            </Createcon>
            <Import>
                <Box src={box}/>
                <h2>Access and share <br />
                   important <br />
                   information, even <br />
                   offline</h2>
                   <p>View critical information, family plans, and <br />
                       documents at the push of a button, both  <br />
                      online and offline - no worries if cell towers <br />
                       go out.</p>
                <Importimg src={importimg}/>
            </Import>
        </Upcon>
        <Downcon>
            <Knowcon>
                <Knowimg src={knowimg}/>
                <Stric src={stric}/>
                <h2>Know exactly what <br />
                   to do when an <br />
                   emergency strikes</h2>
                <p>When disasters happen, harbor automatically <br />
                   activates your readiness plan and sends you <br />
                   personalized, on-demand info when it matters <br />
                   the most.</p>
            </Knowcon>
            <Getcon>
                <File src={file}/>
                <h2>Get peace-of-mind <br />
                    with automatic risk <br />
                     assessments</h2>
                <p>We use data from NOAA, FEMA, and USGS to <br />
                   pinpoint what your household is at risk for. <br />
                   No more guessing.</p>
                <Getimg src={getimg}/>
            </Getcon>
        </Downcon>
        <Border/>
    </Maincon>
  )
}

export default Planed