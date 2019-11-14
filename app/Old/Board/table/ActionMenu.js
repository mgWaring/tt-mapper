import React, {PureComponent} from 'react';
import { connect } from 'react-redux';

class ActionMenu extends PureComponent{

    render(){
        return(
            <div>
                <button onClick={() => this.props.Attack(this.props.target)}>Attack This</button>
            </div>
        )
    }
}

const dispatch = dispatch => {
    return {
        Attack: (target) => dispatch({type:"ATTACK", target:target})
    }
}

export default connect(null, dispatch)(ActionMenu);