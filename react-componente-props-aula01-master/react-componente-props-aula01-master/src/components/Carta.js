import React, { Component } from "react";

class Carta extends Component{
    render(){
        return(
            <>

                <h1>Olá {this.props.remetente} - {this.props.destino}</h1>
                <p>Estou escrevendo essa carta por causa da
                atividade que os alunos vão fazer, okay.
                Não desiste, continue fazendo as atividades, treinando e praticando.
                O céu é o limite!</p>
            </>
        );
    }
}

export default Carta;