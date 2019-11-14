import React, { Component } from 'react';
import { connect } from 'react-redux';

import {GridCss, Sprite, MiniMenuContainer, ActionMenuContainer} from '../styles.jsx';
import Grid from './Grid';
import ActionMenu from './ActionMenu';
import MiniMenu from './MiniMenu';

import PlayerCharacter from '../Things/Interactable/PlayerCharacter';

class Table extends Component {
  constructor(props){
      super(props);
      this.state = {
          ww : window.innerWidth,
          wh : window.innerHeight,
          centre : {x : 0, y : 0},
          count : {x: 100, y: 50},
      }
  }

  componentDidMount(){
      window.addEventListener("resize", () => this.sychSize());
      window.addEventListener("mousedown", event => this.changeCentre(event));
  }

  sychSize(){
      this.setState({ww : window.innerWidth, wh : window.innerHeight});
  }

  changeCentre(event){
    let newX = this.state.centre.x + (event.pageX - window.innerWidth/2);
    let newY = this.state.centre.y + (event.pageY - window.innerHeight/2);
    this.setState({centre:{x: newX, y:newY}})
  }

  handlePieceClick(target){
    return this.props.HandlePieceClick(target);
  }

  drawSprites(){
    let rendered = [];
    let i = 0;
    for(const enumerable in this.props.sprites){
      if(this.props.sprites.hasOwnProperty(enumerable)){ 
        let sprite = this.props.sprites[enumerable];  
        rendered.push(
        <Sprite key={i} x={sprite.pos.x} y={sprite.pos.y} w={2} h={2}>       
          <PlayerCharacter onClick={() => this.handlePieceClick(sprite)} name={sprite.name}/>
        </Sprite> 
        )
        i++
      }
    }
    return rendered
  }

  render() {
    return (
        <div>
          <GridCss width={(this.state.ww - 200)} height={(this.state.wh - 200)}> 
          {/*the grid*/}            
              <Grid width={this.state.ww} height={this.state.wh} centre={this.state.centre} xcount={this.state.count.x} ycount={this.state.count.y}/> 
          {/*Background Images*/}
          {/*Interactables*/}
            {this.drawSprites()} 
          {/*Menus*/}
            <MiniMenuContainer hidden={this.props.miniMenu.hidden} x={this.props.miniMenu.pos.x} y={this.props.miniMenu.pos.y}>
              <MiniMenu />
            </MiniMenuContainer>
            <ActionMenuContainer hidden={this.props.actiMenu.hidden} x={this.props.actiMenu.pos.x} y={this.props.actiMenu.pos.MiniMenuContainery}>
              <ActionMenu target={this.props.actiMenu.target}/>
            </ ActionMenuContainer>
          </GridCss>
      </div>
    );
  }
} 

const mapStateToProps = state => {
  return {
    miniMenu: state.miniMenu,
    actiMenu: state.actiMenu,
    contextOptions: state.contextOptions,
    sprites: state.activeSprites,
  }
}

const outgoing = dispatch => {
  return {
      HandlePieceClick: (target) => dispatch({type: 'SHOW_MENU', menu: 'actiMenu', pos: target.pos, target: target}),
  }
}

export default connect(mapStateToProps, outgoing)(Table);