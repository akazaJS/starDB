import React from "react";
import './item-list.css'



export default class ItemList extends React.Component{
    render() {
        return (
            <div className='place'>
                <span>People</span>
                <span>Planets</span>
                <span>Starships</span>
            </div>
        );
    }
}