import React, { Component } from 'react';
import { View, Button, TextInput, StyleSheet} from 'react-native';
import Header from './Components/Header';
class App extends Component {
  state = {
    num: 0,
    textValue: 'Tasbih'
  }

  tambahTasbih = () => {
    this.setState({
     num: this.state.num + 1,
    })
  }

  batas = () => {
    let bts = this.state.num + 1
    if (bts > 33) {
      this.setState({
        num: 0
      })
    }
  }

  changeButton = () =>{
    let change = this.state.num +1
    let txt = this.state.textValue
    if (change > 33 && txt == 'Tasbih') {
      this.setState({
        textValue: 'Tahmid'
      }) 
    }

    if (change > 33 && txt == 'Tahmid') {
      this.setState({
        textValue: 'Takbir'
      })
    }

    if (change > 33 && txt == 'Takbir') {
      this.setState({
        textValue: 'Tasbih'
      })
    }
  }

  resetTasbih = () => {
    this.setState({
      num: 0,
    })
  }

  resetText = () => {
    this.setState({
      textValue: 'Tasbih'
    })
  }

  onPressButton = () => {
    this.tambahTasbih(),
    this.batas(),
    this.changeButton()
  }

  onPressReset = () => {
    this.resetTasbih(),
    this.resetText()
  }

  render() { 
    return ( 
      <View>
        <View style={styles.header}>
          <Header/>
        </View>

        <View style={styles.text}>
          <TextInput value={String(this.state.num)}/>
        </View>

        <View style={styles.button}>
          <Button title={this.state.textValue} onPress={this.onPressButton}/>
        </View>

        <View style={styles.button}>
          <Button title="RESET" onPress={this.onPressReset}/>
        </View>
      </View>
     );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#516BEB',
    alignItems: 'center',
    padding: 5,
    padding: 15,
    fontWeight: 'Bold'
  },

  text: {
    alignItems: 'center',
    margin: 50,
  },

  button: {
    marginBottom: 15,
    marginStart: 25,
    marginEnd: 25
  },


})
 
export default App;