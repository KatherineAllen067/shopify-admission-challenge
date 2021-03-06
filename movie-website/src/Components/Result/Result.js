import React from "react";
import '../../styles/component-styles/Result.scss';
import Button from '../Nominate/Nominate.js';

function Result (props){
    //list of results that come from search
    return(
        <>
         <div className="result-column">
            <img src={props.poster} alt="movie poster" className="poster"/>
            <h2>{props.title}</h2>
            <h3 className="year">{props.year}</h3>
            <Button 
                movie={props.id}
                movieHandler={props.movieFunction}
                nominationList={props.nominationList}
            />
        </div> 
        </>   
    )
}  

export default Result;