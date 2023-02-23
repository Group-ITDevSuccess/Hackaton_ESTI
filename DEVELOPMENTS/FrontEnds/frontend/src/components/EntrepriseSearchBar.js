import React from "react";
import axios from "axios";

class EntrepriseSearchBar extends React.Component {
    state = {
        entreprises: [],
        search: ''
    }

    componentDidMount(){
        axios.post('http://127.0.0.1:8000/api/entreprises')
        .then(res => {
            this.setState({entreprises: res.data})
        })
        .catch(error => {
            console.log(error.response)
        })
    }

    handleSearchChange = (e) =>{
        this.setState({search: e.target.value})
        if(this.state.search === '') {
            this.getentreprises()
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.getentreprises()
    }

    getentreprises(){
        let bodyFormData = new FormData()
        bodyFormData.set('search', this.state.search)

        axios.post('http://127.0.0.1:8000/api/entreprises', bodyFormData)
        .then(res => {
            this.setState({entreprises: res.data})
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
                <img src={EntrepriseSearchBar} className="mini" alt=""/>
                <form className="form-inline my-2 my-lg-0" method="POST" onSubmit={this.handleSubmit} >
                    <input className="form-control mr-sm-2" name="search" type="search" placeholder="Chercher ici" onChange={this.handleSearchChange} />
                </form>
                </div>
                <div className="jumbotron jumbotron-fluid text-success">Nombre d'entreprises: {this.state.entreprises.length}</div>    
               <h2>Récents</h2>        
                <table className="table table-hover">
                    <thead>
                    <tr>
                        
                        <th>Nom</th>
                        <th>Adresse</th>
                        <th>Email</th>
                        <th>Secteur</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.state.entreprises.map(entreprise => 
                            <tr>
                                <td>{entreprise.nom}</td>
                                <td>{entreprise.adresse}</td>
                                <td>{entreprise.email}</td>
                                <td>{entreprise.secteur}</td>
                                {/* <td><Link to={`/entreprises/${entreprise.id}`} className="btn btn-primary" >En savoir plus</Link></td> */}
                            </tr>
                        )}
                    </tbody>
                </table>
                </div>
           </>
    )
}
}
export default EntrepriseSearchBar;