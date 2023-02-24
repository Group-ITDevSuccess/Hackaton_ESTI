import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';

function StudentList() {
  const [etudiantAdress, setEtudiantAdress] = useState([]);
  var Etudiants=[];

  useEffect(() => {
    axios.get('https://localhost:44338/api/etudiants')
      .then(response => setEtudiantAdress(response.data))
      .catch(error => console.error(error));
  }, []);
  const mapped=Etudiants.map(elm => {
    return (
            <tr>
            <td>{elm.Etudiants_FirstName}</td>
            <td>{elm.Etudiants_LastName}</td>
            <td>{elm.Etudiant_Genre}</td>
            <td>{elm.Etudiant_Birth}</td>
            <td>{elm.Etudiant_Photo}</td>   
            </tr>
            
            )
        })

  return (
    <div>
         <table>
            <tr>
                <th>Nom</th>
                <th>Prénom</th>
            </tr>
           {mapped}
            </table>
      <h2>Adresse de l'étudiant :</h2>
      <ul>
        {etudiantAdress.map(adress => (
          <li key={adress.Id}>
            <p>Ville : {adress.Adress_City}</p>
            <p>Pays : {adress.Adress_Country}</p>
            <p>Quartier : {adress.Adress_Quartier}</p>
            <p>Code postal : {adress.Code_Postal}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
  
                // <td><button type="button" className="btn btn-danger " onClick={ () => this.handleDelete( elm.id)}>Supprimer</button></td>
                // <td><button type="button" className="btn btn-warning " onClick={ () => this.abandon( elm.id)}>Signal d'Abandon</button></td>
             

export default StudentList