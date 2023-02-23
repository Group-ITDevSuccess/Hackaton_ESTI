import React from "react";

class AccueilEtudiant extends React.Component{
    state ={id:'2',
            id_entre:'',
            redirect:false
    }
   handleidEtudiantChange=(e)=>{
    this.setState({id_entre:e.target.value})
   }
   render(){
   return(
    <>
    <label htmlFor="id_entre">ID</label>
    <input type="text" name="id_entre" required/>
    </>
   )}
}

export default AccueilEtudiant