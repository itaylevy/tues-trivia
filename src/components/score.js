import React from 'react';

class Score extends React.Component {
    render(){
        return (
            <div>
                {this.props.points}
            </div>
        )
    }
}
export default Score;