import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"

const PersonDetails = () => {
    const { personid } = useParams();

    const [personDetails, setPersonDetails] = useState('');

    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/people/${personid}`)
            .then(res => res.json())
            .then(person => setPersonDetails(person))
            .catch(e => console.log(e))

    }, [personid])

    console.log(personDetails);

    return (
        <div className=" container col-md-6 d-flex justify-content-center mt-5">
            <div className="card shadow rounded">
                <div className="card-body">
 
                    <div key={personDetails.id}>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"><span className="text-muted">Name  </span>{personDetails.name}</li>
                            <li className="list-group-item"><span className="text-muted">Gender  </span>{personDetails.gender}</li>
                            <li className="list-group-item "><span className="text-muted">Eye Color  </span>{personDetails.eye_color}</li>
                            <li className="list-group-item "><span className="text-muted">Hair Color  </span>{personDetails.hair_color}</li>

                        </ul>
                    </div>


                </div>
            </div>

        </div>
    );
}

export default PersonDetails;
