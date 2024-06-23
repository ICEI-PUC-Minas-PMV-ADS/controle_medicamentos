import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import * as Animatable from 'react-native-animatable';
import database from "../../config/firebaseconfig";



export default function NewMedicine( { navigation }) {
  const [description, setDescription] = useState(null);
  const [horario, setHorario] = useState(null);
  const [estoque, setEstoque] = useState(null);


  function addMedicine(){
    database.collection("Medicines").add({
      description: description,
      status: false,
      horario: horario,
      estoque: estoque,

    })
    navigation.navigate("Medicine")
  }
  return(
    <View style={styles.container}>
      <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
        <Text style={styles.message}>Adicione um medicamento</Text>
      </Animatable.View>
      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
      <Text style={styles.label}>Nome</Text>
      <TextInput
      style={styles.inputText}
      placeholder="Ex: Paracetamol"
      onChangeText={setDescription}
      value={description}
      />
      <Text style={styles.label}>Horario de ingestão</Text>
      <TextInput
      style={styles.inputText}
      keyboardType='numeric'
      placeholder="Ex: 24/05/2024 12:00"
      onChangeText={setHorario}
      value={horario}
      />
      <Text style={styles.label}>Quantidade em estoque</Text>
       <TextInput
      style={styles.inputText}
      keyboardType='numeric'
      placeholder="6"
      onChangeText={setEstoque}
      value={estoque}
      />

      <TouchableOpacity
      style={styles.buttonNewMedicine} 
      onPress={()=>{
        addMedicine()
      }}
      >
      <Text style={styles.iconButton}>Salvar</Text>

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
  containerHeader: {
    marginTop: '10%',
    marginBottom: '8%',
    paddingStart: '0%',
  },
  message: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center'
  },
  containerForm: {
    backgroundColor: '#D3D3D3',
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%'
  },
  title: {
    fontSize: 20,
    marginTop: 28,
  },
  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#FF0000',
    width: '100%',
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold'
  },

  buttonRegister: {
    marginTop: 14,
    alignSelf: 'center'
  },
  registerText: {
    color: '#a1a1a1'
    },
    label: {
      width: '90%',
      marginTop: 20,
      marginLeft: 'auto',
      marginRight:'auto',
      fontSize: 20,
      color: '#000000'
    },
      inputText: {
        width: '90%',
        marginTop: 10,
        padding: 10,
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: '#a1a1a1',
        marginLeft: 'auto',
        marginRight:'auto',
        fontSize: 15,
        color: '#000000'
        
      },
      buttonNewMedicine: {
        width: 60,
        height: 60,
        position: "absolute",
        bottom: 30,
        backgroundColor: "#FF0000",
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: 'center',
      },
    
      iconButton: {
        color: "#D3D3D3",
        fontSize:16,
        fontWeight:"bold",

      },
  
})

