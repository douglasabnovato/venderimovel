import React from 'react';

export default class InformationItem extends React.Component{
    render(){
        return(
            <div className="vantagensItem">
                <div className="vantagensItemImg">
                    <img src="/img/ok.png" alt="Ótima localização." title="espaço de primeira"></img>    
                </div>
                <div className="vantagensItemTxt">
                    Ótimo apartamento com estrutura de primeira.<br/>
                    R$800,00
                </div>
            </div>
        );
    }
}