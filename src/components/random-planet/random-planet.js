import React from 'react';
import SwapiService from '../services/swapi'
import './random-planet.css'
import Spinner from "../spinner/spinner";
import Error from "../error/error";

export default class RandomPlanet extends React.Component{

    swapiService= new SwapiService();

state={
    loading:true,
    id:null,
    name:null,
    population:null,
    rotationPeriod:null,
    diameter:null,
}
componentDidMount() {
    this.updatePlanet()
    this.interval=setInterval(this.updatePlanet, 7000)
}

    onError=(err)=>{
this.setState({
    error:true,
    loading:false
})
};

updatePlanet=()=>{
    let id=Math.floor(Math.random()*(20-2))+2;
    this.swapiService
        .getPlanet(id)
        .then((planet)=>{
            this.setState({
                error:false,
                loading:false,
                name:planet.name,
                population:planet.population,
                rotationPeriod:planet.rotation_period,
                diameter:planet.diameter,
                id,
            })

        })
        .catch(this.onError)
    }

    render() {

    const {population,rotationPeriod,diameter,name,id,loading,error}=this.state

        const errorMessage=error?<Error/>:null
        if(loading){
            return <Spinner/>
        }

        return(
           <div
               className='size'>
               {errorMessage}
               <img
                   alt=''
                   className='img'
                   src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
               />
               <div className='pad'>
               <h3>{name}</h3>
                <ul className='list-group list-group-flesh'>

                    <li className='list-group-item'>
                        <span>Population:</span>
                        <span>{population}</span>
                    </li>

                    <li className='list-group-item'>
                        <span>Rotate period:</span>
                        <span>{rotationPeriod}</span>
                    </li>

                    <li className='list-group-item'>
                        <span>Diameter:</span>
                        <span>{diameter}</span>
                    </li>

                </ul>
               </div>
           </div>
        )
    }
}