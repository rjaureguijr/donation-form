import React from 'react';
import './BodyContent.css';

class BodyContent extends React.Component {
    render () {
      return (
        <>
            <h1>Only four days left to fund this project</h1>
            <p className="intro-text">
                Join the <span>{this.props.donorsTotal}</span> other donors who have already supported the project.
            </p>
            <p className="feedback-text">
            {this.props.underMin === false ? 
                <span className="success">Thank you for your donation!</span> : 
                <span className="error">Amount must be over $4</span>}
            </p>
        </>
      )
    }
}

export default BodyContent;
