import React, { useState } from "react";
import { TouchableHighlight, StyleSheet, Text, TextInput, View } from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";

const App = () => {
  /* -------------------------------- 본명 유효성 검사 ------------------------------- */
  const [name, setName] = useState("");
  const [isName, setIsName] = useState(false);

  const textValid = (text) => {
    const nameValid = /^([가-힣]){1,15}$/;
    if (nameValid.test(text)) {
      setIsName(true);
    } else {
      setIsName(false);
    }
    setName(text);
  };

  /* --------------------------------- 핸드폰 번호 입력 --------------------------------- */
  const [phoneNumber, setPhoneNumber] = useState("");

  const phoneText = (text) => {
    setPhoneNumber(text);
  };

  /* --------------------------------- 인증번호 전송 -------------------------------- */
  const [msgIng, setMsgIng] = useState(false);

  const sendMsg = () => {
    if (phoneNumber.length >= 9) {
      setMsgIng(true); // input disable
      //전화번호 '-' 추가
      if (phoneNumber.length === 9) {
        setPhoneNumber(phoneNumber.replace(/(\d{2})(\d{3})(\d{4})/, "$1-$2-$3"));
      }
      if (phoneNumber.length === 10) {
        setPhoneNumber(phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3"));
      }
      if (phoneNumber.length === 11) {
        setPhoneNumber(phoneNumber.replace(/-/g, "").replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3"));
      }
    } else {
      // 입력값 9 미만 => 인증번호 전송 불가
      alert("인증번호를 정확히 입력해 주세요");
    }
  };

  /* ------------------------------ 인증번호 onchange ----------------------------- */
  const [number, setNumber] = useState("");

  const onchangeNumber = (text) => {
    setNumber(text);
  };

  //인증번호 전송 전까지 구현하였습니다.
  //페이지 라우터 구현을 할 시간이 부족하여 App.js App2.js에 각각 구현해두었습니다.


  return (
    <View style={styles.container}>
      <View>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <AntDesign name="left" size={30} color="black" />
          </View>
          <View style={styles.headerRight}>
            <Text style={styles.headerText}>간편 30초 가입</Text>
          </View>
        </View>
        <View style={styles.top}>
          <Text style={styles.topText}>2. 안전한 세모스 이용을 위한 본인 인증</Text>
          <Text style={styles.topText}>2/2</Text>
        </View>
        <View style={styles.bottom}>
          <View style={styles.inputBox}>
            <View style={styles.iconBox}>
              {name.length >= 1 ? <Entypo name="circle-with-cross" size={24} color="#6666" /> : null}
              {isName ? (
                <AntDesign style={styles.icon} name="checkcircleo" size={24} color="#1e90ff" />
              ) : name.length >= 2 ? (
                <AntDesign style={styles.icon} name="exclamationcircleo" size={24} color="red" />
              ) : null}
            </View>
            <TextInput
              style={[styles.input, name.length === 1 && styles.inputLineDark, isName ? styles.inputLineTrue : name.length >= 2 ? styles.inputLineFalse : null]}
              multiline={true}
              scrollEnabled={true}
              maxLength={15}
              onChangeText={textValid}
              value={name}
              placeholder="인증을 위해 본명을 입력해 주세요."
            />
            {!isName && name.length >= 2 ? <Text style={styles.errorMsg}>올바른 이름으로 작성해 주세요!</Text> : null}
          </View>
          <View style={styles.bottomBox}>
            <View>
              <TextInput
                keyboardType="phone-pad"
                style={[styles.input, msgIng ? styles.buttonTextNo : phoneNumber.length >= 1 ? styles.inputLineDark : null]}
                maxLength={13}
                onChangeText={phoneText}
                value={phoneNumber}
                placeholder="전화번호를 입력해 주세요"
                editable={!msgIng}
              />
            </View>
            <View style={styles.msgButtonBox}>
              <TouchableHighlight style={[styles.msgButton, msgIng ? styles.msgButtonIng : null]} activeOpacity={0.6} underlayColor="#DDDDDD" onPress={sendMsg}>
                <Text style={[styles.buttonText, msgIng ? styles.msgTextIng : null]}>{msgIng ? "전송완료" : "인증번호 전송"}</Text>
              </TouchableHighlight>
            </View>
          </View>
          {/* 인증번호 발송 시 */}
          {msgIng && (
            <View style={styles.bottomBox}>
              <View>
                <TextInput
                  keyboardType="phone-pad"
                  style={[styles.input, number.length >= 1 ? styles.inputLineDark : null]}
                  maxLength={6}
                  onChangeText={onchangeNumber}
                  value={number}
                />
              </View>
              <View style={styles.msgButtonBox}>
                <TouchableHighlight style={styles.msgButton} activeOpacity={0.6} underlayColor="#DDDDDD" onPress={() => console.log("인증번호 검사")}>
                  <Text style={styles.buttonText}>인증 완료</Text>
                </TouchableHighlight>
              </View>
            </View>
          )}
        </View>
      </View>
      <TouchableHighlight
        style={[styles.buttonBox, styles.buttonNo]}
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
        onPress={() => {
          // alert("가입 완료");
        }}
      >
        <Text style={[styles.buttonText, styles.buttonTextNo]}>{msgIng || name.length > 0 ? "🎉 가입 완료 🎉" : "작성을 완료해 주세요!"}</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "space-between",
  },
  header: {
    borderBottomColor: "#eeee",
    paddingBottom: 10,
    borderBottomWidth: 5,
    position: "relative",
    zIndex: 0,
    width: "100%",
    alignItems: "center",
    marginTop: 50,
  },
  headerLeft: {
    position: "absolute",
    backgroundColor: "#FFF",
    top: 0,
    left: 15,
    zIndex: 50,
  },
  headerRight: {
    width: "100%",
    textAlign: "center",
  },
  headerText: {
    width: "100%",
    color: "black",
    fontSize: 28,
    fontWeight: "500",
    textAlign: "center",
    justifyContent: "center",
  },
  top: {
    marginRight: 30,
    marginLeft: 30,
    marginTop: 10,
    textAlign: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  topText: {
    color: "#1e90ff",
    fontSize: 22,
    paddingTop: 10,
    marginTop: 10,
    marginBottom: 20,
    fontWeight: "500",
  },
  /* ---------------------------------- form ---------------------------------- */
  bottom: {
    margin: 30,
  },
  inputBox: {
    position: "relative",
    zIndex: 0,
  },
  input: {
    padding: 15,
    color: "black",
    borderColor: "#bbb",
    borderWidth: 1,
    borderRadius: 8,
    fontSize: 18,
  },
  errorMsg: {
    borderColor: "red",
    marginTop: 10,
    color: "red",
  },
  iconBox: {
    position: "absolute",
    backgroundColor: "#FFF",
    top: 10,
    right: 15,
    padding: 8,
    textAlign: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#FFF",
  },
  icon: {
    marginLeft: 10,
  },
  inputLineDark: {
    borderColor: "black",
  },
  inputLineTrue: {
    borderColor: "#1e90ff",
  },
  inputLineFalse: {
    borderColor: "red",
  },
  bottomBox: {
    marginTop: 25,
    position: "relative",
  },
  buttonText: {
    fontSize: 18,
    textAlign: "center",
    zIndex: -1,
    color: "#fff",
  },
  buttonBox: {
    margin: 30,
    padding: 20,
    fontSize: 30,
    borderRadius: 10,
    zIndex: -1,
  },
  msgButton: {
    paddingLeft: 20,
    paddingRight: 20,
    padding: 10,
    color: "#fff",
    fontSize: 30,
    backgroundColor: "#1e90ff",
    borderRadius: 7,
  },
  buttonTextOk: {
    color: "#fff",
  },
  buttonTextNo: {
    color: "#6666",
  },
  msgButtonBox: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  msgButtonIng: {
    backgroundColor: "#6666",
  },
  buttonOk: {
    backgroundColor: "#1e90ff",
  },
  buttonNo: {
    backgroundColor: "#eeee",
    borderColor: "#6666",
    borderWidth: 1,
  },
});

export default App;