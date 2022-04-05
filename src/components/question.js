import React from 'react';

class Question extends React.Component {
    constructor(props){
        super(props);
        this.question = props.question
    }
    render(){
        return (
            <div>
                {this.question}
            </div>
        )
    }
}
export default Question;