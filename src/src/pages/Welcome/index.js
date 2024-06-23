import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';

import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native';

export default function Welcome() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
            

      <View style={styles.containerLogo}>
        <Animatable.Image
          animation="flipInY"
          source={require('../../assets/cruzred.png')}
          style={{ width: '100%' }}
          resizeMode="contain"
        />
        <Animatable.Text delay={600} animation="fadeInUpBig" style={styles.titulo}>CONTROL MEDIC</Animatable.Text>
      </View>

      <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.title}>Tenha o controle do uso de medicamentos em suas mãos.</Text>
        <Text style={styles.text}>Faça o login para começar</Text>

        <TouchableOpacity 
        style={styles.button}
          onPress={ () => navigation.navigate('SignIn')}
          >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </Animatable.View>

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF0000'
  },
  titulo:{
    fontSize: 40,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 80,
    marginBottom: 20,
  },
  containerLogo: {
    flex: 2,
    backgroundColor: '#FF0000',
    justifyContent: 'center',
    alignItems: 'center'
  },
     
  containerForm: {
    flex: 1,
    backgroundColor: '#D3D3D3',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%'
  },
  
  title: {
    fontSize: 23,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 12,
  },
  text: {
    color: '#a1a1a1',
    textAlign: 'center',
    marginTop: 28,
  },
  button: {
    position: 'absolute',
    backgroundColor: '#FF0000',
    borderRadius: 50,
    paddingVertical: 8,
    width: '60%',
    alignSelf: 'center',
    bottom: '15%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold'
  }




})