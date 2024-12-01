import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { PropsWithChildren } from 'react'

type CurrencyButtonsProps=PropsWithChildren<{
    name:string,
    flag:string
}>

const CurrencyButtons = ({name,flag}:CurrencyButtonsProps):JSX.Element => {
  return (
    <View style={styles.buttonContainer}>
      <Text style={styles.flag}>{flag}</Text>
      <Text style={styles.country}>{name}</Text>
    </View>
  )
}

export default CurrencyButtons

const styles = StyleSheet.create({
  buttonContainer:{
    alignItems:'center'
  },
  flag:{
    fontSize:28,
    color:'#000000',
    marginBottom:4
  },
  country:{
    fontSize:14,
    color:'#000000',
    marginBottom:4
  }})