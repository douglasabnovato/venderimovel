import React from 'react';

export default class InformationItem extends React.Component{
    render(){
        return(
            <div className="vantagensItem">
                <div className="vantagensItemImg">
                    <img src={"/img/"+this.props.image} alt={this.props.alt} title={this.props.title}></img>    
                </div>
                <div className="vantagensItemTxt">
                    {this.props.text}<br/>
                    {this.props.value}
                </div>
            </div>
        );
    }
}