import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

export default function Cadastrauser() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/cruzred1.png')} style={styles.logo} />
      <Text style={styles.title}>CONTROLE DE MEDICAMENTOS</Text>

   
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
