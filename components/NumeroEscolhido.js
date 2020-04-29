import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import cores from '../cores/cores';

// import { Container } from './styles';

const NumeroEscolhido = (props) => {
  return (
    <View stye={estilos.caixaNumeroEscolhido}>
        <Text style={estilos.numereroEscolhido}>{props.children}</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
    caixaNumeroEscolhido: {
        borderBottomColor: cores.accent,
        borderBottomWidth: 2,
        borderRadius: 10,
        marginVertical: 10,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    numereroEscolhido: {
        color: cores.accent,
        fontSize: 22
    }
});

export default NumeroEscolhido;