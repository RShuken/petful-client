import React, { Component } from 'react';
import names from '../store';
import { REACT_APP_API_BASE } from '../config'

class PeopleList extends Component {
   // this constructor stores the queue waiting list and is passed a prop that is the users name. 
    constructor(props) {
        super(props);
        this.state = { peopleList: [], person: this.props.userName }
        this.timer = null;
  }
  
    // I want the list to be populated once the component mounts.
    componentDidMount() {
        this.getPeopleList();
    }
    // this is the get fetch request that returns a list of people in the queue. I set state with the response then use that to populate the queue list. 
   getPeopleList = () => {
    var requestOptions = {
      method: 'GET',
    };

    fetch(`${REACT_APP_API_BASE}/people/people_list`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          peopleList: data,
        });
      })
      .catch((error) => console.log('error', error));
  };
  
    // this is the fetch post call that adds a new person to the end of the queue. 
   addPeople = (person) => {
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    var raw = JSON.stringify({ person: person });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
    };

    return fetch(`${REACT_APP_API_BASE}/people/`, requestOptions);
  };

  // this is the fetch request that deletes the head of both pets and person queue. It simulates a pet being adopted. 
 removePeople = (type) => {
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    var raw = JSON.stringify({ type: type });

    var requestOptions = {
      method: 'DELETE',
      headers: myHeaders,
      body: raw,
    };

    return fetch(`${REACT_APP_API_BASE}/pets`, requestOptions);
  };

    // this is an async await function that simulates the population of the que by adding a person and removing a person each 5 seconds. It uses recursion with a base case that will stop if the user name is at position 0 in the queue. 
  asyncHandelCycleList = async () => {
      const newName = names[Math.floor(Math.random() *names.length)]
      if (this.state.peopleList[0] === this.props.userName) {
          // stop the timeout function
            this.myStopFunction();
            // push to the Adopt Page
            window.location.href = '/adopt';
      } else {
        // remove a person and an animal from the queue, then add a new person to the tail of the queue, then update the waiting list. 
            await this.removePeople('cat')
            await this.addPeople(newName)
            this.getPeopleList();
        // now check again if the users name is at the top of the list.
        if (this.state.peopleList[0] === this.props.userName) {
          // stop the timeout function
          this.myStopFunction();
          // push to the Adopt Page
          window.location.href = '/adopt';
        }
            this.timer = setTimeout(() => this.asyncHandelCycleList(), 5000);
        }
  };
    // this my stop timeout function, I had to find this online but it was fairly easy enough to get working
    myStopFunction = () => {
        clearTimeout(this.timer);
    }

  render() { 
        return (
          <div className='peoplelist_box'>
            <h2>Adoption Waiting List</h2>
            <ul className='peoplelist' >
              {this.state.peopleList &&
                this.state.peopleList.map((person) => <li key={(Math.random() *10)}>{person}</li>)}
            </ul>
            <button onClick={this.asyncHandelCycleList}>
              Start Simulate Adding/Removing People
            </button>
            <button onClick={this.myStopFunction}>Stop Simulation</button>
          </div>
        );
    }
}
 
export default PeopleList;