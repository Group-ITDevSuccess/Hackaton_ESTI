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
                <td><button type="button" className='btn btn-danger' onClick={ () => this.handleDelete( elm.id)}>Supprimer</button></td>
                </tr>
        )
    })
    return(
        <div className="table table-dark table-striped">
            <table className='tableau'>
            <tr>
                <th>Nom</th>
                <th>Prénom</th>
                <th>Action</th>
            </tr>
            {mapped}
            </table>
        </div>
        
    ) 
    
    
  }

export default StudentList