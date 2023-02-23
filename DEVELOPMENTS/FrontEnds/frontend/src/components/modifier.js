import React, {useState, useEffect} from "react";
import axios from "axios";
import {useParams} from 'react-router-dom'


const Edit = () => {
    const [nom, setNom] = useState('')
    const [prenom, setPrenom] = useState('')
    const [email, setEmail] = useState('')
    const [sexe, setSexe] = useState('')
    const [validation, setValidation] = useState(false)
    const{id} = useParams()

    const update = async (e) => {
        e.preventDefault()
        await axios.put(`http://127.0.0.1:8000/api/update/${id}`, {
            nom: nom,
            prenom: prenom,
            email: email,
            sexe: sexe,
        })
        setValidation(true)
    }

    const alert = (validation === true) ? (<div className="alert alert-success mt-4"><strong>Modification Enregistrée !</strong></div>) : ""

    useEffect((id) => {
        const getEtudiantById = async (id) => {
            const res = await axios.post(`http://127.0.0.1:8000/api/etudiants/${id}`)
            setNom(res.data.nom)
            setPrenom(res.data.prenom)
            setEmail(res.data.email)
            setSexe(res.data.sexe)
        }
        getEtudiantById()
    }, [])

    return (
        <div className="container w-50">
            <h2>Modifier un Etudiant</h2>
            <form className="form-inline "  method="POST" onSubmit={update}>
                <div  className="mb-3">
                <label htmlFor="Nom">Nom</label>
                    <input type="text" className="form-control"  value={nom} required id="Nom"  onChange={(e) => setNom(e.target.value)}/>
                </div>
                
                <div  className="mb-3"></div>
                <label htmlFor="Prénom">Prénom</label>
                    <input type="text" className="form-control" value={prenom} required id="Prénom" onChange={(e) => setPrenom(e.target.value)}/>
                <div  className="mb-3">
                <label htmlFor="email">Email</label>
                    <input type="email" className="form-control"  value={email}required  id="email"  onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                <label htmlFor="sexe">Sexe</label>
                    <input type="text" className="form-control"  value={sexe} required id="sexe"  onChange={(e) => setSexe(e.target.value)} />
                </div>
                {alert}
                <button type="submit" className="btn btn-primary">Modifier</button> 
            </form>
        </div>     
    )
}

export default Edit 

