import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import store from './src/redux/store'
import MainComponent from './src/components/MainComponent'

const App = () => {
  return (
   <Provider store={store}>
    <MainComponent/>
   </Provider>
  )
}

export default App

const styles = StyleSheet.create({})