// import { View, TouchableOpacity, Text ,StyleSheet} from 'react-native'
// import {  useState } from "react";

// let About = (dat) => {
//     let [value, setValue] = useState('0')
//     let [x, setData1] = useState(0)
//     let [y, setData2] = useState(0)
//     let [z, setData3] = useState(0)
//     let [a, setA] = useState('')
//     let reset = () => {
//         setData1(0)
//         setData2(0)
//         setData3(0)
//         setA('')
//     }
    
//     let pressed = (val) => {
//         if ("AC" === val) {
//             setValue('0')
//         } else if ('x' === val || '+' === val || '-' == val || '%' === val || '/' === val) {
//             setData1(value)
//             z = value.length
//             setData3(z)
//             setValue(value + val)
//             x = value.substring(0, z)
//             setData1(x)
//         } else if ('=' === val) {
//             y = value.substring(z + 1, value.length)
//             setData2(y);
//             a = value.substring(z, z + 1)
//             setA(a)
//             if (a == 'x') {
//                 value = Number(x) * Number(y)
//                 value = String(value)
//             }
//             else if (a == '+') {
//                 value = Number(x) + Number(y)
//                 value = String(value)
//             }
//             else if (a === '/') {
//                 value = Number(x) / Number(y)
//                 value = String(value)
//             }
//             else if (a === '-') {
//                 value = Number(x) - Number(y)
//                 value = String(value)
//             }
//             else if (a === '%') {
//                 value = Number(x) % Number(y)
//                 value = String(value)
//             }

//             setValue(value)
//             reset()

//         } else if ('X' == val) {
//             if (value != 0) {
//                 let clear = value.substring(0, value.length - 1)

//                 setValue(clear)

//                 if (clear === '') {
//                     setValue('0')
//                 }
//             }
//         } else {
//             if (value === '0') {
//                 setValue(val)
//             } else {
//                 setValue(value + val)
//             }
//         }
//     }
//     return (
//         <View>
//             <TouchableOpacity style={styles.ele} onPress={() => pressed(dat.data)}>
//                 <Text style={styles.text}>{dat.data}</Text>
//             </TouchableOpacity>
//         </View>
//     )
// }
// let styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       flexDirection: 'row',
//       flexWrap: 'wrap',
//       justifyContent: 'space-between',
//       alignContent: 'flex-end',
  
  
  
//     },
//     text: {
//       fontSize: 27
//     },
//     ele: {
//       height: 80,
//       width: 70,
//       justifyContent: 'center',
//       alignItems: 'center',
  
  
//     },
//     display: {
  
  
//       justifyContent: 'flex-end',
//       alignItems: 'flex-end',
  
//       height: '40%',
  
  
//     },
//     displayText: {
//       fontSize: 45
  
//     },
//     textEle: {
//       color: 'orange'
//     }, img: {
//       height: 20,
//       width: 20
//     },
//     special:
//       {height: 70, width: 70, borderRadius: 20, backgroundColor: 'orange'}
    
  
//   })
// export default About;
// export {value};