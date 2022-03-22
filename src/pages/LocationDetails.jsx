import React  from "react";
import { useState,useEffect } from "react";
import {Link, useParams} from "react-router-dom"

const LocationDetails = () => {
    const { locationid } = useParams();

    const [locationDetails , setLocationDetails] = useState('');

    useEffect(()=>{
        fetch(`https://ghibliapi.herokuapp.com/locations/${locationid}`)
        .then(res => res.json())
        .then(location => setLocationDetails(location))
        .catch(e=>console.log(e))

    },[locationDetails])

console.log(locationDetails);

    return(
        <div className=" container col-md-6 d-flex justify-content-center mt-5">
            <div className="card shadow rounded">
                <div className="card-body">
                    <div key={locationDetails.id}>
                    <ul className="list-group list-group-flush">
                    <li className="list-group-item"><span className="text-muted">Name  </span>{locationDetails.name}</li>
                    <li className="list-group-item"><span className="text-muted">Climate  </span>{locationDetails.climate}</li>
                    <li className="list-group-item "><span className="text-muted">Terrain  </span>{locationDetails.terrain}</li>
                    <li className="list-group-item "><span className="text-muted">Surface Water  </span>{locationDetails.surface_water}</li>
               <Link to="/locations" className="btn btn-outline-primary"> Back to Locations</Link>
                </ul>
                </div>
                 

                </div>
            </div>
      
        </div>
    );
}

export default LocationDetails;