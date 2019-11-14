import React, { Component } from 'react';
import {Tile, RowCss} from '../styles.jsx';

class Row extends Component{
    componentWillMount()
    {
    }

    generateSomeSquares(x){
        let rows = [];
        for (let k = 0; k < x; k++){
            rows.push(<Tile key={k}/>);
        }
        return rows;    
    }

    render(){
        return (
            <div>
                <RowCss>
                {this.generateSomeSquares(this.props.number) }
                </RowCss>
            </div>
        )
    }
}

export default Row;