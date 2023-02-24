import React from "react";
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";

import Welcome from "./Welcome";
import About from "./About";
import Archives from "./Archives";
import StudentList from "./StudentList";
import EntrepriseList from "./EntrepriseList";
import StudentSearchBar from "./StudentSearchBar";
import Ajout from "./AddStudent";

const AccueilAdmin = ()=>{
 return (
    <div>
   <Router >
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <ul className="navbar-nav">
            <li className="navbar-item">
                <Link className="nav-link" to="/Welcome">Bienvenue</Link>
            </li>
            <li className="navbar-item">
                <Link className="nav-link" to="/About">A propos</Link>
            </li>
            <li className="navbar-item">
                <Link className="nav-link" to="/Archives">Archives</Link>
            </li>
            <li className="navbar-item">
                <Link className="nav-link" to="/StudentList">Liste d'étudiants</Link>
            </li>
            <li className="navbar-item">
                <Link className="nav-link" to="/EntrepriseList">Entreprises partenaires</Link>
            </li>
            <li className="navbar-item">
                <Link className="nav-link" to="/searchEtudiant">Rechercher un étudiant</Link>
            </li>
            <li className="navbar-item">
                <Link className="nav-link" to="/add"> Ajout d'un étudiant</Link>
            </li>
        </ul>


        
    </nav>
    
    <Switch>
     <Route path="/Welcome" component={Welcome}/>
     <Route path="/About" component={About}/>
     <Route path="/Archives" component={Archives}/>
     <Route path="/StudentList" component={StudentList}/>
     <Route path="/EntrepriseList" component={EntrepriseList}/>
     <Route path="/searchEtudiant" component={StudentSearchBar}/>
     <Route path="/add" component={Ajout}/>
    </Switch>

   </Router>
   
 </div>
 )
}
export default AccueilAdmin