import { View,StyleSheet,Text,TextInput,TouchableOpacity,Image,ScrollView} from "react-native";
import { StatusBar } from 'expo-status-bar';
import { AntDesign } from '@expo/vector-icons'; 
import { useState } from "react";
import Compartilhar from "./componentes/compartilha";

export default function Home(){
    const[qr,setqr]=useState('')
    const[value,setValue]=useState('')
    const[scre,setScre]=useState('')
    const[img,setImg]=useState(
         <Image
        source={require('../componentes/img/a.png')}
        style={{height:230,width:230,marginTop:110,alignSelf:"center"}}/>
        )
    const api = 'https://chart.googleapis.com/chart?cht=qr&chs=500x500&chl='+scre
    const requireApi=async()=>{
        const data = await fetch(api)
        if(data){
            setqr(data)
            setImg(
                <Image
                source={{uri:data.url}}
                style={{height:280,width:280,alignSelf:"center",
            borderRadius:10}}/>
    
            )

        }else{
            setErro()

        }


    }
    const setLink=()=>{
        setScre(value)
        setValue('')
        requireApi()
    }
    const setErro=()=>{
        setImg(
            <Text style={{fontSize:25,fontWeight:"800",alignSelf:"center",marginTop:'40%',color:'#272727b0'}}>erro Tente novamente</Text>
        )
        setTimeout(()=>{
            setImg(
            <Image
                source={require('../componentes/img/a.png')}
                style={{height:230,width:230,marginTop:110,alignSelf:"center"}}/>
        )},3000)

    }
    return(
        <View style={style.home}>
            <StatusBar
            style="light"/>

            <View style={style.header}></View>
            <View style={style.fouter}></View>

            <ScrollView style={style.conteudo}>
                {/*  header */}
                <View>
                    <View style={style.containeTitulo}>
                        <Text style={style.Titulo}>Meu QR Code</Text>
                    </View>
                    <View style={{width:"100%",marginTop:70}}>
                        <View style={style.conteineImput}>
                            <View style={{bottom:60,}}>
                                <Image
                                        source={require('../componentes/img/minhoca.png')}
                                        style={{width:100,height:100,zIndex:1,alignSelf:"center",marginBottom:10}}/>
                                    <View   style={style.blocoImputs}>
                                        <TextInput
                                            value={value}
                                            onChangeText={(n)=>{setValue(n)}}
                                            placeholder="link / mensagem"
                                            style={style.Imput}/>
                                    <TouchableOpacity 
                                    onPress={()=>{
                                        setLink()
                                        console.log('aaaa')
                                    }}
                                    style={style.ImputButtom}>
                                        <AntDesign name="search1" size={30} color="black" />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                {/*conteudo QR code*/}
                <View style={style.conteudoQR}>   
                   {img}
                </View>
                <Compartilhar QR={qr}/>
            </ScrollView>
            
          
        </View>
    )
}
const style= StyleSheet.create({
 home:{
    flex:1,
    justifyContent:"space-between",
    position:"relative"
 },
 header:{
    backgroundColor:'#121010',
    height:200,
    width:'100%',
    borderBottomRightRadius:50,
    borderBottomLeftRadius:50,
    paddingTop:50,
    elevation:10,
    position:'absolute'
 },
 containeTitulo:{
    width:'100%',
    alignItems:"center"
 },
 Titulo:{
    color:"#ffffff",
    fontSize:27,
    fontWeight:'500'
  
 },
 conteineImput:{
    width:'95%',
    height:100,
    backgroundColor:'#FFF',
    borderWidth:1.5,
    elevation:10,
    borderRadius:16,
    alignSelf:'center',
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
	width: 0,
	height: 5
},
    shadowRadius: 4,
    shadowOpacity: 1,
   
   
    
    
    

 },
 ImputButtom:{
    width:70,
    height:70,
    backgroundColor:'#D9D9D9',
    borderRadius:10,
    alignItems:'center',
    justifyContent:"center"
 },
 Imput:{
    backgroundColor:'#D9D9D9',
    width:230,
    height:70,
    borderRadius:10,
    fontSize:20,
    color:'#000',
    paddingLeft:10,
    overflow:"hidden",
    

 },
 blocoImputs:{
    flexDirection:'row',
    alignItems:"center",
    flex:1,
    paddingHorizontal:10,
    justifyContent:'space-between'
    
 },

 fouter:{
    
    backgroundColor:'#121010',
    height:200,
    width:'100%',
    borderTopRightRadius:50,
    borderTopLeftRadius:50,
    position:"absolute",
    top:'80%'
 },
 conteudo:{
    elevation:20,
    paddingTop:50,
    paddingBottom:50
    
    
 },
 conteudoQR:{
    borderWidth:2,
    height:300,width:300,
    backgroundColor:'#fff',
    borderRadius:16,
    marginTop:50,
    alignSelf:'center',
    elevation:10,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
	width: 0,
	height: 5,
    marginBottom:10,
    overflow:'hidden'
},
    shadowRadius: 4,
    shadowOpacity: 1,
 }


})