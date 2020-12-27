import React, { useEffect, useState } from 'react';

const TestPeopleList = (props) => {
  const [peopleList, setPeopleList] = useState(null);

  const getPeopleList = () => {
    var requestOptions = {
      method: 'GET',
    };

    fetch('http://localhost:8000/people/people_list', requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setPeopleList(data);
      })
      .catch((error) => console.log('error', error));
    };
    
      useEffect(() => {
    getPeopleList();
  }, []);


  const addPeople = (person) => {
    console.log('add person has started');

    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    var raw = JSON.stringify({ person: person });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
    };

    fetch('http://localhost:8000/people/', requestOptions)
      .catch((error) => console.log('error', error));
  };

    const removePeople = (type) => {
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    var raw = JSON.stringify({ type: type });

    var requestOptions = {
      method: 'DELETE',
      headers: myHeaders,
      body: raw,
    };

    fetch('http://localhost:8000/pets', requestOptions)
      .catch((error) => console.log('error', error));
  };

  const handelCycleList = () => {
    getPeopleList();
    removePeople('cat');
    addPeople('borat');
    console.log('there should be 5 seconds starting now');
    setTimeout(() => handelCycleList(), 5000);
  };

    return peopleList ? (
    <div className='peoplelist_box'>
            <ul className='peoplelist'>
        {peopleList.map(person => 
            <li>{person}</li>)
        }        
      </ul>
      <button onClick={handelCycleList}>
        Start Simulate Adding/Removing People
      </button>
    </div>
  ) : null;
};

export default TestPeopleList;
