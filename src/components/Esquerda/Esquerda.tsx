import { Concurso } from "../../types/resultado";
import Estimativa from "../Estimativa/Estimativa";
import NomeLoteria from "../NomeLoteria/NomeLoteria";
import { Div } from "./EsquerdaElements";

interface EsquerdaProps {
    resultado: Concurso,
    logo: string
}

export default function Esquerda(props: EsquerdaProps) {

    return (
        <Div>
            <NomeLoteria loteria={props.resultado.tipoJogo.toUpperCase()} logo={props.logo}/>
            <Estimativa dataProximoConcurso={props.resultado.dataProximoConcurso} estimativaProximoConcurso={props.resultado.valorEstimadoProximoConcurso} />
        </Div>
    )
}