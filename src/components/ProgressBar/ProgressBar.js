import React from 'react';
import './ProgressBar.css';

class ProgressBar extends React.Component {
    render () {
      let progressNew = parseInt(`${this.props.progressNew / 5000 * 100}`);

      return (
        <div className="progress-bar-container">
          <div className="tooltip-point" style={{left: `${progressNew < 100 ? progressNew + .15 : 90}%`}}></div>
          <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"
          style={{width: `${progressNew < 100 ? (progressNew + .5) : 100}%`}}></div>
        </div>
      );
    }
}

export default ProgressBar;
