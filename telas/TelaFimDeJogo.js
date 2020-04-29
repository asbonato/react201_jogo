import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const TelaFimDeJogo = (props) => {
    return (
        <View style={estilos.tela}>
            <Text>O jogo acabou.</Text>
            <Text>Número de tentativas: {props.rodadas}</Text>
            <Text>O número era: {props.numeroDigitado}</Text>
            <Button
                title="Novo Jogo"
                onPress={props.onIniciarNovoJogo}
                />
        </View>
    );
}

const estilos = StyleSheet.create({
    tela: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default TelaFimDeJogo;
