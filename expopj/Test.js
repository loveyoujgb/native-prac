// import { StatusBar } from "expo-status-bar";
// import React, { useEffect, useState } from "react";
// import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
// import * as Location from "expo-location";

// const { width: SCREEN_WIDTH } = Dimensions.get("window");
// // const {height,width} = Dimensions.get('window');
// console.log(SCREEN_WIDTH);

// export default function App() {
//   const [city, setCity] = useState("Loading...");
//   const [location, setLocation] = useState();
//   const [ok, setOk] = useState(true);
//   const ask = async () => {
//     const { granted } = await Location.requestForegroundPermissionsAsync();
//     if (!granted) {
//       //권한이 부여되었는지 여부
//       setOk(false);
//     }
//     // getCurrentPositionAsync 의 옵션 중 accuracy(정확도)는 5로 한다.
//     const {
//       coords: { latitude, longitude },
//     } = await Location.getCurrentPositionAsync({ accuracy: 5 });
//     const location = await Location.reverseGeocodeAsync({ latitude, longitude }, { useGoogleMaps: false });
//     console.log(location); // gps 획득!
//     setCity(location[0].region); //해당 값 중 도시값을 setCity에 넣는다.(나의 city값이  null이어서.. region으로 하겠다..)
//   };
//   useEffect(() => {
//     ask();
//   }, []);

//   return (
//     <View style={styles.container}>
//       <View style={styles.city}>
//         <Text style={styles.cityName}>{city}</Text>
//       </View>
//       <ScrollView showsHorizontalScrollIndicator={false} pagingEnabled horizontal contentContainerStyle={styles.weather}>
//         <View style={styles.day}>
//           <Text style={styles.temp}>27</Text>
//           <Text style={styles.description}>Sunny</Text>
//         </View>
//         <View style={styles.day}>
//           <Text style={styles.temp}>27</Text>
//           <Text style={styles.description}>Sunny</Text>
//         </View>
//         <View style={styles.day}>
//           <Text style={styles.temp}>27</Text>
//           <Text style={styles.description}>Sunny</Text>
//         </View>
//         <View style={styles.day}>
//           <Text style={styles.temp}>27</Text>
//           <Text style={styles.description}>Sunny</Text>
//         </View>
//       </ScrollView>
//     </View>
//   );
// }

// // flexDirection 기본값은 column
// // StatusBar 상태바, light, dark 가능
// // StyleSheet.create 는 자동완성 기능을 제공한다.
// // ScrollView - 스크롤바 로 묶인다.
// // horizontal - 가로 스크롤 => flex가 먹히지 않게 된다.
// // -> contentContainerStyle로 준 다음 flex가 필요없게 되므로 flex 스타일 속성을 지운다.
// // pagingEnabled - 스크롤을 좀더 끈끈하게, 페이지가 생기도록 해준다.
// // pagingEnabled로 인해 스크롤이 생기므로 스크롤바를 지워준다.
// // indicatorStyle - 스크롤 색상 변경 (IOS만 지원)
// // persistentScrollbar - (안드로이드) 스크롤바가 투명해지지 않도록 해준다

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "tomato",
//   },
//   city: {
//     flex: 1.2,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   weather: {},
//   cityName: {
//     fontSize: 68,
//     fontWeight: "500",
//   },
//   day: {
//     //하나가 한 스크린을 차지하고 싶을 때 화면 크기를 찾는다.
//     width: SCREEN_WIDTH,
//     alignItems: "center",
//   },
//   temp: {
//     fontSize: 178,
//     marginTop: 50,
//   },
//   description: {
//     marginTop: -30,
//     fontSize: 60,
//   },
// });
