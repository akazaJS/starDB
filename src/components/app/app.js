import React from 'react';
import './app.css'
import '../header/header'
import Header from "../header/header";
import RandomPlanet from "../random-planet/random-planet";
import ItemList from "../item-list/item-list";
import People from "../peoples/people";
import PersonDetails from "../person-details/person-details";



export default class App extends React.Component{

    state={
        selectedPerson:4
    }

    onItemSelected=(id)=>{
        this.setState({
            selectedPerson:id
        })
    }

    render() {
        return(
            <div className='div'>
                <div className='flex'>
                    <Header/>
                    <ItemList/>
                </div>
                <RandomPlanet/>
                <div className='bot'>
                    <People onItemSelected={this.onItemSelected} />
                    <PersonDetails personId={this.state.selectedPerson} />
                </div>
            </div>
        )
    }
}

