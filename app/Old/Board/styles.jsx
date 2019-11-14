import styled from 'styled-components';

export const GridCss = styled.div`
position:relative;
width : ${ (props) => props.width}px;
height : ${ (props) => props.height}px;
margin:auto;
background : green;
border : 5px solid gray;
overflow:scroll;
`;

export const Tile = styled.div`
position:absolute;
width : ${ (props) => props.w}px;
height : ${ (props) => props.h}px;
box-sizing:border-box;
border: 1px solid pink;
`;

export const RowCss = styled.div`
clear:both;
overflow:scroll;
`;

export const Sprite = styled.div`
position:absolute;
left: ${props => props.x}px;
top: ${props => props.y}px;
width: ${props => props.w * 25}px; 
height: ${props => props.h * 25}px; 
`;

export const MiniMenuContainer = styled.div`
display:${(props) => props.hidden ? 'none' : 'inline-box'};
position:absolute;
left: ${(props) => props.x}px;
top: ${(props) => props.y}px; 
width: 100px;
height: 100px;
border: 1px solid black;
background: white;
z-index:10;
`;

export const ActionMenuContainer = styled.div`
display:${(props) => props.hidden ? 'none' : 'inline-box'};
position:absolute;
left: ${(props) => props.x}px;
top: ${(props) => props.y}px; 
width: 100px;
height: 100px;
border: 1px solid white;
background: black;
z-index:10;
`;