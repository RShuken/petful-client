import React, { Component } from 'react';

class AdoptedPage extends Component {
  
  handleHomeClick() {
      return window.location.href = '/';
  }
  
  render() {
    return (
      <div>
        <h2> SUCCESS! You have adopted a new best friend!</h2>
        <button onClick={this.handleHomeClick}>
          Back to Home
        </button>
      </div>
    );
  }
}

export default AdoptedPage;
