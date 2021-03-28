
import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  StatusBar,
  Button,
  ActivityIndicator,
} from 'react-native';

var WooCommerceAPI = require('woocommerce-api');
 
class Data extends React.Component {
  constructor(props){
    super(props);
    this.state ={
     isLoading:true,
     datasource:null,
    }
  }

  componentDidMount(){

    console.log("HHHHHHH");

  
 
//   return fetch(url, {
//     method: 'GET',
//     headers: oauth,
// }).then(function(response) {
//   console.log('dataaaa ' +JSON.stringify(response))
//   if (response.status !== 200) {
//                console.log('Looks like there was a problem. Status Code: ',   response.status);
//                return;
//              }
//              return response.json()
//            });


           
 
           var WooCommerce = new WooCommerceAPI({
             url: ' http://apnabasket.blazedream.in/apanabasket/wp-json/wc/v3/products',
             consumerKey: 'ck_c10c31c28f564647c22162315ade3151acf71a2a',
             consumerSecret: 'cs_5614e6116f33c979dedb5b7a076178e24a37ad65',
             wpAPI: true,
             method: 'GET',
             version: 'wc/v1'
           });

           WooCommerce.getAsync('products').then(function(result) {
            return JSON.parse(result.toJSON().body);
           
          });


  }
  render(){

//     if(this.state.isLoading){
//       return(
//         <View style={styles.container}>
//           <ActivityIndicator/>
//         </View>
//       )
//     } else{
//       let name = this.state.datasource.map((val, key )=>{
//         return <View   key={key}  style={styles.item} >
//       <Text>{val.id}</Text>

// </View>
//       });
// return (
//   <View   style={styles.container}>
// {name}
//   </View>
// )

//     }``


    return(
      <View>

    <Text>{products}</Text>
    
      </View>
    )
  }
} 
export default Data ;

const styles = StyleSheet.create ({

  container:{
flex:1,
// backgroundColor:'#eee',
alignItems:'center',
justifyContent:'center',
// backgroundColor:'yellow'
  },
  item:{
   
   
    margin:10,
    alignItems:'center',
    justifyContent:'center',
    borderBottomWidth:1,
    borderTopWidth:1,
    borderTopColor:'black',
    borderBottomColor:'black',
    color:'black'
  }
})