import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Modal, TextInput, Pressable, Avatar, TouchableWithoutFeedback  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Button, Card} from 'react-native-elements'
import Navheader from "../component/Navheader"

const dataChallenge = [
  {
    name: "Et de 15 !",
    picto: require("../assets/Badge/15km.jpg"),
  },
  {
    name: "30 de plus !",
    picto: require("../assets/Badge/30km.jpg"),
  },
  {
    name: " être connecté",
    picto: require("../assets/Badge/Connect.jpg"),
  },
  {
    name: " Contre la montre",
    picto: require("../assets/Badge/Time.jpg"),
  },
]

const dataTrophee = [
  {
    name: "Et de 15 !",
    picto: require("../assets/Badge/15km.jpg"),
  },
  {
    name: "30 de plus !",
    picto: require("../assets/Badge/30km.jpg"),
  },
  {
    name: " être connecté",
    picto: require("../assets/Badge/Connect.jpg"),
  },
  {
    name: " Contre la montre",
    picto: require("../assets/Badge/Time.jpg"),
  },
]

export default function Ranking(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20} ;
  return (
    
<View style={styles.container}>
         
  <Navheader attribut = {props.navigation.navigate}/>

  <View>

  <Card containerStyle={styles.card}>
    <Card.Title>Mes challenges</Card.Title>
    <Card.Divider style={styles.divider}/>
    <ScrollView horizontal={true}>
    <View  style={{ flexDirection: "row"}}>
      {
        dataChallenge.map((u, i) => {
          return (

            <View key={i}>

              <View style={{ alignItems: "center", marginRight: 10, marginBottom: 20}}>

                <Image style={styles.image} source={u.picto}/>
                <Text>{u.name}</Text>
              
              </View>
              
            </View>
          );
        })
      }
    </View>
    </ScrollView>
  </Card>

  <Modal visible={modalVisible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
    <View style={styles.centeredView}>
    <View style={styles.modalView}>
      <Text>Nom du challenge</Text>
        <TextInput
            style={{
              height: 40,
              width: 200,
              borderWidth: 1,
              marginBottom: 10,
              marginTop: 10
            }}
            defaultValue=""
        />
        <Text>Inviter des amis</Text>
        <TextInput
            style={{
              height: 40,
              width: 200,
              borderWidth: 1,
              marginBottom: 10,
              marginTop: 10
            }}
            defaultValue=""
        />

      <Button
        title="Créer un challenge"
        buttonStyle={styles.button}
        onPress={() => Alert.alert('Simple Button pressed')}
      />                            
      <Pressable
        style={styles.buttonRetour}
        onPress={() => setModalVisible(!modalVisible)}
        >
        <Text style={styles.textStyleRetour}>Retour</Text>
        </Pressable>
    </View>
    </View>
</Modal>

<Pressable 
  style={[styles.button, styles.buttonOpen]}
  onPress={() => setModalVisible(true)}>
  <Text style={styles.textStyle}>Créer un challenge !</Text>
</Pressable>

  <Card containerStyle={styles.card}>
    <Card.Title>Mes trophées</Card.Title>
    <Card.Divider style={styles.divider}/>
    <ScrollView horizontal={true}>
    <View  style={{ flexDirection: "row"}}>
      {
        dataTrophee.map((u, i) => {
          return (

            <View key={i}>

              <View style={{ alignItems: "center", marginRight: 10, marginBottom: 20}}>

                <Image style={styles.image} source={u.picto}/>
                <Text>{u.name}</Text>
              
              </View>
              
            </View>
          );
        })
      }
    </View>
    </ScrollView>
  </Card>

  </View>
</View>

  )}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  divider: {
    borderWidth: 1, 
    borderColor:"#ED590C"
  },
  button: {
    borderRadius: 10, 
    marginTop: "auto", 
    marginBottom: "auto", 
    marginLeft:"auto" , 
    marginRight:"auto" , 
    backgroundColor: "#ED590C", 
    width:"auto" 
  },
  buttonRetour: {
    borderRadius: 10, 
    marginTop: 30,  
    backgroundColor: "#ED590C", 
    width:"auto" 
  },
  
  card: {
    display: "flex",
    borderRadius: 10,
    marginTop: 30,
    marginBottom: 30,
    borderBottomWidth: 2,
    borderRightWidth: 2,
    borderTopColor:"#ffffff",
    borderLeftColor:"#ffffff"
  },
  image: {
    width: 100, 
    height: 100, 
    marginBottom: 5
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    margin:10

  },

  textStyleRetour: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize:10,
    margin:10

  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },

})