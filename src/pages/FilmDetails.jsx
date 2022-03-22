import React  from "react";
import { useState,useEffect } from "react";
import {Link, useParams} from "react-router-dom"

const FilmDetails = () => {
    const { filmid } = useParams();

    const [filmDetails , setFilmDetails] = useState('');

    useEffect(()=>{
        fetch(`https://ghibliapi.herokuapp.com/films/${filmid}`)
        .then(res => res.json())
        .then(film => setFilmDetails(film))
        .catch(e=>console.log(e))

    },[filmid])

console.log(filmDetails);

    return(
        <div className=" container col-md-6 d-flex justify-content-center mt-5">
            <div className="card shadow rounded">
                <div className="card-body">
                    <div key={filmDetails.id}>
                    <ul className="list-group list-group-flush">
                    <li className="list-group-item"><span className="text-muted">Title  </span>{filmDetails.title}</li>
                    <li className="list-group-item"><span className="text-muted">Directed by  </span>{filmDetails.director}</li>
                    <li className="list-group-item "><span className="text-muted">Released in  </span>{filmDetails.release_date}</li>
                <p className="card-text p-3 ">{filmDetails.description}</p>
               <Link to="/viewfilms" className="btn btn-outline-primary"> Back to Films</Link>
                </ul>
                </div>
                 

                </div>
            </div>
      
        </div>
    );
}

export default FilmDetails;