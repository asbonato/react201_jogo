import React from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';

const TelaComecoDoJogo = (props) => {
    return (
        <View style={estilos.tela}>
            <Text style={estilos.titulo}>Comece um jogo</Text>
            <View style={estilos.entradaView}>
                <Text>Escolha um número</Text>
                <TextInput />
                <View style={estilos.buttonsView}>
                    <Button
                        title="Reiniciar"
                    />
                    <Button
                        title="Confirmar" />
                </View>
            </View>
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
        //alinhamento no eixo perpendicular (horizontal, neste caso)
        alignItems: 'center'
    },
    buttonsView: {
        //o padrão é column
        flexDirection: 'row',
        width: '100%',
        // alinhamento no eixo principal (horizontal, neste caso) 
        justifyContent: 'space-between',
        paddingHorizontal: 15
    }
});


export default TelaComecoDoJogo;