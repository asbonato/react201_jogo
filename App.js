import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Cabecalho from './components/Cabecalho';
import TelaComecoDoJogo from './telas/TelaComecoDoJogo';
import TelaJogo from './telas/TelaJogo';
import TelaFimDeJogo from './telas/TelaFimDeJogo';

export default function App() {
  const [numeroDigitado, setNumeroDigitado] = useState();
  const [rodadas, setRodadas] = useState(0);

  const iniciarNovoJogo = () => {
    setRodadas(0);
    setNumeroDigitado(null);
  }

  const jogoComecou = (numeroDigitado) => {
    setNumeroDigitado(numeroDigitado);
    setRodadas(0);
  }

  const atualizaRodadas = (numRodadas) => {
    setRodadas(numRodadas);
  }

  //por padrão exibimos TelaComecoDoJogo
  let conteudo = <TelaComecoDoJogo onJogoComecou={jogoComecou} />

  //dependendo do estado, alteramos para TelaJogo
  if (numeroDigitado && rodadas <= 0) {
    conteudo = <TelaJogo valorDigitado={numeroDigitado} onJogoAcabou={atualizaRodadas} />
    console.log('TelaJogo '+conteudo.toString());
  } else if (rodadas > 0) {
    conteudo = <TelaFimDeJogo rodadas={rodadas}
      numeroDigitado={numeroDigitado}
      onIniciarNovoJogo={iniciarNovoJogo} />
      console.log('TelaFimDeJogo '+conteudo.toString());
  } else {
    console.log('Entrou no else '+conteudo.toString());
  }

  return (
    <View style={estilos.tela}>
      <Cabecalho titulo={"Adivinhe o número"} />
      {conteudo}
    </View>
  );
}

const estilos = StyleSheet.create({
  tela: {
    flex: 1
  }
});


