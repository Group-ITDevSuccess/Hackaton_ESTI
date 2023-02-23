import React from "react";
import axios from "axios";

class StudentSearchBar extends React.Component {
    state = {
        etudiants: [],
        search: ''
    }

    componentDidMount(){
        axios.post('http://127.0.0.1:8000/api/etudiants')
        .then(res => {
            this.setState({etudiants: res.data})
        })
        .catch(error => {
            console.log(error.response)
        })
    }

    handleSearchChange = (e) =>{
        this.setState({search: e.target.value})
        if(this.state.search === '') {
            this.getEtudiants()
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.getEtudiants()
    }

    getEtudiants(){
        let bodyFormData = new FormData()
        bodyFormData.set('search', this.state.search)

        axios.post('http://127.0.0.1:8000/api/etudiants', bodyFormData)
        .then(res => {
            this.setState({etudiants: res.data})
        })
        .catch(error => {
            console.log(error.response)
        })
    }
    render(){
      return(
        <>
         <div>
           <center> <td> <div id="col1"><h1 className="blanc"><em>LA PORTE DE DEMAIN</em></h1></div></td></center>
            <div className="d-flex justify-content-center mb-5" id="flex">
                <img src={StudentSearchBar} className="mini" alt=""/>
                <form className="form-inline my-2 my-lg-0" method="POST" onSubmit={this.handleSubmit} >
                    <input className="form-control mr-sm-2" name="search" type="search" placeholder="Chercher ici" onChange={this.handleSearchChange} />
                </form>
                </div>
                <div className="jumbotron jumbotron-fluid text-success">Nombre d'étudiants: {this.state.etudiants.length}</div>    
               <h2>Récents</h2>        
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th>Niveau</th>
                        <th>Nom</th>
                        <th>Prenom</th>
                        <th>Sexe</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.state.etudiants.map(etudiant => 
                            <tr>
                                <td>{etudiant.niveau}</td>
                                <td>{etudiant.nom}</td>
                                <td>{etudiant.prenom}</td>
                                <td>{etudiant.sexe}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
                </div>
           </>
    )
}
}
export default StudentSearchBar;