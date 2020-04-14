import React from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import Cartao from '../components/Cartao'
import Cores from '../cores/cores'
import Entrada from '../components/Entrada'

const TelaComecoDoJogo = (props) => {
    return (
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
                    maxLenth={2}
                />

                <View style={estilos.buttonsView}>
                    <View style={estilos.botao}>
                        <Button
                            title="Reiniciar"
                            color={Cores.accent}
                        />
                    </View>
                    <View style={estilos.botao}>
                        <Button
                            title="Confirmar"
                            color={Cores.accent}
                        />
                    </View>
                </View>
            </Cartao>
        </View>
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
        marginVertical: 10,
    },
    entradaView: {
        //300 pontos de largura
        width: 300,
        //mas no máximo, 80% da tela
        maxWidth: '80%',
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
    }


});

export default TelaComecoDoJogo;
