import styled from 'styled-components'

import pattern from '../../assets/images/pattern-bg.png'
import arrow from '../../assets/images/icon-arrow.svg'


const Headerstyle = styled.div`
padding: 1rem 0;
	text-align: center;
	background-image: url(${pattern});
	background-position: center;
	background-size: 100% 100%;
	background-repeat: no-repeat;
	position: relative;
  // border: 1px solid red;
` 
const Form = styled.form`
	display: flex;
	width: 40%;
	margin: 1rem auto 3rem auto;
  @media only screen and (max-width: 1000px) {
    width: 50%;
    transition: 0.4s width ease-in-out;
}
  @media only screen and (max-width: 785px) {
    width: 60%;
    transition: 0.4s width ease-in-out;
}
@media only screen and (max-width: 600px) {
    width: 80%;
    transition: 0.4s width ease-in-out;
   
}
@media only screen and (max-width: 500px) {
    width: 90%;
    transition: 0.4s width ease-in-out;
   
}
`
const H1 = styled.h1`
	color: white;
	font-weight: 500;
  font-size: clamp(1.3rem, 2vw, 1.5rem)
`
const H2 = styled.h2`
font-weight: 500;
font-size: clamp(0.7rem, 1.5vw, 0.85rem);
	 margin-bottom: 1rem;
   @media only screen and (max-width: 600px) {
    margin-bottom: 0.7rem;
    font-size: 0.7rem;
   
}
`
const H3 = styled.h3`
	font-weight: 500;
	font-size: clamp(0.9rem, 1.5vw, 1rem);
  @media only screen and (max-width: 600px) {
	font-size: 1.2rem;   
   
}
  `
  
const Button = styled.button`
	border: none;
	color: white;
	background-color: black;
	width: 10%;
	border-top-right-radius: 8px;
	border-bottom-right-radius: 8px;
	background-image: url(${arrow});
	background-repeat: no-repeat;
	background-position: center;
 
`
const LocatioInf = styled.div`

padding: 1rem 0 ;
	position: absolute;
	right: 50%;
	transform: translateX(50%);
	width: 85%;
	z-index: 2;
	/* border: 2px solid black; */
	box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.73);
	-webkit-box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.73);
	-moz-box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.73);
	bottom: -3.5rem;
	display: flex;
  justify-content: space-around;
  align-items: center;
	border-radius: 12px;
	background-color: #fff;
  min-height: 100px;
	
  @media only screen and (max-width: 785px) {
    width: 90%;
    transition: 0.4s width ease-in-out;
}
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    bottom: -16rem;
    padding: 1rem 0  0 0;
   
}


`
const Details = styled.div`
  padding-right: 12px; 
  text-align: center;
  border-right: 1px solid grey;
  @media only screen and (max-width: 600px) {
    border-right: 0;
    margin-bottom: 1.5rem;
   
}
`
const Search = styled.input.attrs(props=>({
  type: 'text',
  placeholder:'search for any ip address or domain'
}))`
width: 90%;
	padding: 15px;
	border-top-left-radius: 8px;
	border-bottom-left-radius: 8px;
	border: none;
	font-size: 1rem;
  &:focus{
    outline: none;
  }
 
`



const Header = () => {
  return (
    <Headerstyle>
    <H1>IP Address Tracker</H1>
    <Form>
     <Search />
    <Button></Button>
    </Form>
    <LocatioInf>
     <Details>
      <H2>IP ADDRESS</H2>
      <H3>192.212.174.101</H3>
      </Details>
     <Details>
      <H2>LOCATION</H2>
      <H3>Brooklyn, NY 10001</H3>
      </Details>
     <Details>
      <H2>TIMEZONE</H2>
      <H3>UTC-05:00</H3>
      </Details>
     <Details style={{borderRight: '0'}}>
      <H2>ISP</H2>
      <H3>SpaceX Starlink</H3>
      </Details>
    </LocatioInf>
    </Headerstyle>
  )
}

export default Header