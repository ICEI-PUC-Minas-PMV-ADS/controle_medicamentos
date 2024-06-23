import { initializeApp } from "firebase/app";
import React, { useState, useEffect } from "react";
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import * as Animatable from "react-native-animatable";
import database from "../../config/firebaseconfig";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons/faTrashCan';

export default function Medicine({ navigation }) {
const [medicine, setMedicine] = useState([]);

  function deleteMedicine(id) {
    database.collection("Medicines").doc(id).delete();
  }

  useEffect(() => {
    database.collection("Medicines").onSnapshot((query) => {
      const list = [];
      query.forEach((doc) => {
        list.push({ ...doc.data(), id: doc.id });
      });
      setMedicine(list);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Animatable.View
        animation="fadeInLeft"
        delay={500}
        style={styles.containerHeader}
      >
        <Text style={styles.message}>Medicamentos</Text>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        <FlatList
        showVerticalScrollIndicator={false}
        data={medicine}
        renderItem=
        {({ item }) => {
          return (
            <View style={styles.Medicines}>
              <Text
               style={styles.DescriptionMedicine}
               onPress={() => {navigation.navigate("Details",{ id: item.id, description: item.description })}}
                >
                {item.description}
              </Text>
              <TouchableOpacity
                style={styles.deleteMedicine}
                onPress={() => {
                  deleteMedicine(item.id);
                }}
              >
                 <FontAwesomeIcon
                  icon={faTrashCan} 
                  size={23}
                  color="#FF0000"
                  />
              </TouchableOpacity>
              
            </View>
          )
        }}
        />
        <TouchableOpacity
          style={styles.buttonNewMedicine}
          onPress={() => navigation.navigate("NewMedicine")}
        >
          <Text style={styles.iconButton}>+</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  )
}






const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FF0000",
  },
  containerHeader: {
    marginTop: "14%",
    marginBottom: "8%",
    paddingStart: "5%",
  },
  message: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#000000",
  },
  containerForm: {
    backgroundColor: "#D3D3D3",
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: "5%",
    paddingEnd: "5%",
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
    backgroundColor: "#FF0000",
    width: "100%",
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonNewMedicine: {
    width: 60,
    height: 60,
    position: "absolute",
    bottom: 30,
    alignSelf: 'center',
    backgroundColor: "#FF0000",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },

  iconButton: {
    color: "#D3D3D3",
    fontSize: 30,
    fontWeight: "bold",
  },
  Medicines: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 25,
  },

  deleteMedicine: {
    justifyContent: "center",
    paddingRight: 15,
  },

  DescriptionMedicine: {
    fontSize: 20,
    width: "75%",
    alignContent: "flex-start",
    backgroundColor: "#D3D3D3",
    padding: 12,
    paddingHorizontal: 20,
    borderRadius: 50,
    marginBottom: 5,
    marginRight: 15,
    color: "#000000",
  },
});
