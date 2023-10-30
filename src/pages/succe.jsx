import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import React from 'react'

const Succes = ({navigation}) => {
  return (
    <View>
      <Image style={{ width: 260, height: 260, alignSelf:'center', marginTop: 50 }}
       source={require('../assets/images/gambarsuccess.png')} />
       <Text style={{
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
        marginTop: 40
       }}>Pesanan Anda Berhasil!</Text>
       <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <View style={{
          width: 350,
          backgroundColor: 'red',
          alignSelf: 'center',
          height: 50,
          borderRadius: 10,
          marginTop: 150
        }}>
          <Text style={{
            textAlign: 'center',
            color: 'white',
            fontSize: 14, 
            marginTop: 12
          }}>Kembali ke Menu</Text>
        </View>
       </TouchableOpacity>
    </View>
  )
}

export default Succes

const styles = StyleSheet.create({})