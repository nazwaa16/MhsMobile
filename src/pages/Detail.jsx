import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

const Detail = ({navigation}) => {
  return (
    <ScrollView>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>

        <View style={{
        flexDirection:'row',
        justifyContent:'space-between',
        height:60,
        alignItems:'center',
        backgroundColor:'red',
        marginHorizontal: 16,
        marginTop: 16,
        padding: 16,
        borderRadius: 40,
        width: 230,
        

      }}>
        <Image style={{
          width: 50,
          height: 30,
          marginRight: 30
        }} source={require('../assets/images/frameback.png')}/>
        <Text style={{
          width: 100,
          marginRight: 100,
          fontWeight: 'bold',
          color: 'white',
          fontSize: 19
        }}>Kembali</Text>
        
        </View> 
        </TouchableOpacity>

    
    <Image source={require('../assets/images/burger.jpg')} style={{height:350, width: 350, borderRadius: 10, alignSelf:'center', marginTop: 30}}/>
    <View style={{ flexDirection:'row', alignContent: 'space-between'}}>

    
    <Text style={{ color:'black', fontWeight:'bold', marginLeft: 35}}> Chicken Burger</Text>
              <Text style={{ color:'red', marginLeft: 150}} > Rp.25.000</Text>
              </View>
              
           
  <Text style= {{width: 350, alignSelf: 'center', fontSize: 12, marginTop: 15}}>Chicken burger ini sejenis roti berbentuk bundar yang diiris dua, dan ditengahnya di isi oleh daging ayam, kemudian sayur-sayuran berupa selada, tomat, dan bawang bombai. </Text> 
  <Text style={{
    marginLeft: 40,
    marginTop: 15,
    color: 'black',
    fontSize: 13
  }}>Masukkan Jumlah Pesanan</Text>

  <TextInput style={{ borderColor: 'red', borderWidth: 3, borderRadius: 10, width: 350, alignSelf:'center', marginTop: 20}} placeholder='Masukkan Jumlah!!'  > </TextInput>

  <TouchableOpacity onPress={()=> navigation.navigate('Succes')} > 

  <View style={{ borderRadius: 10, width: 350, alignSelf:'center', backgroundColor: 'red', height: 50, marginTop: 50}}> 

  <Text style={{ color:'white', textAlign:'center', marginTop: 11}}> Konfirmasi Pesanan!</Text>

</View>
</TouchableOpacity>
  

    </ScrollView>
  )
}

export default Detail