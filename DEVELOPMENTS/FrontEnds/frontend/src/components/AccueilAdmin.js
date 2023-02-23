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
   <Router>
    <nav>
        <ul>
            <li>
                <Link to="/Welcome">Bienvenue</Link>
            </li>
            <li>
                <Link to="/About">A propos</Link>
            </li>
            <li>
                <Link to="/Archives">Archives</Link>
            </li>
            <li>
                <Link to="/StudentList">Liste d'étudiants</Link>
            </li>
            <li>
                <Link to="/EntrepriseList">Entreprises partenaires</Link>
            </li>
            <li>
                <Link to="/searchEtudiant">Rechercher un étudiant</Link>
            </li>
            <li>
                <Link to="/add"> Ajout d'un étudiant</Link>
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