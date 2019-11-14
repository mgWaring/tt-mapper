import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Tile } from '../styles.jsx';

class Grid extends Component {

    generateSomeRows(x, y) {
        let tiles = [];
        for (let k = 0; k < x; k++) {
            for (let i = 0; i < y; i++) {
                const xval = k * 25;
                const yval = i * 25;
                tiles.push(<Tile
                    id={`${k}-${i}`}
                    key={`${k}-${i}`}
                    h={25} w={25}
                    x={xval} y={yval}
                    style={{ left: xval, top: yval }}
                    onClick={() => this.props.GridCLick(xval,yval)} />)
            }
        }
        return tiles;

    }    

    render() {
        return (
            <div>                
                {this.generateSomeRows(this.props.xcount, this.props.ycount)}
            </div>
        )
    }
}

const mapDispToProps = dispatch => {
    return {
        GridCLick: (x,y) => dispatch({type: 'SHOW_MENU', menu: 'miniMenu', pos: {x:x,y:y} }),
    }
}

const mapStateToProps = state => {
    return {
        xcount : state.grid.x,
        ycount : state.grid.y
    }
}

export default connect(mapStateToProps,  mapDispToProps )(Grid);