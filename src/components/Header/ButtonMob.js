import React from 'react';


 //   criaremos os três retângulos paralelos no nosso programa de design, no caso Fireworks. 
 //   Iremos exportar esse botão como png e fundo transparente.
 //   No componente ButtonMob faremos o método clickMe que fará a função toggle 


export default class ButtonMob extends React.Component {

    /* estado */
    constructor()
    {
        super();
        this.state={
            visNav:'flex'
        }
    }

    /* Fará a função de toggle (interruptor)*/
    clickMe()
    {
        if(this.state.visNav === 'flex'){
            this.setState({
                visNav:'none'
            });
        }else{
            this.setState({
                visNav:'flex'
            });
        }
        document.querySelector(".nav").style.display=this.state.visNav;
    }

    render(){
        return(
            <div className="buttonMob" onClick={this.clickMe.bind(this)}>
                <img src="/img/icon-menu-48-48.png" alt="Botão Mobile"/>
            </div>
        );
    }
}