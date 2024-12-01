import { FlatList, Pressable, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { currencyByRupee } from './constants'
import Snackbar from 'react-native-snackbar';
import CurrencyButtons from './components/CurrencyButtons';

const App = () => {
  const [inputValue,setInputValue]=useState('');
  const [resultValue,setResultValue]=useState('');
  const [targetCurrency,setTargetCurrency]=useState('');

  const buttonOnpressed=(TargetCurrency:Currency)=>{
    if(!inputValue)
    {
      return Snackbar.show({
        text:'Enter a value to convert',
        backgroundColor:'#FFFFFF',
        textColor:'#000000'
      })
    }
    const inputAmount=parseFloat(inputValue)
    if(!isNaN(inputAmount))
    {
      const convertedValue=inputAmount * TargetCurrency.value
      const result=`${TargetCurrency.symbol} ${convertedValue.toFixed(2)}`
      setResultValue(result)
      setTargetCurrency(TargetCurrency.name)
    }else{
      return Snackbar.show({
        text:'Enter a valid number',
        backgroundColor:'#FFFFFF',
        textColor:'#000000'
      })
    }
  }
  return (
   <>
     <StatusBar/>
    
     <View style={styles.Container}>
           <View style={styles.topContainer} >
              <View style={styles.rupeeContainer}>
                 <Text style={styles.rupee}>₹</Text>
                 <TextInput
                  maxLength={14}
                  value={inputValue}
                  onChangeText={setInputValue}
                  placeholder='Enter a valid number'
                  keyboardType='number-pad'
                  style={styles.inputAmount}
                 />
              </View>
              {resultValue && (
                <View >
                   <Text style={styles.resultTxt}>
                     {resultValue}
                   </Text>
                </View>
              )}
           </View>
           <View style={styles.bottomContainer}>
              <FlatList
               numColumns={3}
               data={currencyByRupee}
               keyExtractor={item=> item.name}
               renderItem={({item})=>(
                <Pressable style={[styles.button,targetCurrency===item.name && styles.selected]}
                onPress={()=>buttonOnpressed(item)}
                >
                  <CurrencyButtons {...item} />
                </Pressable>
               )}
              />
           </View>
     </View>
     
   </>
  )
}

export default App

const styles = StyleSheet.create({
  Container:{
    flex:1,
    flexDirection:'column',
    backgroundColor: '#515151',
    
  },
  topContainer:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-evenly'
  },
  rupeeContainer:{
    flexDirection:'row',
    alignItems:'center'
  },
  rupee:{
    marginRight:8,
    fontSize:22,
    fontWeight:800,
    color:'#FFFFFF'
  },
  inputAmount:{
    height: 40,
    width: 200,
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
  },
  button:{
    flex:1,
    margin: 12,
    height: 60,
    borderRadius: 12,
    backgroundColor: '#fff',
    elevation:2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#FFF123',
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  selected: {
    backgroundColor: '#ffeaa7',
  },
  bottomContainer: {
    flex: 3,
  },
  resultTxt: {
    fontSize: 32,
    color: '#FFFFFF',
    fontWeight: '800',
  },
  
})