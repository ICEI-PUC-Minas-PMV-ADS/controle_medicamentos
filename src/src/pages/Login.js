import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Cadastrauser from './Cadastrauser';

const Stack = createStackNavigator();

function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/cruzred1.png')} style={styles.logo} />
      <Text style={styles.title}>CONTROLE DE MEDICAMENTOS</Text>

      <TextInput style={styles.input}
      placeholder="Digite seu email" />

      <TextInput style={styles.input} 
      secureTextEntry={true}
      placeholder="Digite sua senha" />

      <TouchableOpacity
        style={styles.botao}
        onPress={ () => {this.clicou()} }
        >
        
        <Text style={styles.botaoText}>Login</Text>
      </TouchableOpacity>

        
      <Text style={styles.link} onPress={() => {}}>Esqueceu a senha?</Text>
      <Text style={styles.link} onPress={() => navigation.navigate('Cadastrauser')}>Ainda não tem conta? Criar uma conta</Text>
      
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Cadastrauser" component={Cadastrauser} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    marginBottom: 50,
    //position: 'absolute',
  },

  

  title: {
    fontStyle: 'Montserrat',
    marginBottom: 200,
    color: '#cccccc',
    fontSize: 33,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  input: {
    marginTop: 10,
    padding: 15,
    width: 300,
    backgroundColor: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    borderRadius: 20,
  },

  botao: {
    width: 300,
    height: 42,
    backgroundColor: '#c4342B',
    marginTop: 10,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center', 
  },

  botaoText:{
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',



  }
});
