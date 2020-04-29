import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import Cartao from '../components/Cartao'
import Cores from '../cores/cores'
import Entrada from '../components/Entrada'
import NumeroEscolhido from '../components/NumeroEscolhido';

const TelaComecoDoJogo = (props) => {
    const [texto, setTexto] = useState('');
    const [usuarioConfirmou, setUsuarioConfirmou] = useState(false);
    const [numeroDigitado, setNumeroDigitado] = useState();

    const capturaTexto = (textoDigitado) => {
        textoDigitado = textoDigitado.replace(/[^0-9]/g, '');
        setTexto(textoDigitado);
    }
    const reiniciaTexto = () => {
        setTexto('');
        setUsuarioConfirmou(false);
    }
    const confirmaJogada = () => {
        const n = parseInt(texto);
        if (isNaN(n) || n <= 0 || n > 99) {
            Alert.alert(
                'Número inválido', //título
                'Digite um valor entre 1 e 99', //mensagem
                [//coleção de botões, cada botão é um JSON
                    //só teremos um neste caso
                    {
                        text: 'Ok',
                        style: 'default',
                        onPress: reiniciaTexto
                    }
                ]
            );
            return;
        }
        setUsuarioConfirmou(true);
        setNumeroDigitado(n);
        setTexto('');
        Keyboard.dismiss();
    };

    let numeroEscolhidoText;
    
    if (usuarioConfirmou)
        numeroEscolhidoText =
            <Cartao estilos={estilos.numeroSelecionadoCartao}>
                <Text>Número escolhido:</Text>
                <NumeroEscolhido>
                    {numeroDigitado}
                </NumeroEscolhido>
                <Button title="Começar"
                    onPress={() => { props.onJogoComecou(numeroDigitado) }}
                />
            </Cartao>
    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
            <View style={estilos.tela}>
                <Text style={estilos.titulo}>Comece um jogo</Text>
                <Cartao estilos={estilos.entradaView}>
                    <Text>Escolha um número</Text>
                    <Entrada
                        style={estilos.entrada}
                        autoCapitalize='none'
                        blurOnSubmit
                        autoCorrect={false}
                        keyboardType="number-pad"
                        maxLength={2}
                        onChangeText={capturaTexto}
                        value={texto}
                    />

                    <View style={estilos.buttonsView}>
                        <View style={estilos.botao}>
                            <Button
                                title="Reiniciar"
                                color={Cores.accent}
                                onPress={reiniciaTexto}
                            />
                        </View>
                        <View style={estilos.botao}>
                            <Button
                                title="Confirmar"
                                color={Cores.accent}
                                onPress={confirmaJogada}
                            />
                        </View>
                    </View>
                </Cartao>
                {numeroEscolhidoText}
            </View>
        </TouchableWithoutFeedback>
    );
}

const estilos = StyleSheet.create({
    tela: {
        flex: 1, //toma todo o espaço que puder
        padding: 10,
        alignItems: 'center'
    },
    titulo: {
        fontSize: 20,
        marginVertical: 10
    },
    entradaView: {
        //300 pontos de largura
        width: 300,
        //mas no máximo, 80% da tela
        maxWidth: '80%',
        alignItems: 'center'
    },
    buttonsView: {
        //o padrão é column
        flexDirection: 'row',
        width: '100%',
        // alinhamento no eixo principal (horizontal, neste caso) 
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    botao: {
        width: 100
    },
    entrada: {
        width: 50,
        textAlign: 'center'
    },
    numeroSelecionadoCartao: {
        marginTop: 20,
        alignItems: 'center'
    }


});

export default TelaComecoDoJogo;
