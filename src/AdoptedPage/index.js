import React, { Component } from 'react';

class AdoptedPage extends Component {
  // this function allows me to redirect the user back to the home page
  handleHomeClick() {
      return window.location.href = '/';
  }
  // this is the adoption success page. I should have conditionally rendered this as part of the adoption page. 
  render() {
    return (
      <div className='adopted'>
        <h2> SUCCESS! You have adopted a new best friend!</h2>
        <button onClick={this.handleHomeClick}>
          Back to Home
        </button>
      </div>
    );
  }
}

export default AdoptedPage;
