import React, { useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


function HeroDetails(props) {

    const [height, setHeight] = useState();
    const herosId = props.match.params.id;

    useEffect(() => {
        axios
        .get(`https://a.nacapi.com/Hero${herosId}`)
        .then((res) => {
            setHeight(res.data.height)
        })
    }, [herosId])
    return (
        <div className="HeroDetails">
            <div>Taille du héro : {height}</div>
            <Link to={{pathname: '/'}}>Page d'Acceuil'</Link>
        </div>
    )
}

export default HeroDetails
