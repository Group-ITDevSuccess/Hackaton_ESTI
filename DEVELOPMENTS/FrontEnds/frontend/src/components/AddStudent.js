// import { type } from '@testing-library/user-event/dist/type';
import axios from 'axios';
import React from 'react';

class Ajout extends React.Component{
     state = {
        // Etudiant_FirstName:'',
        // Etudiant_LastName:'',
        // Etudiant_Genre:'',
        // Etudiant_Birth:'',
        // Code_Postal:'',
        // Adress_City:'',
        // Adress_country:'',
        // Adress_Quartier:'',
        // Etudiant_Photo:'',
        // cv:'',
        Etudiant_FirstName: '',
        Etudiant_LastName: '',
        Etudiant_Genre: '',
        Etudiant_Birth: '',
        Etudiant_Photo: '',
        Etudiant_Adress: [{
          Adress_City: '',
          Adress_Country: '',
          Adress_Quartier: '',
          Code_Postal: ''}],
        redirect:false,
        errors:[]
     }
     handleCode_PostalChange=(e)=>{
        this.setState({Code_Postal: e.target.value})
     }
     handleCityChange=(e)=>{
        this.setState({Adress_City: e.target.value})
     }
     handleCountryChange=(e)=>{
        this.setState({Adress_Country: e.target.value})
     }
     handleQuartierChange=(e)=>{
        this.setState({Adress_Quartier: e.target.value})
     }
    handleGenreChange=(e)=>{
       this.setState({Etudiant_Genre:e.target.value})
    }
    handleNameChange=(e)=>{
        this.setState({Etudiant_LastName:e.target.value})
    }
    handlePrenomChange=(e)=>{
        this.setState({Etudiant_FirstName:e.target.value})
    }
    handlePhotoChange=(e)=>{
        this.setState({Etudiant_Photo:e.target.value})
    }
    // handleNiveauChange=(e)=>{
    //     this.setState({niveau:e.target.value})
    // }
    // handleAdresseChange=(e)=>{
    //     this.setState({adresse:e.target.value})
    // }
    handleDate_de_NaissanceChange=(e)=>{
        this.setState({Etudiant_Birth:e.target.value})
    }
    handlesubmit=(e)=>{
        e.preventDefault()
        let bodyFormData= new FormData()
        bodyFormData.set('Etudiant_FirstName',this.state.Etudiant_FirstName)
        bodyFormData.set('Etudiant_LastName',this.state.Etudiant_LastName)
        bodyFormData.set('Etudiant_Genre',this.state.Etudiant_Genre)
        //bodyFormData.set('adresse',this.state.adresse)
        bodyFormData.set('Etudiant_Birth',this.state.Etudiant_Birth)
        bodyFormData.set('Code_Postal',this.state.Etudiant_Adress.Code_Postal)
        bodyFormData.set('Adress_City',this.state.Etudiant_Adress.Adress_City)
        bodyFormData.set('Adress_Country',this.state.Etudiant_Adress.Adress_Country)
        bodyFormData.set('Adress_Quartier',this.state.Etudiant_Adress.Adress_Quartier)
        bodyFormData.set('Etudiant_Photo',this.state.Etudiant_Photo)
        //bodyFormData.set('cv',this.state.cv)
    
    axios.post('https://localhost:44338/api/etudiants/add',bodyFormData)
    .then(res=>{
        this.setState({redirect: true},
            console.log('inséré'))
    })
    .catch(error=>{
        if(error.response.status===401){
            this.setState({errors:error.response.data.errors},()=>console.log(this.state))
        }
    })
}
    render(){
    if (this.state.redirect){
        return(<redirect to="/"/>)}
    return (
        <div>
            <form method="post" onSubmit={this.handlesubmit}>
            <label htmlFor='Etudiant_LastName'>Nom</label>
            <input type="text" name="Etudiant_LastName" required onChange={this.handleNameChange}></input>
            <label htmlFor='Etudiant_FirstName'>Prenom</label>
            <input type="text" name="Etudiant_FirstName" required onChange={this.handlePrenomChange}></input>
            {/* <label htmlFor='niveau'>Niveau</label>
            <input type="text" name="niveau" required onChange={this.handleNiveauChange}></input> */}
            {/* <label htmlFor='adresse'>Adresse</label>
            <input type="text" name="adresse" required onChange={this.handleAdresseChange}></input> */}
            <label htmlFor='Etudiant_Birth'>Date de naissance</label>
            <input type="date" name="Etudiant_Birth" required onChange={this.handleDate_de_NaissanceChange}></input>
            <label htmlFor='Adress_Quartier'>Adresse respectif</label>
            <input type="text" name="quartier" required onChange={this.handleQuartierChange}></input>
            <label htmlFor='Code_Postal'>Code postal</label>
            <input type="text" name="Code_Postal" required onChange={this.handleCode_PostalChange}></input>
            <label htmlFor='Adress_City'>Ville</label>
            <input type="text" name="Adress_City" required onChange={this.handleCityChange}></input>
            <label htmlFor='Adress_Country'>Pays</label>
            <input type="text" name="Adress_Country" required onChange={this.handleCountryChange}></input>
            <label htmlFor='Etudiant_Genre'>Genre</label>
            <input type="text" name='Etudiant_Genre' onChange={this.handleGenreChange}></input>
            <label htmlFor='Etudiant_Photo'>Photo</label>
            <input type="text" name='Etudiant_Photo' onChange={this.handlePhotoChange}></input>
            <button type='submit'>Valider</button>
            </form>
           </div>
      )
}
}
export default Ajout;
