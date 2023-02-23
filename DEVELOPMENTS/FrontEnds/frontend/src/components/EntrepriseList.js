import React from 'react'
import EntrepriseSearchBar from './EntrepriseSearchBar'

function EntrepriseList() {
    var Students = [
        {
            nom:'ABOU',
            adresse:'MerdeCity',
            email:'merde@cul.com',
            secteur:'financièrement pauvre'
        },
        {
            nom:'ABOU',
            adresse:'MerdeCity',
            email:'merde@cul.com',
            secteur:'financièrement pauvre'
        },
        {
            nom:'ABOU',
            adresse:'MerdeCity',
            email:'merde@cul.com',
            secteur:'financièrement pauvre'
        },
        {
            nom:'ABOU',
            adresse:'MerdeCity',
            email:'merde@cul.com',
            secteur:'4amis'
        }
    ]
    const mapped=Students.map(elm => {
        return (
            
                <tr>
                <td>{elm.nom}</td>
                <td>{elm.adresse}</td>
                <td>{elm.email}</td>
                <td>{elm.secteur}</td>
                </tr>
            
        )
    })
    return(
        <div>
            <EntrepriseSearchBar/>
            
            
            {mapped}
            
        </div>
        
    ) 
    
  }

export default EntrepriseList