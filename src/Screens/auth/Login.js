import { Text, View } from 'react-native'
import React, { Component } from 'react'

export class Login extends Component {
  render() {
    return (
      <View style= {{

              flex: 1,
              justifyContent: "center",
              alignItems: "center",
             

      }}>
        <Text>Login</Text>
      </View>
    )
  }
}

export default Login