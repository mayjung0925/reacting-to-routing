import React from "react";
import { useState, useEffect } from "react";
import {Link} from "react-router-dom"

const ViewPeople = () => {
    const [people, setPeople] = useState([])

    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/people')
            .then(res => res.json())
            .then(people => setPeople(people))
            .catch(e => console.log(e))
    })


    return (
        <div>
            <h1 className="my-3 text-center">View People</h1>
            <div className="container">
              
                <div className="d-flex flex-row flex-wrap justify-content-center">
                    {people.map((person) =>
                        <div className="card col-md-5 mx-3 my-2 p-3" key={person.id}>
                            <div className="card-body">
                                <h5 className="card-title"> {person.name}</h5>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">{`Gender : ${person.gender}`}</li>
                                <li className="list-group-item">{`Age : ${person.age}`}</li>
                                <li className="list-group-item">{`Hair Color : ${person.hair_color}`}</li>
                                <li className="list-group-item">{`Eye Color : ${person.eye_color}`}</li>
                                <Link to={`/people/${person.id}`} className="btn btn-outline-primary">Full Details</Link>
                            </ul>
                          
                        </div>

                    )}
                </div>
            </div>

        </div>
    )
};

export default ViewPeople;