/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Torch from 'react-native-torch';
import RNShake from 'react-native-shake';

const App = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => setToggle(oldToggle => !oldToggle);

  useEffect(() => {
    // LIGAR O FLASH DO CELULAR
    Torch.switchState(toggle);
  }, [toggle]);

  useEffect(() => {
    const subscription = RNShake.addListener(() => {
      setToggle(oldToggle => !oldToggle);
    });
    // AO DESMONTAR
    return () => subscription.remove();
  }, []);

  return (
    <View style={toggle ? styles.containerLight : styles.container}>
      <TouchableOpacity onPress={handleToggle}>
        <Image
          style={toggle ? styles.lightingOn : styles.lightingOff}
          source={
            toggle
              ? require('./assets/icons/eco-light.png')
              : require('./assets/icons/eco-light-off.png')
          }
        />
        <Image
          style={toggle ? styles.lightingOn : styles.lightingOff}
          source={
            toggle
              ? require('./assets/icons/logo-dio.png')
              : require('./assets/icons/logo-dio-white.png')
          }
        />
      </TouchableOpacity>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLight: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightingOn: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 200,
    height: 200,
  },
  lightingOff: {
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: 'white',
    width: 200,
    height: 200,
  },
});
