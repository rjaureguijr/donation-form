import React from 'react';

class DonationGoal extends React.Component {
    render () {
        const goalAmount = 5000;
        let introTextNeeded = <div className="donation-goal-text">${this.props.totalNeeded} still needed to fund this project</div>;
        let introTextMet = <div className="donation-goal-text">${goalAmount} goal was met, ${this.props.totalCollected } was raised!!! Any extra is appreciated!</div>;
        let totalNeeded = `${this.props.totalNeeded}`;
        
        return totalNeeded <= 0 ? introTextMet : introTextNeeded;
    }
}

export default DonationGoal;
