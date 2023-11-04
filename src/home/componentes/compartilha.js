import { useState } from "react";
import {  View,StyleSheet,Text,Modal,TouchableOpacity} from "react-native";
import { BlurView, } from 'expo-blur';
import Share from 'react-native-share';



export default function Compartilhar({QR}){
    const[modal,setModal]=useState(false)
 console.log(QR.url)
    const valid=()=>{
        if(!QR){
         setModal(true)
        }else{
            compartilhaQR() 
        }
       
    }
    const compartilhaQR=async()=>{
        Share.open({
            title:'meu QR',
            url:QR.url,
            messahe:'compartilhe Qr',

        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          err && console.log(err);
        });
       
    }


    return(
        <View style={style.body}>
            <Modal
            animationType="fade"
            visible={modal}
            transparent={true}>
                <TouchableOpacity
                style={{flex:1}}
                onPress={()=>{setModal(false)}}>
                    <BlurView 
                    
                    intensity={15}
                     style={{flex:1,justifyContent:"center"}}>
                        <View style={style.modal}>
                            <Text style={style.Text}> nao a QRCode para compartilhar</Text>
                          
                        </View>
                    </BlurView>
                </TouchableOpacity>
                

            </Modal>
     
            <View 
            style={style.botao}>
                <TouchableOpacity  
                 onPress={()=>{valid()}}
                style={style.compartilhar}>
                    <Text style={style.Text} >compartilha</Text>
                </TouchableOpacity >
            </View>
        </View>
    )
}
const style=StyleSheet.create({
    body:{
        
        alignItems:'center',
        marginTop:20,
        paddingBottom:70,
        elevation:20
    },
    botao:{
        width:'80%',
        height:60,
        backgroundColor:'#fff',
        borderRadius:10,
        borderWidth:1,
        padding:5,
        
    },
    compartilhar:{
        backgroundColor:'#D9D9D9',
        flex:1,
        borderRadius:5,
        justifyContent:"center",
        alignItems:"center",
        elevation:20,
        zIndex:11
        
    },
    Text:{
        fontSize:25,
        fontWeight:'700',
        textAlign:"center"

    },
    modal:{
        backgroundColor:'#FFF',
        height:150,width:'80%',
        alignSelf:"center",
        borderWidth:1,
        borderRadius:10,
        alignItems:"center",
        justifyContent:"center"
    },
})