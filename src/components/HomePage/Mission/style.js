import styled from "styled-components";
import bagimg from '../../../assets/img/phone.png'


export const Main = styled.div`
`


export const Missioncon = styled.div`
text-align: center;
margin-top: 200px;
background: #28514F;
color: #fff;
h1{
    padding-top: 164px;
    font-family: 'DM Serif Display';
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    line-height: 56px;
    text-align: center;
}
p{
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 21px;
    line-height: 32px;
}
button{
    background: #FFFFFF;
    border-radius: 50px;
    width: 204px;
    height: 55px;
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    text-align: center;
    color: #28514F;
    border: none;
    margin-top: 62px;
    cursor: pointer;

}
`


export const Likeimg = styled.img`
margin-top: -100px;
`


export const Text = styled.div`
`

export const Bgimg = styled.img`
width: 100%;
`


export const Stepcon = styled.div`
display: flex;
justify-content: space-between;
background: #F8E6BE;
margin-left: 250px;
margin-right: 250px;
margin-top: 50px;
height: 348px;


`
export const Stepleft = styled.div`
display: grid;
flex: 1;
padding-left: 90px;
padding-top: 108px;
h1{
    font-family: 'DM Serif Display';
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 47px;
    color: #333333;
}
h5{
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 20px;
    color: #65727B;
    margin-left: 200px;
    margin-top: -5px;

}
`

export const Stepright = styled.div`
flex: 1;
background-image: url(${bagimg});
padding-right: 30px;
background-size: cover;

`

export const Btn = styled.div`
display: flex;

.btn{
    width: 156px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background: #28514F;
    border-radius: 50px; 
    height: 56px;
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    color: #FFFFFF;
    border: none;
    cursor: pointer;
}
.bt{
    background: #AEB4B6;
    width: 156px;
    margin-left: 20px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 50px; 
    height: 56px;
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    color: #FFFFFF;
    border: none;
    cursor: pointer;

}

`
export const Button = styled.img`
`

export const Apple = styled.img`
`
