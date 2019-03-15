import React from 'react';
import {Link} from 'react-router-dom';


export default class Nav extends React.Component {
    render(){
        return(
            <div className="nav">
                <Link to= "/">Home</Link>
                <Link to= "/informacao">Informação</Link>
                <Link to= "/fotos">Fotos</Link>
                <Link to= "/mapa">Mapa</Link>
                <Link to= "/contato">Contato</Link>                
            </div>
        );
    }
}