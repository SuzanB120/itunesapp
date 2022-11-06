import React from "react";
import {View,Text ,TouchableOpacity,
 StyleSheet, Alert} from 'react-native';

const App = () => {

const doSomething = async() => {
  const api = 'https://itunes.apple.com/search?term=metalica';
  const response = await fetch(api, {
    method:'get'
  });

  const data = await response.json();
  console.log(data);
}

  return(
    <View style={myStyle.container}>
      <TouchableOpacity style={myStyle.btn} onPress={doSomething}>
        <Text style={myStyle.btntext}>Click me</Text>
      </TouchableOpacity>
    </View>
  )
}

const myStyle = StyleSheet.create({
  btn:{width:'50%', paddingVertical:14 ,
 alignItems:'center', backgroundColor:'#17B890', 
 borderRadius:14
 }, 
  btntext: { color:'#DEE5E5', fontsize:22, fontWeight:'700'},
  container: { flex:1, 
    alignItems:'center', 
    justifContent:'center', backgroundColor:'#C71585'}
});

export default App;