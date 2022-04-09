import React from 'react';

class Player extends React.Component{
    render(){
        return (
            <div>
                {this.props.name}
            </div>
        )
    }
}

export default Player;