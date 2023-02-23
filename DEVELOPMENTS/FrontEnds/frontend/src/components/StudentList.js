import React from 'react'
function StudentList() {
    var Students = [
        {
            nom:'ABOU',
            prenom:'BABDOU'
        },
        {
            nom:'DIDOU',
            prenom:'COUCOU'
        },
        {
            nom:'BIBOU',
            prenom:'GOUGOUL'
        }
    ]
    const mapped=Students.map(elm => {
        return (
            
                <tr>
                <td>{elm.nom}</td>
                <td>{elm.prenom}</td>
                <td><button type="button" className="btn btn-danger " onClick={ () => this.handleDelete( elm.id)}>Supprimer</button></td>
                <td><button type="button" className="btn btn-warning " onClick={ () => this.abandon( elm.id)}>Signal d'Abandon</button></td>
                </tr>
            
        )
    })
    return(
        <div>
            <table>
            <tr>
                <th>Nom</th>
                <th>Prénom</th>
            </tr>
            {mapped}
            </table>
        </div>
        
    ) 
    
    
  }

export default StudentList