import React from 'react';
import { View, StyleSheet } from 'react-native';

const Cartao = (props) => {
    return (
        <View style={{ ...estilos.cartao, ...props.estilos }}>
            {props.children}
        </View>
    );
};

const estilos = StyleSheet.create({
    cartao: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        backgroundColor: 'white',
        elevation: 4,
        padding: 20,
        borderRadius: 10
    }
});


export default Cartao;
