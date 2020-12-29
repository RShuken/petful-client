import React, { Component } from 'react';

class QueuedPage extends Component {

  // this is the queued page that a user waits on. I could have make this conditionally render from the home page, and I should try to refactor this in the future, as less components is cleaner code. 
  render() {
    return (
      <div className='queued'>
        <h2>
          Hey, {this.props.userName}! Your name has been added to the adoption
          list.
        </h2>
        <p>
          Your name has been added to the end of of the wait queue. Once your
          name is first in line, you will be able to pick your new pet.
        </p>
        <p>
          Please press the 'Start simulate button' above in the waiting list. Every 5 seconds
          a new pet will be adopted and you will move up in the queue.
        </p>
      </div>
    );
  }
}

export default QueuedPage;
