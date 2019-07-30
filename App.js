import React, { Component } from 'react';

import { StyleSheet, View, Alert, Text, Button,TextInput } from 'react-native';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //defauilt value of the date time
      date: '',
   age:'',
   
    };
     this.buttonpressed=this.buttonpressed.bind(this)
  }
  componentDidMount() {
    var that = this;
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds
    that.setState({
      //Setting the value of the date time
      date:
        date + '/' + month + '/' + year + ' ' + hours + ':' + min + ':' + sec,
   
    });
  }
buttonpressed(){

  console.log(this.state.age)
}
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 20,
          }}>
          Enter your birthday date
        </Text>
        <TextInput
          style={{
            fontSize: 20,
            marginTop: 16,
          }}
          defaultValue={this.state.age}
          onChangeText={text =>this.setState({age: text})}/>
          <Text
          {this.state.date-this.state.age}
        />
        <Button title={"Get My Age"} onPress={this.buttonpressed} />
      </View>
    );
  }
}