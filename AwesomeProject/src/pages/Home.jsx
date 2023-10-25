import { View, Text, Image } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View>
      {/* header */}
      <View style={{
        flexDirection:'row',
        justifyContent:'space-between',
        height:60,
        alignItems:'center',
        backgroundColor:'red',
        marginHorizontal: 16,
        marginTop: 16,
        padding: 16,
        borderRadius: 40
      }}>
        <Image resizeMode='contain' style={{height: 40, width:150}}
        source={require('../assets/images/logoo.png')} />
        <View style={{height: 40, width: 40, borderRadius: 20,
        backgroundColor:'yellow'}}/>
        </View>
        {/* Kantin */}
        <View style={{margin: 16}}>
          <Text> Welcome To </Text>
          <Text style={{fontSize: 32, color: 'black', fontWeight: 'bold'}}> Multistudi Canteen</Text>
        </View>

        {/* menu makan*/}
        <Text style={{marginHorizontal:16, fontWeight:'bold', fontSize:16, color:'black'}}>Menu Makanan</Text>
        <View style={{flexDirection: 'row'}}>
          {/*image 1*/}
          <View style={{
            padding: 12,
            flex: 1,
          }}>
            
            <Image source={require('../assets/images/spagetti.jpg')} style={{height:190, width:190, borderRadius: 10}}/>
  
              <Text style={{marginTop: 10, color:'black', fontWeight:'bold'}}> Chicken Burger</Text>
              <Text style={{ color:'red'}} > Rp.18.000</Text>
              </View>

            {/* image2 */}
            <View style={{
            padding: 12,
            flex: 1,
          }}>
           <Image source={require('../assets/images/spagetti.jpg')} style={{height:190, width:190, borderRadius: 10}}/>
           <Text style={{marginTop: 10, color:'black', fontWeight:'bold'}}> Sphagetti Lasagna</Text>
              <Text style={{ color:'red'}} > Rp.25.000</Text>
              </View>
              </View>
            {/* menumakan end */}

            {/* menu minuman*/}
        <Text style={{marginHorizontal:16, fontWeight:'bold', fontSize:16, color:'black'}}>Menu Minuman</Text>
        <View style={{flexDirection: 'row'}}>
          {/*image 1*/}
          <View style={{
            padding: 12,
            flex: 1,
          }}>
            
            <Image source={require('../assets/images/spagetti.jpg')} style={{height:190, width:190, borderRadius: 10}}/>
  
              <Text style={{marginTop: 10, color:'black', fontWeight:'bold'}}> Lemon Red Drink</Text>
              <Text style={{ color:'red'}} > Rp.20.000</Text>
              </View>

            {/* image2 */}
            <View style={{
            padding: 12,
            flex: 1,
          }}>
           <Image source={require('../assets/images/spagetti.jpg')} style={{height:190, width:190, borderRadius: 10}}/>
           <Text style={{marginTop: 10, color:'black', fontWeight:'bold'}}> Miracle Seltzer</Text>
              <Text style={{ color:'red'}} > Rp.23.000</Text>
              </View>
              </View>
            {/* menumakan end */}


             
         {/* </View> */}
    </View>

  )
}

export default Home