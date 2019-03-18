import React from 'react';
import InformationItem from './InformationItem';


export default class Information extends React.Component {
    render() {
        return (
            <div>
                <div className='information'>
                    <ul>
                        <li>5 quartos</li>
                        <li>2 quartos suítes</li>
                        <li>5 vagas de garagem</li>
                        <li>4 banheiros</li>
                        <li>sala de estar</li>
                        <li>sala de jantar</li>
                        <li>sala de recepção</li>
                        <li>cozinha americana</li>
                        <li>lavanderia</li>
                        <li>piscina residencial com raia 25 m</li>
                        <li>saúna</li>
                        <li>jardim</li>
                        <li>sistema de tratamento de esgoto</li>
                        <li>sistema de energia solar</li>
                        <li>sistema de monitoramento com câmeras</li>
                        <li>sistema IoT </li>
                    </ul>
                </div>
                <br />
                <div className="informationText" >
                    Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e
                    de impressos, e vem sendo utilizado desde o século XVI, quando um impressor
                    desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro
                    de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também
                    ao salto para a editoração eletrônica, permanecendo essencialmente inalterado.
                    Se popularizou na década de 60, quando a Letraset lançou decalques contendo
                    passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado
                    a softwares de editoração eletrônica como Aldus PageMaker.
                </div>
                <br />
                <div className="vantagens">
                    <InformationItem
                        image="ok.png"
                        alt="Excelente Imóvel"
                        title="Venha nos conhecer !"
                        text="Apartamento com preço incrível !"
                        value="R$800,00"
                    />
                    <InformationItem
                        image="localizacao.jpg"
                        alt="Localização diferenciada !"
                        title="Venha nos conhecer !"
                        text="Localização estratégica !"
                        value="De fácil acesso."
                    />
                    <InformationItem
                        image="playground.png"
                        alt=" Área de playground !"
                        title="Venha nos conhecer !"
                        text="Área pensada em diversão !"
                        value="Playground para todas idades."
                    />
                </div>
            </div>
        )
    }
}