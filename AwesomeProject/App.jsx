import { View, Text, Image } from 'react-native'
import React from 'react'

const App = () => {
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
        source={require('./src/logoo.png')} />
        <View style={{height: 40, width: 40, borderRadius: 20,
        backgroundColor:'yellow'}}/>
        </View>
        {/* Kantin */}
        <View style={{margin: 16}}>
          <Text> Welcome To </Text>
          <Text style={{fontSize: 32, color: 'black', fontWeight: 'bold'}}> Multistudi Canteen</Text>


        </View>
        <View style={{flexDirection: 'row'
        }}>
          <View style={{
            borderWidth: 1,
            padding: 12,
            flex: 1,
          }}>
            {/*image*/}

            <View
            style={{
              height: 200,
              backgroundColor:'green',
              padding: 12,
              
            
            }}>
            
              </View>
              <Text> Sphagetti Lasagna</Text>
              <Text> Rp.35.000</Text>
              </View>

              <View style={{
            borderWidth: 1,
            padding: 12,
            flex: 1,
          }}>
            {/*image*/}


            <View
            style={{
              height: 200,
              backgroundColor:'green',
            

            }}>
            
              </View>
              <Text> Macaroni Carbonara</Text>
              <Text> Rp.37.000</Text>
              </View>


              </View>
              <View style={{flexDirection: 'row'
        }}>
          <View style={{
            borderWidth: 1,
            padding: 12,
            flex: 1,
          }}>
            {/*image*/}

            <View
            style={{
              height: 200,
              backgroundColor:'green',
              padding: 12,
              
            
            }}>
            
              </View>
              <Text> Miracle Sawberry</Text>
              <Text> Rp.23.000</Text>
              </View>

              <View style={{
            borderWidth: 1,
            padding: 12,
            flex: 1,
          }}>
            {/*image*/}


            <View
            style={{
              height: 200,
              backgroundColor:'green',
            

            }}>
            
              </View>
              <Text> Blue Drink Ocean</Text>
              <Text> Rp.20.000</Text>
              </View>


              </View>
         {/* </View> */}
    </View>

  )
}

export default App