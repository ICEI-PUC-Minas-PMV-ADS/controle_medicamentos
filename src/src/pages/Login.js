import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

export default function Login() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/cruzred1.png')} style={styles.logo} />
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
      
    </View>
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
