import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: '',
    };
  }
    
  handleSubmit = (e) => {
      e.preventDefault();
      
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    var raw = JSON.stringify({ person: this.state.person });

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    };

    fetch('http://localhost:8000/people/', requestOptions)
        .then((result) => {
            this.props.setPerson(this.state.person)
            this.props.history.push({
            pathname: '/queued',
            state: {name: this.state.name}
          })})
      .catch((error) => console.log('error', error));
  };

  handleName = (e) => {
    this.setState({
      person: e.target.value,
    });
  };

  render() {
    const { person } = this.state;
    return (
      <div className='home-container'>
        <div className='home-form'>
          <h2>
            Adopt a new best friend!
          </h2>
          <p>
            Add your name to the adoption list to bring home your new best friend.
          </p>

          <form onSubmit={this.handleSubmit}>
            <div className='form-control'>
              <label htmlFor='name'>Name </label>
              <input
                required
                type='text'
                id='person'
                value={person}
                onChange={this.handleName}
                placeholder='Your Name'
              />
            </div>
            <div className='HomeSubmitButton'>
              <button type='submit' className='submitBtn'>
                Submit
              </button>
            </div>
                </form>
        </div>
      </div>
    );
  }
}

export default withRouter(HomePage);