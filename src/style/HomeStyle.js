import { StyleSheet } from "react-native";
import { withDecay } from "react-native-reanimated";

const style = StyleSheet.create({
    container:{
        flex:1,backgroundColor:'#ccc'
    },
    wraper:{
        width:'85%',backgroundColor:'#efefef',
        alignSelf:'center', height:80,
        marginVertical:10,borderLeftWidth:5,
        borderLeftColor:'red',justifyContent:'space-evenly'
    },
    itens:{
        flexDirection:'row',
        marginLeft:10
    },
    label:{
        fontWeight:'bold',
        marginRight:5
    },
    btnDelete:{
        position:'absolute', right:10,
    },
    btnAdd:{
        position:'absolute',
        width:60,height:60, borderRadius:30,
        backgroundColor:'#00ccff',
        bottom:10,right:10,
        alignItems:'center',justifyContent:'center'
    },
    iconAdd:{
        color:'white'
    },
    iconRemove:{
        color:'red',
        fontSize:35
    },
    modalWraper:{
        backgroundColor:'#fff',
        width:'90%',height:200,
        justifyContent:'space-evenly',
        alignItems:'center',
        borderRadius:5
    },
    modalContainer:{
        flex:1,alignItems:'center',justifyContent:'center'
    },
    inputs:{
        backgroundColor:'#efefef',
        width:'90%',
        borderRadius:10
    },
    btnAdicionar:{
        backgroundColor:'#00ccff',
        width:'40%',height:40,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:6
    },
    txtbtnAdicionar:{
        color:'#fff',
        fontWeight:'bold',
        fontSize:20
    }
})

export default style