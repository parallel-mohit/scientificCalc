import { useEffect, useState } from "react";
import { TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { Text, View, StyleSheet, Image,SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

// import { StatusBar } from "expo-status-bar";
// import { useSafeAreaInsets } from 'react-native-safe-area-context';






export default App = () => {
  let Tab = createMaterialTopTabNavigator();
//  const insets = useSafeAreaInsets();

  return (
    
    <NavigationContainer >
       
      <Tab.Navigator initialRouteName="Home" screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        tabBarPressColor:'orange',
        
        tabBarGap:10,
        tabBarShowLabel:false,
        
        
        tabBarStyle:{paddingTop:35,backgroundColor:'white',shadowColor:'white'}
      }}>
        <Tab.Screen name='Mor' component={More} options={{
          headerShown: false,
          tabBarIcon: ({focused})=>(<Image source={require('./assets/exchange.png')} style={[styles.img ,{tintColor: focused ? 'orange': 'black'}] }  />)
        }}/>
        <Tab.Screen  name='Home' component={Home} options={{
          
          headerShown: false,
          tabBarIcon: ({focused})=>(<Image source={require('./assets/favicon.png')} style={[styles.img ,{tintColor: focused ? 'orange': 'black'}] }  />)
        }} />
        <Tab.Screen name='apps' component={More}  options={{
          tabBarLabel: '',
          tabBarIcon: ({focused})=>(<Image source={require('./assets/apps.png')} style={[styles.img ,{tintColor: focused ? 'orange': 'black'}] } />)}}/>
        <Tab.Screen name='Menu' component={More}  options={{
          tabBarLabel:'',
          tabBarIcon: ({focused})=>(<Image source={require('./assets/menu.png')} style={[styles.img ,{tintColor: focused ? 'orange': 'black'}] }  />)}}/>
       
      </Tab.Navigator>
    </NavigationContainer>
    

  );
}
let Home = () => {
  let [value, setValue] = useState('0')
  let [x, setData1] = useState(0)
  let [y, setData2] = useState(0)
  let [z, setData3] = useState(0)
  let [a, setA] = useState('')
  let reset = () => {
    setData1(0)
    setData2(0)
    setData3(0)
    setA('')
  }

  let pressed = (val) => {
    if ("AC" === val) {
      setValue('0')
    } else if ('x' === val || '+' === val || '-' == val || '%' === val || '/' === val) {
      setData1(value)
      z = value.length
      setData3(z)
      setValue(value + val)
      x = value.substring(0, z)
      setData1(x)
    } else if ('=' === val) {
      y = value.substring(z + 1, value.length)
      setData2(y);
      a = value.substring(z, z + 1)
      setA(a)
      if (a == 'x') {
        value = Number(x) * Number(y)
        value = String(value)
      }
      else if (a == '+') {
        value = Number(x) + Number(y)
        value = String(value)
      }
      else if (a === '/') {
        value = Number(x) / Number(y)
        value = String(value)
      }
      else if (a === '-') {
        value = Number(x) - Number(y)
        value = String(value)
      }
      else if (a === '%') {
        value = Number(x) % Number(y)
        value = String(value)
      }

      setValue(value)
      reset()

    } else if ('X' == val) {
      if (value != 0) {
        let clear = value.substring(0, value.length - 1)

        setValue(clear)

        if (clear === '') {
          setValue('0')
        }
      }
    } else {
      if (value === '0') {
        setValue(val)
      } else {
        setValue(value + val)
      }
    }
  }
  return (
    <View style={{ flex: 1, flexDirection: 'column',backgroundColor:'white' }} >
      <View style={styles.display}>
        <Text style={styles.displayText}>{value}</Text>
      </View>
      <View style={{ borderStyle: 'solid', borderWidth: 0.5, borderColor: 'black', margin: 10 }}>
      </View>

      <View style={styles.container}>
        <TouchableOpacity style={styles.ele} onPress={() => pressed('AC')} >
          <Text style={[styles.text, styles.textEle]}>AC</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ele} onPress={() => pressed('X')} >
          <Image
            source={require('./assets/clear1.png')} style={{ height: 40, width: 40 }}

          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.ele} onPress={() => pressed('%')} >
          <Text style={[styles.text, styles.textEle]}>%</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ele} onPress={() => pressed('/')} >
          <Text style={[styles.text, styles.textEle]}>/</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <TouchableOpacity style={styles.ele} onPress={() => pressed('7')} >
          <Text style={styles.text}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ele} onPress={() => pressed('8')}>
          <Text style={styles.text}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ele} onPress={() => pressed('9')}>
          <Text style={styles.text}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ele} onPress={() => pressed("x")}>
          <Text style={[styles.text, styles.textEle]}>x</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <TouchableOpacity style={styles.ele} onPress={() => pressed('4')}>
          <Text style={styles.text}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ele} onPress={() => pressed('5')}>
          <Text style={styles.text}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ele} onPress={() => pressed('6')}>
          <Text style={styles.text}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ele} onPress={() => pressed('-')}>
          <Text style={[styles.text, styles.textEle, { fontSize: 44 }]}>-</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <TouchableOpacity style={styles.ele} onPress={() => pressed('1')}>
          <Text style={styles.text}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ele} onPress={() => pressed('2')}>
          <Text style={styles.text}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ele} onPress={() => pressed('3')}>
          <Text style={styles.text}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ele} onPress={() => pressed('+')}>
          <Text style={[styles.text, styles.textEle, { fontSize: 44 }]}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <TouchableOpacity style={styles.ele} onPress={() => pressed("#")}>
          <Text style={styles.text}>#</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ele} onPress={() => pressed('0')}>
          <Text style={styles.text}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ele} onPress={() => pressed('.')}>
          <Text style={styles.text}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.ele, { height: 70, width: 70, borderRadius: 30, backgroundColor: 'orange' }]} onPress={() => pressed('=')}>
          <Text style={styles.text}>=</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
let More = () => {
  return (
    <View style={{flex:1,backgroundColor:'white'}}>
      <View style={{margin:40, flexDirection: 'row',justifyContent:'space-between' ,}}>
      <TouchableHighlight >
        <Image source={require('./assets/exchange.png')} style={styles.img}></Image>

      </TouchableHighlight>
      <TouchableHighlight>
        <Image source={require('./assets/apps.png')} style={styles.img}></Image>
      </TouchableHighlight>
      <TouchableHighlight>
        <Image source={require('./assets/apps.png')} style={styles.img}></Image>
      </TouchableHighlight>
      <TouchableHighlight>
        <Image source={require('./assets/menu.png')} style={styles.img}></Image>
      </TouchableHighlight>
      <TouchableHighlight >
        <Image source={require('./assets/exchange.png')} style={styles.img}></Image>

      </TouchableHighlight>
      <TouchableHighlight>
        <Image source={require('./assets/favicon.png')} style={styles.img}></Image>
      </TouchableHighlight>
      <TouchableHighlight>
        <Image source={require('./assets/apps.png')} style={styles.img}></Image>
      </TouchableHighlight>
      <TouchableHighlight>
        <Image source={require('./assets/menu.png')} style={styles.img}></Image>
      </TouchableHighlight>
      </View>
      
    </View>
  )
}
let styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignContent: 'flex-end',
  },
  text: {
    fontSize: 27
  },
  ele: {
    height: 80,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  display: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    height: '40%',
  },
  displayText: {
    fontSize: 45
  },
  textEle: {
    color: 'orange',
  }, img: {
    height: 20,
    width: 20
  }
})