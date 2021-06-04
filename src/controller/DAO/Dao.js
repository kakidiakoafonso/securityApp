import firestore from '@react-native-firebase/firestore';
import {ToastAndroid} from 'react-native';

export default DAO = {
    addAluno: async function(nomeAluno,pc,horaEntrada,dataEntrada,setshowModal,setregistando,start)
    {
        await firestore().collection('lista').add({
            nome:nomeAluno,
            computador:pc,
            hora:horaEntrada,
            data:dataEntrada,
        }).then(
            acepted=>{
                ToastAndroid.showWithGravity(
                    "Aluno registrado",
                    ToastAndroid.SHORT,
                    ToastAndroid.CENTER
                  );
                  setshowModal(false)
                  setregistando(false)
                  start()
            },
            rejected=>{
                console.warn("Rejeitado");
            }
        )
    },
    getAlunos: async function(setlista){
        await firestore().collection("lista").get().then(
            onfullfiled=>{
                const lista = []
                onfullfiled.forEach(doc=>{
                    console.log(doc.id);
                    lista.push(doc.data())
                    
                },
                error=>{
                    console.log("Error");
                })
                setlista(lista)
            },
            onrejected=>{
                console.log("Nao ceite");
            }
        )
    }
    
}














