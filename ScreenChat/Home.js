import React, { useEffect } from 'react'
import { View,StyleSheet, TouchableOpacity ,Image} from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import pic from '../assets/car.jpg'
function Home() {

  const navigation=useNavigation()
  useEffect(()=>{
navigation.setOptions({
  headerLeft:()=><Feather name="search" size={24} color="gray" style={{marginLeft:25}} />,
  headerRight:()=><Image source={pic}  style={{width:40,height:40,marginRight:15, borderRadius:20}}/>
})
  },[navigation])
  return (
   <View style={styles.container}>
  <TouchableOpacity onPress={() => navigation.navigate('Chat')} style={styles.chatButtom}>
  <Entypo name="chat" size={24} color="#FAFAFA" />
  </TouchableOpacity>
   </View>
  )
}

export default Home

const styles=StyleSheet.create({
container:{
  flex:1,
  justifyContent:'flex-end',
  alignItems:'flex-end',
  backgroundColor:'#fff'
},
chatButtom:{
  backgroundColor:'#f57c00',
  height:50,
  width:50,
  borderRadius:25,
  alignItems:'center',
  justifyContent:'center',
  shadowColor:'#c5c5c7',
  shadowOffset:{
    width:0,
    height:2
  },
  shadowOpacity:.9,
  shadowRadius:8,
  marginRight:20,
  marginBottom:50
}
})