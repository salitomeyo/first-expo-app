import React, { useState } from 'react'
import { Image, StyleSheet, TouchableOpacity, Button} from 'react-native';
import { Text, View } from '../components/Themed';

export default function TabTwoScreen() {
  const [count, setCount] = useState(0)

  return (
    <View style={styles.container}>
      <Text>Veamos una pantalla de prueba</Text>
      <Image source={{ uri: 'https://i.imgur.com/TkIrScD.png' }} style={styles.logo} />
      <TouchableOpacity
        onPress={() => alert('Este boton envia una alerta!')}
        style={styles.button}>
        <Text style={{ fontSize: 20, color: '#fff' }}>Enviar una alerta</Text>
      </TouchableOpacity>
      <Button
        title={'Presioname!'}
        onPress={() => {
          setCount(count + 1)
        }}
      />
      <Text>{`${count} clicks!`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  logo: {
    width: 305,
    height: 159,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'orange',
    padding: 10,
    margin: 10,
  }
});
