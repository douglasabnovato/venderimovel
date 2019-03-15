import React from 'react';

export default class Information extends React.Component {

    render(){

        return (
            <div>
                <div className='information'>
                    <ul>
                        <li>4 quartos</li>
                        <li>5 vagas de garagem</li>
                        <li>5 banheiros</li>
                        <li>sala de estar</li>
                        <li>sala de jantar</li>
                        <li>sala de recepção</li>
                        <li>cozinha americana</li>
                    </ul>
                </div>
                <div className="informationText" id="information">
                    Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.
                </div>
            </div>
        )
    }

}