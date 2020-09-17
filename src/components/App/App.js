import React from 'react';
import './App.css';
import DonationGoal from '../DonationGoal/DonationGoal';
import ProgressBar from '../ProgressBar/ProgressBar';
import BodyContent from '../BodyContent/BodyContent';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amountVal: '',
      totalCollected: 0,
      totalNeeded: 5000,
      donorsTotal: 0,
      submitted: false,
      donationProgress: 0,
      underMin: true
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkForm = this.checkForm.bind(this);
    this.handleAmountChange = this.handleAmountChange.bind(this);
  }

  handleAmountChange (event) {
    this.setState({
      amountVal: event.target.value
    });
  }
  
  checkForm () {
    if (this.state.amountVal >= 5) {
      this.setState({
        amountVal: this.state.amountVal,
        underMin: false
      });
      this.updateProgress();
    } else {
      this.setState({underMin: true});
    }
  }
  updateProgress () {
    this.setState((state) => {
      return {
        donationProgress: ((5000 - parseInt(state.totalNeeded))  / 5000) * 100
      };
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    if(this.state.amountVal >= 5) {
      this.setState( {
        submitted: true
      },  function() {
        this.setState({
          totalNeeded: this.state.totalNeeded - this.state.amountVal,
          totalCollected: parseInt(this.state.totalCollected) + parseInt(this.state.amountVal),
          donorsTotal: this.state.donorsTotal + 1,
          amountVal: ''
        });
      } );
    }
  }

  render () {
    return (
      <div className="App">
        <DonationGoal totalNeeded={this.state.totalNeeded} totalCollected={this.state.totalCollected} />
        <ProgressBar progressNew={this.state.totalCollected} />
        <div className="container">
          <BodyContent donorsTotal={this.state.donorsTotal} underMin={this.state.underMin} />
          <form onSubmit={this.handleSubmit}>
            <div className="form-section">
              <div className="currency-placeholder">
                <input type="number" pattern="\d*"
                  placeholder="25" min="5" 
                  onChange={this.handleAmountChange} 
                  value={this.state.amountVal}
                  name="donation-input"
                  id="donation-input"
                  required
                />
              </div>
              <button className="btn" type="submit" onClick={this.checkForm}>Give Now</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
