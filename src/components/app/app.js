import React from 'react';
import './app.css'
import '../header/header'
import Header from "../header/header";
import RandomPlanet from "../random-planet/random-planet";
import ItemList from "../item-list/item-list";



export default class App extends React.Component{
    render() {
        return(
            <div className='div'>
                <div className='flex'>
                    <Header/>
                    <ItemList/>
                </div>
                <RandomPlanet/>
            </div>
        )
    }
}

