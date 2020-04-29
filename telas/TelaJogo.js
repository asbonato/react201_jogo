import React, {useState, useRef, useEffect} from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import NumeroEscolhido from '../components/NumeroEscolhido';
import Cartao from '../components/Cartao';

TelaJogo = (props) => {
    const {valorDigitado, onJogoAcabou} = props;
    const [rodadas,setRodadas] = useState(0);
    const minAtual = useRef(1);
    const maxAtual = useRef(100);
    const [tentativaAtual,setTentativaAtual] = useState(geraValor(1,100,props.valorDigitado));
    const geraNovoPalpite = (dica) => {
        console.log('entrada max='+maxAtual.current+' min='+minAtual.current);
        //verificamos se a dica está errada
        if (dica === 'menor' && tentativaAtual < props.valorDigitado
         || dica === 'maior' && tentativaAtual > props.valorDigitado){
             Alert.alert('Dica inválida!', 'Dica errada...', [{text:"Ok", style:'cancel'}]);
             return;
         }
         if (dica === 'menor'){
             //o valor máximo não pode ser maior que a tentativa
             maxAtual.current = tentativaAtual;
         } else {
             minAtual.current = tentativaAtual;
         }
         //não dá o mesmo palpite
         const n = geraValor(minAtual.current, maxAtual.current, tentativaAtual);
         setTentativaAtual(n);
         setRodadas(rodadas => rodadas + 1);
         console.log('saída max='+maxAtual.current+' min='+minAtual.current);
    }
    useEffect(() => {
        if (tentativaAtual === props.valorDigitado) {
            props.onJogoAcabou(rodadas)
        }
    }, [tentativaAtual, valorDigitado, onJogoAcabou]);
  return (
    <View style={estilos.tela}>
        <Text>Palpite do Computador</Text>
        <NumeroEscolhido>
            {tentativaAtual}
        </NumeroEscolhido>
        <Cartao style={estilos.botoes}>
            <Button title="É menor" onPress={geraNovoPalpite.bind(this,'menor')}/>
            <Button title="É maior" onPress={geraNovoPalpite.bind(this,'maior')}/>
        </Cartao>
    </View>
  );
}

const estilos = StyleSheet.create({
    tela:{
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    botoes: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 40,
        width: 300,
        maxWidth: '80%'
    }
});

export default TelaJogo;

const geraValor = (min, max, excluir) => {
    //calcula o teto de min
    min = Math.ceil(min);
    //calcula o chão de max
    max = Math.floor(max);
    //número aleatório
    //Math.random() devolve um valor entre 0 e 1
    const gerado = Math.floor(Math.random() * (max - min)) + min;
    //cado o valor gerado seja igual àquele
    //que deve ser exlcuído, gera outro
    if (gerado == excluir)
        return geraValor(min, max, excluir);
    return gerado;
}