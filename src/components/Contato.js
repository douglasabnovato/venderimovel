//E criamos o primeiro componente personalizado App
import React from 'react';

import Header from './Header';
import Contact from './Main/Contact';
import Footer from './Footer';

export default class Contato extends React.Component {
    render() {
        return ( 
            <div>
                <Header /> 
                <Contact />
                <Footer />
            </div>
        );
    }
}