import { View, Text, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import RazorpayCheckout from 'react-native-razorpay';


const App = () => {
  const [amount,setAmout]=useState()
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <TextInput placeholder='Enter your amount' onChangeText={(e)=>setAmout(e)}/>
      <Button title='Pay Now' onPress={()=>{
         var options = {
          description: 'Credits towards consultation',
          image: 'https://i.imgur.com/3g7nmJC.jpg',
          currency: 'INR',
          key: 'rzp_test_**j******i*',
          amount: '5000',
          name: 'Acme Corp',
          order_id: '',//Replace this with an order_id created using Orders API.
          prefill: {
            email: 'gaurav.kumar@example.com',
            contact: '9191919191',
            name: 'Gaurav Kumar'
          },
          theme: {color: '#53a20e'}
        }
        RazorpayCheckout.open(options).then((data) => {
          // handle success
          alert(`Success: ${data.razorpay_payment_id}`);
        }).catch((error) => {
          // handle failure
          alert(`Error: ${error.code} | ${error.description}`);
        });
      }}/>
    </View>
  )
}

export default App