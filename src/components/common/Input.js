import React, { Component } from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = function ({label, value, onChangeText, placeholder, isPassword}) {
  const { inputStyle, labelStyle, containerStyle } = styles;
  return(
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        placeholderColor='#b2b2b2'
        autoCorrect={true}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={isPassword}
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 17,
    textAlign: 'center',
    lineHeight: 23,
    flex: 5
  },
  labelStyle: {
    color: '#000',
    fontSize: 17,
    paddingLeft: 15,
    flex: 2
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
};

export { Input };
