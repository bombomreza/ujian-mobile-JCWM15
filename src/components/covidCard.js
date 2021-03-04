import React, {useState, useEffect} from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Touchable,
} from 'react-native';

const covidCard = ({navigation}) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
      <View>
        <Text></Text>
      </View>
    </TouchableOpacity>
  );
};

export default covidCard;
