//E criamos o primeiro componente personalizado App
import React from 'react';

import Header from './Header';
import Slide from './Main/Slide';
import Footer from './Footer';

export default class Fotos extends React.Component {
    render() {
        return ( 
            <div>
                <Header /> 
                <Slide />
                <Footer />
            </div>
        );
    }
}