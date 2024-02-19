import React, { createContext, useContext, useEffect, useState } from 'react'
import { View,Text, Platform, ActivityIndicator } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { onAuthStateChanged } from 'firebase/auth';
import Chat from './ScreenChat/Chat';
import Login from './ScreenChat/Login';
import Signup from './ScreenChat/Signup';
import Home from './ScreenChat/Home';
import { auth } from './config/firebase';



const Stack=createStackNavigator()
const AuthenticatedUseContext=createContext({});

const AuthStack=()=>{
  return(
  <Stack.Navigator  screenOptions={{
    headerShown:false,
 }}>
    {/* <Stack.Screen name='Home' component={Home} /> */}
   <Stack.Screen name='Signup' component={Signup} />
   <Stack.Screen name='Login' component={Login} />
 </Stack.Navigator>)
}
const ChatStack=()=>{
  return(
  <Stack.Navigator  screenOptions={{
    headerStyle: {
      backgroundColor: '#ffffff',
       // Change header background color
    },
    headerTitleAlign: 'center',
    cardStyle: { 
      paddingBottom: Platform.OS=='android'?10:0
      
     }
 }}>
    <Stack.Screen name='Home' component={Home} />
    <Stack.Screen name='Chat' component={Chat}/>
 </Stack.Navigator>)
}



const AuthenticatedUserProvider=({children})=>{

  const [user,setuser]=useState(null)
  return(
  <AuthenticatedUseContext.Provider value={{user,setuser}}>
    {children}
  </AuthenticatedUseContext.Provider>)
}

function MyApp(){
  const {user,setuser}=useContext(AuthenticatedUseContext);
  // const [user,setuser]=useState(null)
  const [loading,setloading]=useState(false)

  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,
      async authenticatedUser=>{
        authenticatedUser?setuser(authenticatedUser):setuser(null)
        setloading(false)
      })
      return()=>unsubscribe()
  },[user])

  if(loading){
    return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator size={'large'} />
      </View>
    )
  }
  return (
   <NavigationContainer>
   {user?<AuthStack/>:<ChatStack/>}
 
   </NavigationContainer>
  )
}


export default function App() {
  return(
    <AuthenticatedUserProvider>
    <MyApp/>
    </AuthenticatedUserProvider>
  )
}
