// import { type } from '@testing-library/user-event/dist/type';
// import axios from 'axios';
import React from 'react';
import { Button } from 'bootstrap';

class Ajout extends React.Component{
     state = {
        nom:'',
        prenom:'',
        niveau:'',
        adresse:'',
        date_de_naissance:'',
        code_postal:'',
        city:'',
        country:'',
        quartier:'',
        cv:'',
        redirect:false,
        errors:[]
     }
     handleCode_PostalChange=(e)=>{
        this.setState({code_postal: e.target.value})
     }
     handleCityChange=(e)=>{
        this.setState({city: e.target.value})
     }
     handleCountryChange=(e)=>{
        this.setState({country: e.target.value})
     }
     handleQuartierChange=(e)=>{
        this.setState({quartier: e.target.value})
     }
    handleCvchange=(e)=>{
        this.setState({cv:e.target.value})
    }
    handleNameChange=(e)=>{
        this.setState({nom:e.target.value})
    }
    handlePrenomChange=(e)=>{
        this.setState({prenom:e.target.value})
    }
    handleNiveauChange=(e)=>{
        this.setState({niveau:e.target.value})
    }
    handleAdresseChange=(e)=>{
        this.setState({adresse:e.target.value})
    }
    handleDate_de_NaissanceChange=(e)=>{
        this.setState({date_de_naissance:e.target.value})
    }
    // handlesubmit=(e)=>{
    //     e.preventDefault()
    //     console.log('Created successfully')
    //     let bodyFormData= new FormData()
    //     bodyFormData.set('nom',this.state.nom)
    //     bodyFormData.set('prenom',this.state.prenom)
    //     bodyFormData.set('niveau',this.state.niveau)
    //     bodyFormData.set('adresse',this.state.adresse)
    //     bodyFormData.set('date_de_naissance',this.state.date_de_naissance)
    //     bodyFormData.set('code_postal',this.state.code_postal)
    //     bodyFormData.set('city',this.state.city)
    //     bodyFormData.set('country',this.state.country)
    //     bodyFormData.set('quartier',this.state.quartier)
    //     bodyFormData.set('cv',this.state.cv)
    
    // axios.post('',bodyFormData)
    // .then(res=>{
    //     this.setState({redirect: true})
    // })
    // .catch(error=>{
    //     if(error.response.status===401){
    //         this.setState({errors:error.response.data.errors},()=>console.log(this.state))
    //     }
    // })
    // }
    render(){
    return (
        <div>
            <form method="post" onSubmit={this.handlesubmit}>
                <label htmlFor='nom'>Nom</label>
                <input type="text" name="nom" required onChange={this.handleNameChange}></input>

                <label htmlFor='prenom'>Prenom</label>
                <input type="text" name="prenom" required onChange={this.handlePrenomChange}></input>

                <label htmlFor='niveau'>Niveau</label>
                <input type="text" name="niveau" required onChange={this.handleNiveauChange}></input>

                <label htmlFor='adresse'>Adresse</label>
                <input type="text" name="adresse" required onChange={this.handleAdresseChange}></input>

                <label htmlFor='date_de_naissance'>Date de naissance</label>
                <input type="date" name="date_de_naissance" required onChange={this.handleDate_de_NaissanceChange}></input>

                <label htmlFor='quartier'>Adresse respectif</label>
                <input type="text" name="quartier" required onChange={this.handleQuartierChange}></input>

                <label htmlFor='code_postal'>Code postal</label>
                <input type="text" name="code_postal" required onChange={this.handleCode_PostalChange}></input>

                <label htmlFor='city'>Ville</label>
                <input type="text" name="city" required onChange={this.handleCityChange}></input>

                <label htmlFor='country'>Pays</label>
                <input type="text" name="country" required onChange={this.handleCountryChange}></input>

                <label htmlFor='cv'>Cv</label>
                <input type="file" name='cv'id='cv' onChange={this.handleCvchange}></input>
                
                <Button type='submit' variant="primary">Valider</Button>
            </form>
           
            </div>
      )
}
}
export default Ajout;
