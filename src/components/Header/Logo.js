import React from 'react';

export default class Logo extends React.Component {

    render(){

        return (
            <div className="logo">
                <picture>
                    <source media="(max-width: 768px)" srcSet="/img/diamante-logomarca-S.jpg" />
                    <source media="(min-width: 769px)" srcSet="/img/diamante-logomarca-L.jpg" />
                    <img src="/img/diamante-logomarca-L.jpg" alt="logomarca wef imóveis" />
                </picture>
            </div>
        )
    }

}