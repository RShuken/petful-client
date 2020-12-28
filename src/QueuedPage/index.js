import React, { Component } from 'react';

class QueuedPage extends Component {


  render() {
    return (
      <div>
        <h2>
          Hey, {this.props.userName}! Your name has been added to the adoption
          list.
        </h2>
        <p>
          Your name has been added to the end of of the wait queue. Once your
          name is first in line, you will be able to pick your new pet.
        </p>
        <p>
          Please press the 'Start simulate button on the right'. Every 5 seconds
          a new pet will be adopted and you will move up in the queue.
        </p>
      </div>
    );
  }
}

export default QueuedPage;
