import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { REACT_APP_API_BASE } from '../../config';

class HomePage extends Component {
  // state here stores the user name
  constructor(props) {
    super(props);
    this.state = {
      person: '',
    };
  }
    // this handles the form submit then does a post fetch call that adds the user name to the tail of the queue. 
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

    fetch(`${REACT_APP_API_BASE}/people/`, requestOptions)
      .then((result) => {
          // this is a callback function that sets state in the parent component then allows me to pass the name value as a prop.
          this.props.setPerson(this.state.person)
          // here I use history to push the state and move the user to the queued page. I used this in my past capstone so I wanted to try it again. 
            this.props.history.push({
            pathname: '/queued',
            state: {name: this.state.name}
          })})
      .catch((error) => console.log('error', error));
  };
  // this is the on change function that updates state based on the form values. 
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
              <label htmlFor='person'>Name </label>
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