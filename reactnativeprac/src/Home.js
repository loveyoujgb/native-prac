import React from 'react';
import {Text, View, Pressable, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Home Screen?/</Text>

      <Pressable onPress={() => navigation.navigate('Work')}>
        <Text>집으로 가는 버튼</Text>
      </Pressable>
      <Button title="Go to Work" onPress={() => navigation.navigate('Work')} />
      <Button
        title="Go to Page1"
        onPress={() => navigation.navigate('Page')}
      />
      
      <Button
        title="Go to Page1"
        onPress={() => navigation.navigate('Page2')}
      />
    </View>
  );
};

export default Home;
