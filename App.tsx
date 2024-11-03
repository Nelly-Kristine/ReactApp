import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

////////////////////////
export default function App() {

  const [counter, setCounter] = useState(0);
  const [cityText, setCityText] = useState('Select a city you want to learn more about and wish to explore! ');
  const [backgroundImage, setBackgroundImage] = useState(require('./oslo.jpg'));

  const onPressOslo = () => {
    setBackgroundImage(require('./oslo.jpg'));
    setCityText("In November, Oslo cools to 1-4°C with occasional snowfall and rain. Despite shorter days, the city remains lively, with cozy cafés, cultural events, and outdoor activities like ice skating and skiing. Oslo’s social scene thrives year-round, blending natural beauty with urban life, even as winter approaches.")
  };
  const onPressTromso = () => {
    setBackgroundImage(require('./tromso.jpg'));
    setCityText("In November, Tromsø’s temperatures drop to around -2°C to 2°C, with frequent snowfall and short daylight hours. Known as the gateway to the Arctic, Tromsø offers unique winter activities like Northern Lights tours, dog sledding, and cozy cafés for locals and visitors. The town’s vibrant social scene continues despite the early winter chill.")
  };
  const onPressStavanger = () => {
    setBackgroundImage(require('./stavanger.jpg'));
    setCityText("In November, Stavanger experiences mild but wet weather, with temperatures around 4°C to 8°C and frequent rain. Despite the cooler season, the city’s social life remains active with cozy cafés, cultural events, and a lively dining scene. Stavanger’s proximity to fjords also makes it a scenic spot for autumn hikes.")
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ImageBackground id='backgroundImage' source={backgroundImage} style={StyleSheet.absoluteFill} />
      <Text style={styles.titleText}>Check the weather!</Text>
      <View style={styles.bodyTextContainer}>
        <Text id='cityText' style={styles.bodyText}>{cityText}</Text>
      </View>

      <TouchableOpacity onPress={onPressOslo}>
          {/* Apply opacity logic to the wrapper View */} 
          <View style={styles.opacityButton} >
            <Text style={styles.buttonText}>Oslo</Text>
          </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressTromso}>
          {/* Apply opacity logic to the wrapper View */} 
          <View style={styles.opacityButton}  >
            <Text style={styles.buttonText}>Tromsø</Text>
          </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressStavanger}>
          {/* Apply opacity logic to the wrapper View */} 
          <View style={styles.opacityButton} >
            <Text style={styles.buttonText}>Berlin</Text>
          </View>
      </TouchableOpacity>
      <View style={styles.bodyTextContainer}>
      <TouchableOpacity style={styles.opacityButton} onPress={() => setCounter(counter + 1)}>
        <View style={styles.opacityButton} >
          <Text style={styles.buttonText}>Count up</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.opacityButton} onPress={() => setCounter(counter - 1)}>
        <View style={styles.opacityButton} >
          <Text style={styles.buttonText}>Count down</Text>
        </View>
      </TouchableOpacity>
      <Text style={styles.bodyText}>Page counter is {counter}</Text>
    </View>
    </View>
  );
}

// Style sheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    color: 'blue',
    fontSize: 48,
    fontWeight: 'bold',
    flex: 0.4,
    },
  bodyText: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
      flex: 0.0,
      },
  buttonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  opacityButton: {
    backgroundColor: '#4466FF', 
    opacity: 0.8,
    width:100, 
    height:50, 
    borderRadius: 4, 
    justifyContent: 'center', 
    alignItems: 'center',
    margin: 2,
  },
  bodyTextContainer: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
});
