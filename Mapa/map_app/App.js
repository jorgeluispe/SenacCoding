import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import Screen2 from './Screen2';
import Screen1 from './Screen1';

//Esse é um menu com o acesso uma especie de "menu" onde o usuario escolhe o que vai fazer
const MenuScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title="Ir para Tela Constulta filme"
        onPress={() => navigation.navigate(Screen1)}
      />
      <Button
        title="Ir para Tela Mapa"
        onPress={() => navigation.navigate(Screen2)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MenuScreen;



