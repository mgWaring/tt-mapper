import styled from 'styled-components'

const primary = '#1c1c1c';
const secondary = '#c3c3c3';
const text = '#f4f4f4';
const border = '#212121';
const highlight = '#e7ebda';

//page

//menu
export const Menu = styled.div`
background-color: ${primary};
width:100%;
height:55px;
display: flex;
flex-direction: row;
justify-content: space-around;
color: ${text};
-webkit-box-shadow: 0 2px 3px 4px #ccc;  /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
-moz-box-shadow:    0 2px 3px 4px #ccc;  /* Firefox 3.5 - 3.6 */
box-shadow:         0 2px 3px 4px #ccc;  /* Opera 10.5, IE 9, Firefox 4+, Chrome 6+, iOS 5 */

`

//navItem
export const NavItem = styled.nav`
box-sizing:border-box;
text-align: center;
padding: 10px 20px;
flex-grow: 1;
font-weight:bold;
width:33%;

a {
    color: inherit;
    font-style: inherit;
}

&:hover {
    box-shadow: inset 0 0 10px ${text};
}
`

//submenu
export const SubMenu = styled.div`
margin-top:10px;
border: 1px solid ${border};
border-radius: 3px;
overflow:hidden;
`

//subMenuItem
export const SubMenuItem = styled.div.attrs({ itemIndex: 0 })`
background: ${secondary};
font-size: 1em;
text-align:left;
padding:5px;

&:hover {
    color:${highlight};
}
`
//tilePage
export const TilePage = styled.div`
padding:10px;
text-align:left;
h2{
    clear:both;
    text-align: center;
    margin: 10px;
}
`

//tile
export const Tile = styled.div`
box-sizing: border-box;
float:left;
background: ${primary};
color: ${text};
box-sizing:border-box;
width:${props => 100 / props.perRow}%;
height:${props => 100 / props.perRow}%;
border: 10px solid transparent;
border-radius: 3px;
padding: 5px;
box-shadow: 4px 4px 6px 8px #ccc;
a {
    color:inherit
    font-style:inherit
}

&:hover {
    color: ${highlight};
    border-color:${highlight};
}
`

//splashImage
export const SplashImage = styled.div`
background-image: ${props => props.image ? `url(${props.image})` : 'linear-gradient(red, yellow, blue)'};
background-position: center;
background-repeat: no-repeat;
background-size: cover;
overflow:hidden;
width:100%;
height:auto;
max-width:${props => props.maxWidth}; 
`

//infoBlock


//playPage
export const PlayPage = styled.div`
padding:0;
height:calc(100vh - 55px);
h1{
    box-sizing: border-box;
    background: ${text};
    height: 80px;
    padding: 0 15px;
    width: fit-content;
    margin: auto;
    border: 4px solid ${primary};
    border-radius: 10px;
}
overflow:hidden;
`

//lhImage
export const LHImage = styled.div`
position:fixed;
z-index: -1;
left:0;
top:0;
height:100vh;
width:30%;
background-color: ${primary};
background-image: ${
    props => props.image ?
        `url(${props.image})` :
        `radial-gradient(white, rgba(255,255,255,.2) 2px, transparent 40px),
     radial-gradient(white, rgba(255,255,255,.15) 1px, transparent 30px),
     radial-gradient(white, rgba(255,255,255,.1) 2px, transparent 40px),
     radial-gradient(rgba(255,255,255,.4), rgba(255,255,255,.1) 2px, transparent 30px);
     background-size: 550px 550px, 350px 350px, 250px 250px, 150px 150px;
     background-position: 0 0, 40px 60px, 130px 270px, 70px 100px`};
background-position: center;
background-repeat: no-repeat;
background-size: cover;
`

//rhImage
export const RHImage = styled.div`
position:fixed;
z-index: -1;
right:0;
top:0;
height:100vh;
width:30%;
background-color: ${primary};
background-image: ${
    props => props.image ?
        `url(${props.image})` :
        `radial-gradient(white, rgba(255,255,255,.2) 2px, transparent 40px),
     radial-gradient(white, rgba(255,255,255,.15) 1px, transparent 30px),
     radial-gradient(white, rgba(255,255,255,.1) 2px, transparent 40px),
     radial-gradient(rgba(255,255,255,.4), rgba(255,255,255,.1) 2px, transparent 30px);
     background-size: 550px 550px, 350px 350px, 250px 250px, 150px 150px;
     background-position: 0 0, 40px 60px, 130px 270px, 70px 100px`};
background-position: center;
background-repeat: no-repeat;
background-size: cover;
`

//body
export const PageBody = styled.div`
box-sizing: border-box;
width:40%;
height:calc(100vh - 135px);
border:4px solid ${primary};
background-color: ${text};
z-index:10000;
margin: 0 30%;
padding: 10px;
overflow-y:scroll;
p {
    color: ${primary};
    text-align:left;
    font-size: 1em;
}
::-webkit-scrollbar{
    width: 0px;
}
::-webkit scrollbar-track{
    width: 0px;
}
::-webkit-scrollbar-thumb {
    width: -10px;
    height: 55px;
    border: 1px solid orange;
    color: purple;
    background-color:light-purple;
}
`
//choices

//choice

//title

//PagesMap
export const PagesMap = styled.div`
padding:15px;
height:calc(100vh - 85px);
overflow:scroll;
`

//PagesMapElement
export const PagesMapElement = styled.div`
position: absolute;
top: ${props => (props.y * 115) + 70}px;
left: ${props => (props.x * 115) + 15}px;
width:100px;
height:100px;
border: solid 1px ${primary};
color: ${primary};
font-size: 0.8em;
`

//ElementJoiner
export const ElementJoiner = styled.div`
 
`