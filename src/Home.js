import React,{useEffect,useState} from 'react'
import { View,Modal, Text, TouchableOpacity, ScrollView, TextInput,ActivityIndicator } from 'react-native'
import style from "./style/HomeStyle";
import {Icon} from "native-base";
import Dao from './controller/DAO/Dao';


export default function Home() 
{
    const [lista, setlista] = useState([])
    const [nome, setnome] = useState('')
    const [computador, setcomputador] = useState('')
    const [showModal, setshowModal] = useState(false)
    const [registando, setregistando] = useState(false)
    const start = ()=> {
        Dao.getAlunos(setlista)
    }
    useEffect(()=>start(),[])
    const data =  new Date
    const hora = data.getHours()+"h"+data.getMinutes()
    const dataActual = data.getDate()+'/'+data.getMonth()+"/"+data.getFullYear()
    const Registrar =()=> 
    {
        Dao.addAluno(nome,computador,hora,dataActual,setshowModal,setregistando,start)
        setregistando(true)
    }

    return (
        <View style={style.container}>
            <ScrollView>
           {
               lista.map((data,key)=>(
                <View key={key} style={style.wraper}>
                <View style={style.itens}>
                    <Text style={style.label}>Nome:</Text>
                    <Text>{data.nome}</Text>
                </View>
                <View style={style.itens}>
                    <Text style={style.label}>Computador:</Text>
                    <Text>{data.computador}</Text>
                </View>
                <View style={style.itens}>
                    <Text style={style.label}>Hora de entrada:</Text>
                    <Text>{data.hora}</Text>
                </View>
                <TouchableOpacity 
                     style={style.btnDelete}>
                     <Icon name='trash' type='EvilIcons' style={style.iconRemove}/>
                </TouchableOpacity>
            </View>
               ))
           }
           </ScrollView>
           <TouchableOpacity onPress={()=>setshowModal(!showModal)}
            activeOpacity={0.6} style={style.btnAdd}>
               <Icon type='AntDesign' name='plus' style={style.iconAdd}/>
           </TouchableOpacity>

           <Modal animationType='slide' onRequestClose={()=>setshowModal(false)}
            visible={showModal} transparent>
                    <View style={style.modalContainer}>
                        <View style={style.modalWraper}>
                            <TextInput placeholder='Nome do aluno' style={style.inputs} onChangeText={(e)=> setnome(e)}/>
                            <TextInput placeholder='Computador' style={style.inputs} onChangeText={(e)=> setcomputador(e)}/>
                            <TouchableOpacity onPress={()=>Registrar()}
                                style={style.btnAdicionar}>
                               {
                                   registando?  <ActivityIndicator size="small" color="#00ff00" />:<Text style={style.txtbtnAdicionar}>Registrar</Text>
                               }
                            </TouchableOpacity>
                        </View>    
                    </View>
           </Modal>
        </View>
    )
}
