import React, { Component } from 'react';
import names from '../store';

class PeopleList extends Component {
   
    constructor(props) {
        super(props);
        this.state = { peopleList: [], person: this.props.userName }
        this.timer = null;
    }

    componentDidMount() {
        this.getPeopleList();
    }

   getPeopleList = () => {
    var requestOptions = {
      method: 'GET',
    };

    fetch('http://localhost:8000/people/people_list', requestOptions)
      .then((response) => response.json())
      .then((data) => {
          this.setState({
              peopleList: data
          });
      })
      .catch((error) => console.log('error', error));
    };

   addPeople = (person) => {
    console.log('add person has started');

    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    var raw = JSON.stringify({ person: person });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
    };

    return fetch('http://localhost:8000/people/', requestOptions);
  };


 removePeople = (type) => {
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    var raw = JSON.stringify({ type: type });

    var requestOptions = {
      method: 'DELETE',
      headers: myHeaders,
      body: raw,
    };

    return fetch('http://localhost:8000/pets', requestOptions);
  };
    // I was experimenting with all of the different ways I could populate the list
  
    // handelCycleList = () => {
    //     if (this.state.peopleList[0] === this.state.person) {
    //         this.myStopFunction();
    //         // history push to new page
    //         console.log('You are next in line! Get ready to choose a new pet.')
    //     } else {
    //         this.removePeople('cat').then(() => {
    //             this.addPeople('Ava').then(() => { 
    //                 this.getPeopleList();
    //                 console.log('there should be 5 seconds starting now');
    //                 this.timer = setTimeout(() => this.handelCycleList(), 5000);
    //             })
    //         })
    //     }
    // };

  asyncHandelCycleList = async () => {
      const newName = names[Math.floor(Math.random() *names.length)]
      if (this.state.peopleList[0] === this.props.userName) {
          // stop the timeout function
            this.myStopFunction();
            // push to the Adopt Page
            window.location.href = '/adopt';
        } else {
            await this.removePeople('cat')
            await this.addPeople(newName)
            this.getPeopleList();
        console.log('there should be 5 seconds starting now');
            this.timer = setTimeout(() => this.asyncHandelCycleList(), 5000);
        }
    
  };

    myStopFunction = () => {
        clearTimeout(this.timer);
    }

  render() { 
      
    console.log(this.props)
        return (
          <div className='peoplelist_box'>
            <ul className='peoplelist'>
              {this.state.peopleList && this.state.peopleList.map((person) => (
                <li>{person}</li>
              ))}
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