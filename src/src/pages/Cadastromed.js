import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

export default function Cadastrormed() {
  return (
    <View style={styles.container}>
      
      <Text style={styles.title}> Cadastro de medicamentos</Text>

      <TextInput style={styles.input}
      placeholder="Nome do medicamento" />

      <TextInput style={styles.input} 
      placeholder="Período de utilização" />

      <TextInput style={styles.input} 
      placeholder="Horário de ingestão" />


      <TouchableOpacity
        style={styles.botao}
        onPress={ () => {this.clicou()} }
        >
        
        <Text style={styles.botaoText}>Cadastrar</Text>
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

  title: {
    fontStyle: 'Montserrat',
    marginBottom: 10,
    color: '#cccccc',
    fontSize: 33,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  input: {
    marginTop: 10,
    padding: 10,
    width: 300,
    backgroundColor: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    borderRadius: 3,
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

