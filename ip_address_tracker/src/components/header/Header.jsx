import styled from 'styled-components'
import './header.css'
import pattern from '../../assets/images/pattern-bg.png'
import arrow from '../../assets/images/icon-arrow.svg'


const Headerstyle = styled.div`
padding: 2.5rem 1rem;
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
	margin: 2rem auto 4rem auto;
`
const H1 = styled.h1`
	color: white;
	font-weight: 500;
`
const H2 = styled.h2`
font-weight: 700;
	font-size: 0.85rem;
	margin-bottom: 0.7rem;
`
const H3 = styled.h3`
	font-weight: 500;
	font-size: 1.4rem;
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
padding: 1.5rem;
	position: absolute;
	right: 50%;
	transform: translateX(50%);
	width: 80%;
	z-index: 2;
	/* border: 2px solid black; */
	box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.73);
	-webkit-box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.73);
	-moz-box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.73);
	bottom: -5rem;
	display: flex;
	border-radius: 10px;
	background-color: #fff;
	text-align: left;
`
const Details = styled.div`
padding-left: 25px;
	width: 25%;
`



const Header = () => {
  return (
    <Headerstyle>
    <H1>IP Address Tracker</H1>
    <Form>
     <input type="text" placeholder='search for any ip address or domain'/>
    <Button></Button>
    </Form>
    <LocatioInf>
     <Details>
      <H2>IP ADDRESS</H2>
      <H3>192.212.174.101</H3>
      </Details>
     <Details style={{borderLeft: '1px solid grey'}}>
      <H2>LOCATION</H2>
      <H3>Brooklyn, NY <br /> 10001</H3>
      </Details>
     <Details>
      <H2>TIMEZONE</H2>
      <H3>UTC-05:00</H3>
      </Details>
     <Details style={{borderLeft: '1px solid grey'}}>
      <H2>ISP</H2>
      <H3>SpaceX <br /> Starlink</H3>
      </Details>

    </LocatioInf>
    </Headerstyle>
  )
}

export default Header