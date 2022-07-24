import React from "react";
import './person-details.css'
import SwapiService from "../services/swapi";

export default class PersonDetails extends React.Component{

    swap= new SwapiService()

    state={
        person:null
}

componentDidMount() {
        this.updatePerson()
}

componentDidUpdate(prevProps) {
        if (this.props.personId !== prevProps.personId){
            this.updatePerson()
        }
}

    updatePerson() {
    const {personId} = this.props;
    if (!personId) {
        return;
    }

    this.swap
        .getPerson(personId)
        .then((person)=>{
            this.setState({person})
        })
}

    render() {

        if(!this.state.person){
            return <span>Select a person from a list</span>
        }

        const{name,gender,birthYear,eyeColor}=this.state.person;

        return (
            <ul className='person-details item-list list-group'>
                <h2>Person _{name}</h2>
                <li
                    className='list-group-item'>
                   <span>name: {name}</span>
                </li>
                <li className='list-group-item'>
                    <span>gender: {gender}</span>
                </li>
                <li className='list-group-item'>
                    birthYear: {birthYear}
                </li>
                <li className='list-group-item'>
                    eyeColor:{eyeColor}
                </li>
            </ul>
        );
    }
}