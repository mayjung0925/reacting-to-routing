import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Locations = ()=>{

    const [locations, setLocations]=useState([])

    useEffect(()=>{
        fetch('https://ghibliapi.herokuapp.com/locations')
        .then(res => res.json())
        .then(locations => setLocations(locations))
        .catch(e=>console.log(e))
    },[])

   
    return(
        <div>
    <h1 className="my-5 text-center">View Films</h1>
            <div className="d-flex flex-row flex-wrap justify-content-center">

                    {locations.map((location) =>
                        <div className="card col-md-5 mx-3 my-2 p-3  justify-content-center" key={location.id}>
                        <div className="card-body">
                        
                            <h5 className="card-title">{location.name}</h5>
                        </div>
                        <ul className="list-group list-group-flush">
                
                        <p className="card-text p-3 ">{location.climate}</p>
                        <Link to={`/locations/${location.id}`} className="btn btn-outline-primary">Full Details</Link>
                     
                        </ul>
                        </div>
                      
                    )}
        
                    
             </div>

        </div>
    )
};


export default Locations;