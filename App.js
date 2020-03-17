import React, { useState } from 'react';
import { Text, StyleSheet, View, Switch, Image, ScrollView, Animated, Dimensions } from 'react-native';

const App = () => {

  const [switchState, setSwitchState] = useState(false);
  const [viewObj, setViewObj] = useState({});
  const [scrollViewRef, setScrollViewRef] = useState(null);
  const [currentView, setCurrentView] = useState("Home");
  const [menuWidths, setMenuWidths] = useState({home:43, products:65, services:62, info: 29});

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
            <Text style={[styles.headerText, currentView === "Home" && styles.highlight]}
              onPress={() => {
                scrollViewRef.scrollTo({
                x: viewObj.home,
                y: 0,
                animated: true
              });
              }}
              onLayout={event => {
                const layout = event.nativeEvent.layout;
                setMenuWidths( menuWidths => menuWidths = {...menuWidths, home:layout.width} );
              }}>Home</Text>

            <Text style={[styles.headerText, currentView === "Products" && styles.highlight]}
              onPress={() => {
                scrollViewRef.scrollTo({
                x: viewObj.products,
                y: 0,
                animated: true
              });
              }}
              onLayout={event => {
                const layout = event.nativeEvent.layout;
                setMenuWidths( menuWidths => menuWidths = {...menuWidths, products:layout.width} );
              }}
              >Products</Text>

            <Text style={[styles.headerText, currentView === "Services" && styles.highlight]}
              onPress={() => {
                scrollViewRef.scrollTo({
                x: viewObj.services,
                y: 0,
                animated: true
              });
              }}
              onLayout={event => {
                const layout = event.nativeEvent.layout;
                setMenuWidths( menuWidths => menuWidths = {...menuWidths, services:layout.width} );
              }}
              >Services</Text>

            <Text style={[styles.headerText, currentView === "Info" && styles.highlight]}
              onPress={() => {
                scrollViewRef.scrollTo({
                x: viewObj.info,
                y: 0,
                animated: true
              });
              }}
              onLayout={event => {
                const layout = event.nativeEvent.layout;
                setMenuWidths( menuWidths => menuWidths = {...menuWidths, info:layout.width} );
              }}
              >Info</Text>
          </View>

        </View>

        <ScrollView contentContainerStyle={styles.body}
          ref={ref => { setScrollViewRef(ref) }}
          horizontal={true}
          decelerationRate={0}
          snapToAlignment="center"
          snapToInterval={400}
          overScrollMode="never"
          showsHorizontalScrollIndicator={false}
          onScroll= {event => {
            let xOffset = event.nativeEvent.contentOffset.x;
            if (xOffset >= 0 && xOffset <= 350) {
              setCurrentView("Home");
            } else if (xOffset >= 351 && xOffset <= 750) {
              setCurrentView("Products");
            } else if (xOffset >= 751 && xOffset <= 1150) {
              setCurrentView("Services");
            } else if (xOffset >= 1151) {
              setCurrentView("Info");
            }
          }}
          scrollEventThrottle={32}
           >

           <View style={styles.bodyViews}
             onLayout={event =>{
               const layout = event.nativeEvent.layout;
               setViewObj( viewObj => viewObj = {...viewObj, home:layout.x} );
             }}>
              <Image style={styles.imageStyle} source={!!switchState ? {uri: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbooksaroundthetable.files.wordpress.com%2F2016%2F11%2Fsurprised-baby.jpg&f=1&nofb=1"} : {uri: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fposterjackcanada.files.wordpress.com%2F2015%2F01%2Fportrait-photography-surprised-baby.jpg&f=1&nofb=1"}} />

              <Switch style={styles.switchStyle} value={switchState} onValueChange={handleSwitchToggle} thumbColor={!!switchState ? "orange" : "coral"}
              ios_backgroundColor={!!switchState ? "coral" : "cyan"} trackColor={!!switchState ? "coral" : "cyan"} />
            </View>

            <View style={[styles.bodyViews, {backgroundColor: "red"}]}
              onLayout={event =>{
                const layout = event.nativeEvent.layout;
                setViewObj( viewObj => viewObj = {...viewObj, products:layout.x} );
              }}>
              <Image style={styles.imageStyle} source={!!switchState ? {uri: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbooksaroundthetable.files.wordpress.com%2F2016%2F11%2Fsurprised-baby.jpg&f=1&nofb=1"} : {uri: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fposterjackcanada.files.wordpress.com%2F2015%2F01%2Fportrait-photography-surprised-baby.jpg&f=1&nofb=1"}} />

              <Switch style={styles.switchStyle} value={switchState} onValueChange={handleSwitchToggle} thumbColor={!!switchState ? "orange" : "coral"}
              ios_backgroundColor={!!switchState ? "coral" : "cyan"} trackColor={!!switchState ? "coral" : "cyan"} />
            </View>

            <View style={[styles.bodyViews, {backgroundColor: "blue"}]}
              onLayout={event =>{
                const layout = event.nativeEvent.layout;
                setViewObj( viewObj => viewObj = {...viewObj, services:layout.x} );
              }}>
              <Image style={styles.imageStyle} source={!!switchState ? {uri: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbooksaroundthetable.files.wordpress.com%2F2016%2F11%2Fsurprised-baby.jpg&f=1&nofb=1"} : {uri: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fposterjackcanada.files.wordpress.com%2F2015%2F01%2Fportrait-photography-surprised-baby.jpg&f=1&nofb=1"}} />

              <Switch style={styles.switchStyle} value={switchState} onValueChange={handleSwitchToggle} thumbColor={!!switchState ? "orange" : "coral"}
              ios_backgroundColor={!!switchState ? "coral" : "cyan"} trackColor={!!switchState ? "coral" : "cyan"} />
            </View>

            <View style={[styles.bodyViews, {backgroundColor: "green"}]}
              onLayout={event =>{
                const layout = event.nativeEvent.layout;
                setViewObj( viewObj => viewObj = {...viewObj, info:layout.x} );
              }}>
              <Image style={styles.imageStyle} source={!!switchState ? {uri: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbooksaroundthetable.files.wordpress.com%2F2016%2F11%2Fsurprised-baby.jpg&f=1&nofb=1"} : {uri: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fposterjackcanada.files.wordpress.com%2F2015%2F01%2Fportrait-photography-surprised-baby.jpg&f=1&nofb=1"}} />

              <Switch style={styles.switchStyle} value={switchState} onValueChange={handleSwitchToggle} thumbColor={!!switchState ? "orange" : "coral"}
              ios_backgroundColor={!!switchState ? "coral" : "cyan"} trackColor={!!switchState ? "coral" : "cyan"} />
            </View>

          </ScrollView>

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
    width: 1600,
    height: 500
  },
  bodyViews: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: 400,
  },
  switchStyle: {
    marginTop: 25
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
  highlight: {
    fontWeight: "bold",
    color: "red"
  }
});

export default App;
