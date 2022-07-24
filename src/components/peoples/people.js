import React from "react";
import './people.css'
import SwapiService from "../services/swapi";
import Spinner from "../spinner/spinner";



export default class People extends React.Component{

  swap = new SwapiService()

    state={
        allPeoples:null
    }

    componentDidMount() {
        this.swap.getAllPeople()
            .then((allPeoples)=>{
            this.setState({
                allPeoples
            })
        })
    }
    renderItems(arr){
      return arr.map((person,ind)=>{
          return(
              <li
                  className='list-group-item act pad'
                  key={person.id}
                 onClick={()=>this.props.onItemSelected(ind+1)}
              >
                  {person.name}
              </li>
          )
      })
    }

    render() {

        let{allPeoples}=this.state
        console.log(allPeoples)
        if(!allPeoples){
            return <Spinner/>
        }
        const items= this.renderItems(allPeoples)
        return (
          <ul
              className='item-list list-group smaller'>
              {items}
          </ul>
        );
    }

}