import styled from "styled-components";

export const Container = styled.div`
background-color: #fff;
`

export const Menu = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-top: 35px;
`

export const Logo = styled.img`
margin-left: 120px;
`

export const Para = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-right: 130px;
p{
    margin-left: 65px;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
    color: #65727B;
    cursor: pointer;
}
p:hover{
    font-style: normal;
    background-color: #65727B;
    color: #000;
    border-radius: 10px;
    text-align: center;
}

`


export const Homepage = styled.div`
text-align: center;
padding-top: 160px;
h1{
    font-family: 'DM Serif Display';
    font-style: normal;
    font-weight: 450;
    font-size: 58px;
    line-height: 56px;
    color: #28514F;
}
p{
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 21px;
    line-height: 32px;
    color: #65727B;

}
h5{
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    color: #65727B;
    margin-left: 200px;
    margin-top: -5px;

}
`

export const Btn = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-top: 50px;

.btn{
    width: 156px;
    margin-left: 20px;
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

export const Tel = styled.img`
margin-top: 100px;
margin-right: 55px;
`

export const Border = styled.div`
width: 157px;
height: 3px;
background-color: #000;
border-radius: 40px;
margin-top: 105px;
margin-left: 680px;
border: none;
`
