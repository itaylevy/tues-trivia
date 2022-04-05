import React from 'react';

class Score extends React.Component {
    constructor(props){
        super(props);
        this.points = props.points;
    }
    render(){
        return (
            <div>
                {this.points}
            </div>
        )
    }
}
export default Score;