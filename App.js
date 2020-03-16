import React, { useState } from 'react';
import { Text, StyleSheet, View, Switch, Image } from 'react-native';

const App = () => {

  const [switchState, setSwitchState] = useState(false);

  const handleSwitchToggle = () => {
    !!switchState ?
    setSwitchState(false) :
    setSwitchState(true);
  };

    return (
      <View style={styles.mainContainer}>
        <View style={styles.header}>
          <View style={styles.headerHero}>
            <Text style={styles.headerText}>
              Header
            </Text>
          </View>
          <View style={styles.nav}>
            <Text style={styles.headerText}>Home</Text>
            <Text style={styles.headerText}>Products</Text>
            <Text style={styles.headerText}>Services</Text>
            <Text style={styles.headerText}>Info</Text>
          </View>
        </View>

        <View style={styles.body}>

          <Image style={styles.imageStyle} source={!!switchState ? {uri: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbooksaroundthetable.files.wordpress.com%2F2016%2F11%2Fsurprised-baby.jpg&f=1&nofb=1"} : {uri: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fposterjackcanada.files.wordpress.com%2F2015%2F01%2Fportrait-photography-surprised-baby.jpg&f=1&nofb=1"}} />

          <Switch style={styles.switchStyle} value={switchState} onValueChange={handleSwitchToggle} thumbColor={!!switchState ? "orange" : "coral"}
          ios_backgroundColor={!!switchState ? "coral" : "cyan"} trackColor={!!switchState ? "coral" : "cyan"} />

        </View>
      </View>
    );
  }


const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#222",
  },
  header: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#eee",
  },
  headerHero: {
    flex: 3,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    color: "#222",
  },
  nav:{
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 5,
  },
  body: {
    flex: 9,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  switchStyle: {
    width: 80,
    height: 30,
  },
  imageStyle: {
    width: 250,
    height: 200,
  },
  imageOpacity: {
    opacity: 0,
  },
  text: {
    color: "#eee"
  },
});

export default App;
