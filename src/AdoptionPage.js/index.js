import React, { Component, useState } from 'react';



peopleList() {
    const i = 0;
    peopleList = []; 
    if (i = 4) {
        return peopleList;
    }
    fetch(api get fetch
    the fetch return = [...peopleList, fetch result]
    )
    i++;
    peopleList();
}

// this needs to run every 5 seconds ONLY IF there is one person in the que. 
peopleAdd(person) {
    person = some input defines person via an input
    fetch request with a post to the server that sends the person in the body add to the end of the list
    data = person
}

firstInLine(person) {
    fetch request that checks if the person === person in first queue and returns a 200 if so
    if (200) {
            return true;
        } else false;
}

showPet() {
    allPets = [];
    if (!firstInline) {
        return 'you are not first in line, so you can not see pets';
    }
    fetch request to GET all of the pets in the QUEUE for cats and dogs. 
    return the fetch result as an Array. allPets = the response
}

// this needs to run every 5 seconds
removeFirstPersonPet() {
    fetch that does a DELETE for the person and pet removal
    call the get all list function after 
        peopleList();
}

// this populats 4 demo people in the que then added the new user at the end
addPersonToLast(person){
        peopleToAdd = [ryan, jersh, json, dom]
    for (i = 0; i <= peopleToAdd.length(); i++) {
        addPerson(peopleToAdd[i])
    }
    addPerson(person)
}
 
// this demos the first person in the list being removed every 5 seconds. 
demoLastInList() {
    setTimeout(removeFirstPersonPet(), 5000)
    i++;
    handelIfLastInList();
}

// this is the fuction that is called when the demo Last in list if ran it gets the person input from the user. 
handelLastInLine(person){
    addPersontoLast(person);
    demoLastInList();
}

// button is clicked to demo being first in line
handelFirstInLine(person){
    addPerson(person);
    addFivePeople();
}

// 5 second delay to add people
addFivePeople() {
    peopleToAdd = [ryan, jersh, json, dom]
    for (i = 0; i <= peopleToAdd.length(); i++) {
        setTimeout(addPerson(peopleToAdd[i]), 5000)
    }

}