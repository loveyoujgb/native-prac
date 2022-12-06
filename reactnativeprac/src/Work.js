import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Text, View, Pressable} from 'react-native';

const Work = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Pressable onPress={() => navigation.navigate('Home')}>
        <Text>sdfsdfdssfd</Text>
      </Pressable>
    </View>
  );
};

export default Work;
