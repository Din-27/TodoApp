import React, { useEffect, useState } from 'react'
import { SafeAreaView, Text, TextInput, StyleSheet, View, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 
import axios from 'axios';
import { Button } from 'native-base';


const Data = ({name, nomor, onDelete, onPress}) =>{
  return(
        <View style={styles.container}>
            <View style={styles.indexContainer}>
                <Text style={styles.index}>{nomor}</Text>
            </View>
            <View style={styles.taskContainer}>
                <Text style={styles.task}>{name}</Text>
                <TouchableOpacity onPress={onPress}>
                    <MaterialIcons style={styles.delete} name="edit" size={18} color='#fff' />
                </TouchableOpacity>
                <TouchableOpacity onPress={onDelete}>
                    <MaterialIcons style={styles.delete} name="delete" size={18} color='#fff' />
                </TouchableOpacity>
            </View>
        </View>
  )
}

export default function TodoApp() {
  const [name, setName] = useState("");
  const [nomor, setNomor] = useState("")
  const [todo, setTodo] = useState([])
  const [selectTodo, setSelectTodo] = useState({})
  const [button, setButton] = useState("submit")
  
  useEffect(()=>{
    getData()
  }, [])

  const handleSubmit = () => {
    const data = {
      index: nomor,
      name: name,
    }
    if(button === 'submit'){
      axios.post('http://192.168.100.71:5000/api/v1/todo', data)
    .then(res => {
      setNomor("")
      setName("")
      getData()
      // console.log('res', res);
    })
    }else if(button === 'edit'){
      axios.patch(`http://192.168.100.71:5000/api/v1/todo/${selectTodo.id}`, data)
      .then(res=>{
        setNomor("")
        setName("")
        setButton('edit')
        getData()
      })
    }
  }

  const getData = () =>{
    axios.get('http://192.168.100.71:5000/api/v1/todos')
    .then(res=>{
      // console.log('res', res.data.data);
      setTodo(res.data.data)
    })
  }

  const editData = (data) =>{
    console.log(data);
    setSelectTodo(data)
    setNomor(data.index)
    setName(data.name)
    setButton('edit')
    getData()
    // axios.patch(`http://192.168.100.71:5000/api/v1/todo/${data.id}`)
    // .then(res=>{
    //   getData()
    // })
  }
  const deleteData = (data) =>{
    axios.delete(`http://192.168.100.71:5000/api/v1/todo/${data.id}`)
    .then(res=>{
      getData()
    })
  }


  return (
    <SafeAreaView style={styles.containerMain}>
        {todo.map((item)=>{
          return <Data 
          key={item.id} 
          nomor={item.index} 
          name={item.name}
          onDelete={()=>deleteData(item)}
          onPress={()=>editData(item)}/>
        })}
        <View style={styles.containerInput}>
            <TextInput style={{width: 40, color: '#ffff', margin: '10px'}} value={nomor} placeholder='No' onChangeText={(value) => setNomor(value)}/>  
            <TextInput style={{width: '250px', color: '#ffff', margin: '10px'}} value={name} placeholder='whats Today?' onChangeText={(value) => setName(value)}/>
            <Button style={{borderRadius: 10}} onPress={handleSubmit}>
                {button}
            </Button>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    backgroundColor: '#FF7878',
  },
  container: {
      flexDirection: 'row',
      marginHorizontal: 20,
      marginTop: 20
  },
  indexContainer: {
      backgroundColor: '#BFFFF0',
      borderRadius: 12,
      marginRight: 10,
      alignItems: 'center',
      justifyContent: 'center',
      width: 50,
      height: 50,
  },
  index: {
      color: '#FF7878',
      fontSize: 20,
  },
  taskContainer: {
      backgroundColor: '#BFFFF0',
      borderRadius: 12,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      flex: 1,
      paddingHorizontal: 10,
      paddingVertical: 5,
      minHeight: 50,
  },
  task: {
      color: '#FF7878',
      width: '90%',
      fontSize: 16,
  },
  delete: {
      marginLeft: 10,
      color: '#FF7878'
  },
  inputField: {
    color: '#fff',
    height: 50,
    margin: 10,
    flex:1
  },
  inputIndex: {
    color: '#fff',
    height: 50,
    margin: 10,
    flex:0
  },
  button: {
      height: 30,
      width: 30,
      borderRadius: 5,
      backgroundColor: '#fff',
      alignItems: 'center',
  },
  containerInput: {
    width: '90%',
    borderColor: '#fff',
    borderWidth: 1,
    marginHorizontal: 20,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    position: 'absolute',
    bottom: 20,
},
});
