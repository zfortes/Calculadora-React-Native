import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Button from './src/components/Button';
import Display from './src/components/display'

const initialState = {
  displayValue: '0',
}


export default class App extends Component {
  state = {...initialState}

  addDigit = n => {
    const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay
    const currentValue = clearDisplay ? '' : this.state.displayValue
    const displayValue = currentValue + n
    //const position  = this.state.position + 1
    //this.setState({displayValue, clearDisplay : false})
    this.setState({displayValue})
  }

  clearMemory = () => {
    this.setState({...initialState})
  }

  setOperation = operation => {
    
     if (operation !== '='){
      var displayValue = this.state.displayValue
      const size = displayValue.length
      if (displayValue[size-1] !== '+' && displayValue[size-1] != '-' 
      && displayValue[size] != '*' && displayValue[size] != '/'){
        displayValue = this.state.displayValue + operation
        this.setState({displayValue})
      }
    }else{
      //var res = 2
      try{
        res = eval(`${this.state.displayValue}` )
      }catch(e){
        res = 'Syntax Error'
      }

      //values[1] = 0
      this.setState({
        displayValue: `${res}`,
        //clearDisplay: false,
      })
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Display value={this.state.displayValue}/>
        <View style={styles.buttons}>
          <Button label='AC' triple onClick={this.clearMemory}/>
          <Button label='/' operation onClick={ this.setOperation}/>
          <Button label='7' onClick={this.addDigit}/>
          <Button label='8' onClick={ this.addDigit}/>
          <Button label='9' onClick={ this.addDigit}/>
          <Button label='*' operation onClick={ this.setOperation}/>
          <Button label='4' onClick={ this.addDigit}/>
          <Button label='5' onClick={ this.addDigit}/>
          <Button label='6' onClick={ this.addDigit}/>
          <Button label='-' operation onClick={ this.setOperation}/>
          <Button label='1' onClick={ this.addDigit}/>
          <Button label='2' onClick={ this.addDigit}/>
          <Button label='3' onClick={ this.addDigit}/>
          <Button label='+' operation onClick={ this.setOperation}/>
          <Button label='0' double onClick={ this.addDigit}/>
          <Button label='.' onClick={ this.addDigit}/>
          <Button label='=' operation onClick={ this.setOperation}/>      
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});
