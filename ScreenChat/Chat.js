import React from 'react'
import { View,Text,TouchableOpacity } from 'react-native'
import { useLayoutEffect,useEffect,useState,useCallback } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import { addDoc,collection,orderBy,query,onSnapshot } from 'firebase/firestore'
import { signOut } from 'firebase/auth'
import {database,auth} from '../config/firebase'
import { useNavigation } from '@react-navigation/native'
import { MaterialIcons } from '@expo/vector-icons';
 export default function Chat() {
  const [Messages,setMessages]=useState([])
  const navigation=useNavigation();
  const onSignout=()=>{
    signOut(auth).catch(error=>console.error(error))
  }


  useEffect(()=>{
navigation.setOptions({
headerRight:()=>{
  return(
  <TouchableOpacity onPress={signOut} style={{marginRight:10}}>
<MaterialIcons name="logout" size={24} color="#f57c00" style={{marginRight:10}} />
  </TouchableOpacity>)
}
})
  },[navigation])


  useLayoutEffect(()=>{
    const collectionRef=collection(database,'chats');
    const q=query(collectionRef,orderBy('createdAt','desc'))
const unsubscribe=onSnapshot(q,snapshot=>{
  console.log('Snapshot');
  setMessages(
    snapshot.docs.map(doc=>
      ({
        _id:doc.id,
        createdAt:doc.data().createdAt,
        text:doc.data().text,
        user:doc.data().user 
      }))
  )
})
return ()=> unsubscribe()
  },[])

  const onSend=useCallback((messages=[])=>{
    setMessages(previousMessages=>GiftedChat.append(previousMessages,messages))
    const {_id,createdAt,text,user}=messages[0]
    addDoc(collection(database,'chats'),{
      _id,
      createdAt,
      text,
      user
    })
  })
  return (
   
  <GiftedChat
  messages={Messages}
  onSend={messages=>onSend(messages)}
  user={{
    _id:auth?.currentUser?.email, 
    avatar:'https://i.pravatar.cc/300'
  }}
  messageContainerRef={{
    backgroundColor:'#fff'
  }}
  />
 
  
  )
}

