import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const RegisterDone = ({navigation}) => {
  return (
    <View style={{ flex: 1, backgroundColor: '#307ecc' }}>
      <View style={{ alignItems: 'center',justifyContent:'center' }}>
        <Image source={require('../Image/success.png')}
          style={{
            width: '50%',
            height: 100,
            resizeMode: 'contain',
            margin: 30,
          }} />
        <Text style={{
          color: 'white',
          textAlign: 'center',
          fontSize: 18,
          padding: 30,
        }}>
          Registration Successful
        </Text>
        <View>
          <TouchableOpacity
            style={{
              backgroundColor: '#7DE24E',
              borderWidth: 0,
              color: '#FFFFFF',
              borderColor: '#7DE24E',
              // height: 40,
              alignItems: 'center',
              borderRadius: 30,
              // marginLeft: 35,
              // marginRight: 35,
              // marginTop: 20,
              // marginBottom: 20,
              paddingHorizontal:30
            }}
            activeOpacity={0.5}
            onPress={() => navigation.navigate('LoginScreen')}>
            <Text style={{
              color: '#FFFFFF',
              paddingVertical: 10,
              paddingHorizontal: 10,
              fontSize: 16,
            }}>Login Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>

  )
}

export default RegisterDone