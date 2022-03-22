import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ViewFilms = ()=>{

    const [films, setFilms]=useState([])

    useEffect(()=>{
        fetch('https://ghibliapi.herokuapp.com/films')
        .then(res => res.json())
        .then(films => setFilms(films))
        .catch(e=>console.log(e))
    },[])

   
    return(
        <div>
    <h1 className="my-5 text-center">View Films</h1>
            <div className="d-flex flex-row flex-wrap justify-content-center">

                    {films.map((film) =>
                        <div className="card col-md-5 mx-3 my-2 p-3  justify-content-center" key={film.id}>
                        <div className="card-body">
                        
                            <h5 className="card-title">{film.title}</h5>
                        </div>
                        <ul className="list-group list-group-flush">
                
                        <p className="card-text p-3 ">{film.description}</p>
                        <Link to={`/viewfilms/${film.id}`} className="btn btn-outline-primary">Full Details</Link>
                     
                        </ul>
                        </div>
                      
                    )}
        
                    
             </div>

        </div>
    )
};


export default ViewFilms;