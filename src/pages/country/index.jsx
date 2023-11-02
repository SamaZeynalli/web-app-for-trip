import React from "react"
import { useNavigate, useParams } from "react-router-dom";

const Country = () => {
        const params = useParams();
        const navigate = useNavigate();

        <>
        <h1>Destination - {params.Country}</h1>
        <button onClick={()=>{navigate(-1)}}>Back</button>
        </>
}

export default Country;