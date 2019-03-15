//E criamos o primeiro componente personalizado App
import React from 'react';

import Header from './Header';
import Maps from './Main/Maps';
import Footer from './Footer';

export default class Mapa extends React.Component {
    render() {
        return ( 
            <div>
                <Header /> 
                <Maps />
                <Footer />
            </div>
        );
    }
}