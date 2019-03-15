//E criamos o primeiro componente personalizado App
import React from 'react';

import Header from './Header';
import Information from './Main/Information';
import Footer from './Footer';

export default class Informacao extends React.Component {
    render() {
        return ( 
            <div>
                <Header /> 
                <Information />
                <Footer />
            </div>
        );
    }
}