import React from "react";
import './item-list.css'



export default class ItemList extends React.Component{
    render() {
        return (
            <div className='place'>
                <span className='acting'>Peoples</span>
                <span className='acting'>Planets</span>
                <span className='acting'>Starships</span>
            </div>
        );
    }
}