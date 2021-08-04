import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Hero from '../Components/Hero';
import './HeroList.css';


function HeroList() {
    const [heros, setHeros] = useState([])
    const [weak, setWeak] = useState(false)
    useEffect(() => {
        axios
        .get('https://lit-badlands-40023.herokuapp.com/heros')
        .then((res) => res.data)
        .then((data) => setHeros(data))
    }, [])

    const filterOFF = heros.map((hero) => (
        <div key={hero.id}>
            <Hero hero={hero} />
        </div>
    ))
    const filterON = heros.filter((hero) => hero.force < 30)
    .map((hero) => (
        <div key={hero.id}>
            <Hero hero={hero} />
        </div>
    ))
    
    return (
        <div className= "HeroList">
            <h1>Checkpoint : 2</h1>
            <button className={!weak ? "btn-filter" : "btn-filterOff"} 
            onClick={() => setWeak(!weak)}>{weak ? "Afficher les faibles" : "afficher les forts"}</button>
            <div className="Heros">
                {!weak ? filterON : filterOFF}
            </div>

        </div>
    )
}

export default HeroList
