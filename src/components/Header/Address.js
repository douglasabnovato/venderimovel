import React from 'react';

export default class Address extends React.Component {

    render(){

        return (
            <div className="address">
                <picture>
                    <source media="(max-width: 768px)" srcSet="/img/whatsapp-wef-imoveis-L.png" />
                    <source media="(min-width: 769px)" srcSet="/img/whatsapp-wef-imoveis-L.png" />
                    <img src="/img/whatsapp-wef-imoveis-L.png" alt="whatsapp wef imóveis" />
                </picture>
                <strong>(xx)xxxxx-xxxx</strong> <br/>
                Endereço<br/>
                <strong>R$800,00</strong>
            </div>
        )
    }

}