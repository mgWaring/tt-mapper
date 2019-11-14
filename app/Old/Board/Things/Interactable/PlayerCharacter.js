import React, {Component} from 'react';

class PlayerCharacter extends Component {
    render(){
        console.log('Rendering piece', this.props)
        return(
            <div onClick={this.props.onClick}>
                <img src="http://www.placehold.it/50x50.png" alt="icon for player" />
            </div>
        )
    }
}

export default PlayerCharacter;
