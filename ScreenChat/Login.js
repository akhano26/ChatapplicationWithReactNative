import React,{useState} from 'react'
import { StyleSheet,Text,View,Button,TextInput,Image,TouchableOpacity,SafeAreaView, Alert } from 'react-native'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../config/firebase'
import pic from '../assets/peakpx.jpg'


export default function Login({navigation}){

  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const onHandleLogin=()=>{
    if(email !=="" &&password!=""){
      signInWithEmailAndPassword(auth,email,password)
      .then(()=>console.log("Login Success"))
      .catch((error)=>Alert.alert("Login Error",error.message))
    }
  }

  return(
<View style={styles.container}>
 <Image source={pic} style={styles.backImage}/>
  <View  style={styles.whitesheet} >
 <SafeAreaView style={styles.form}>
<Text style={styles.title}>Login</Text>
<TextInput
style={styles.input}
placeholder='Enter Email'
autoCapitalize='none'
keyboardType='email-address'
textContentType='emailAddress'
autoFocus={true}
value={email}
onChange={(text)=>setEmail(text)}
/>
<TextInput
style={styles.input}
placeholder='Enter Password'
autoCapitalize='none'
keyboardType='email-address'
textContentType='password'
autoFocus={true}
autoCorrect={false}
secureTextEntry={true}
value={password}
onChange={(text)=>setPassword(text)}
/>
<TouchableOpacity onPress={onHandleLogin} style={styles.button}>
  <Text style={{fontWeight:'bold',color:'#fff',fontSize:18}}>Login</Text>
</TouchableOpacity>
<View style={{marginTop:20,flexDirection:'row',alignItems:'center',alignSelf:'center'}}>
  <Text style={{color:'gray', fontWeight:600,fontSize:18}}>Don't have account? </Text>
  <TouchableOpacity>
    <Text style={{color:'#f57c00',fontWeight:'600',fontSize:18}} onPress={()=>navigation.navigate('Signup')}>Sign Up</Text>
  </TouchableOpacity>
</View>
</SafeAreaView>   
  </View>
</View>
  )



}
const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff'
  },
  title:{
    fontSize:36,
    fontWeight:'bold',
    color:'orange',
    alignSelf:'center',
    paddingBottom:24
  },
  input:{
    backgroundColor:'#F6F7FB',
    height:58,
    marginBottom:20,
    fontSize:16,
    borderRadius:10,
    padding:12,
  },
  backImage:{
    width:'100%',
    height:340,
    position:'absolute',
    top:0,
    resizeMode:'cover'
  },
  whitesheet:{
    width:'100%',
    height:'75%',
    position:'absolute',
    bottom:0,
   backgroundColor:'#fff',
    borderTopLeftRadius:60
  },
  form:{
    flex:1,
    justifyContent:'center',
    marginHorizontal:30
  },
  button:{
    borderRadius:10,
    height:58,
    justifyContent:'center',
    alignItems:'center',
    marginTop:40,
    backgroundColor:'#f57c00'
  }
})