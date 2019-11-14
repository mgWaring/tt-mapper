import React, {PureComponent} from 'react';
import {connect} from 'react-redux';


class MiniMenu extends PureComponent{
    constructor(props){
        super(props);
        window.addEventListener("keydown", event =>  props.HandleKeypress(event));
    }

    render(){
        return(
            <div>
                <button onClick={() => this.props.Move(this.props.source)}>Move here</button>
                <button>Attack This</button>
                <button>Use Item</button>
                <button>Use Spell</button>
            </div>
        )
    }
}

const mapDispToProps = dispatch => {
    return {
        HandleKeypress: (event) => dispatch({type: 'KEYPRESS',key:event.key }),
        Move: (source, target) => dispatch({type: 'MOVE', source:source, target:target}),
    }
};

const mapStateToProps = state => {
    return {
        ownedElements : state.user.active,
    }
}

export default connect(mapStateToProps,  mapDispToProps )(MiniMenu);