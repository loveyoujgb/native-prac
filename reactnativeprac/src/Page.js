import React, {useState} from 'react';
import {
  TouchableHighlight,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {RadioButton} from 'react-native-paper';

const Page = () => {
  /* --------------------------------- 라디오 버튼 --------------------------------- */
  const [checked, setChecked] = useState(false);

  /* ---------------------------------- 드롭다운 ---------------------------------- */
  const [open, setOpen] = useState(false); //열렸을 때 여부
  const [value, setValue] = useState(false); //선택됐을 떄 여부
  const [items, setItems] = useState([
    {label: '10대', value: '10대'},
    {label: '20대', value: '20대'},
    {label: '30대', value: '30대'},
    {label: '40대', value: '40대'},
    {label: '50대', value: '50대'},
    {label: '60대 이상', value: '60대 이상'},
  ]);

  /* ------------------------------- 입력값 유효성 검사 ------------------------------ */
  const [nickname, setNickname] = useState('');
  const [isNickname, setIsNickname] = useState(false);

  const textValid = text => {
    const nicknameValid = /^([ㄱ-ㅎㅏ-ㅣ가-힣]){2,15}$/; //한글 자음 모음 포함, 2-15자
    if (nicknameValid.test(text)) {
      setIsNickname(true);
    } else {
      setIsNickname(false);
    }
    setNickname(text);
  };

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            {/* <AntDesign name="left" size={30} color="black" /> */}
          </View>
          <View style={styles.headerRight}>
            <Text style={styles.headerText}>간편 30초 가입</Text>
          </View>
        </View>
        <View style={styles.top}>
          <Text style={styles.topText}>
            1. 원활한 세모스 사용을 위한 정보기입
          </Text>
          <View style={styles.topRightBox}>
            <Text style={styles.topText}>1</Text>
            <Text style={styles.topTextRight}>/2</Text>
          </View>
        </View>
        <View style={styles.bottom}>
          <View style={styles.inputBox}>
            <Text
              style={[
                styles.inputText,
                isNickname
                  ? styles.inputTrue
                  : nickname.length >= 2
                  ? styles.inputFalse
                  : null,
              ]}>
              닉네임
            </Text>
            {isNickname ? (
              // <AntDesign style={styles.icon} name="checkcircleo" size={24} color="#1e90ff" />
              <Text>야아</Text>
            ) : nickname.length >= 2 ? (
              // <Entypo style={styles.icon} name="circle-with-cross" size={24} color="#6666" />

              <Text>여여</Text>
            ) : null}

            <TextInput
              style={[
                styles.input,
                nickname.length === 1 && styles.inputLineDark,
                isNickname
                  ? styles.inputLineTrue
                  : nickname.length >= 2
                  ? styles.inputLineFalse
                  : null,
              ]}
              maxLength={15}
              onChangeText={textValid}
              value={nickname}
              placeholder="2글자 이상 15글자 이하의 한글로 작성해 주세요!"
            />
            {!isNickname && nickname.length >= 2 ? (
              <Text style={styles.errorMsg}>
                닉네임에 영어, 띄어쓰기 및 특수문자는 포함할 수 없습니다.
              </Text>
            ) : null}
          </View>
          <View style={styles.bottomBox}>
            <View style={styles.dropdownBox}>
              <DropDownPicker
                dropDownContainerStyle={{
                  borderColor: '#6666',
                }}
                placeholderStyle={{
                  color: '#6666',
                }}
                placeholder="연령대 선택"
                maxHeight={300}
                style={[styles.dropdown, value ? styles.inputLineTrue : null]}
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
              />
            </View>
            <View style={styles.radioBox}>
              <Text style={styles.bottom}>남</Text>
              <RadioButton
                uncheckedColor="#6666"
                color="#1e90ff"
                value="man"
                status={checked === 'man' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('man')}
              />
              <Text style={styles.bottom}>여</Text>
              <RadioButton
                uncheckedColor="#6666"
                color="#1e90ff"
                value="woman"
                status={checked === 'woman' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('woman')}
              />
            </View>
          </View>
        </View>
      </View>
      <TouchableHighlight
        style={[
          styles.buttonBox,
          isNickname && value && checked ? styles.buttonOk : styles.buttonNo,
        ]}
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
        onPress={() => {
          if (isNickname && value && checked) {
            alert('페이지 전환');
          }
        }}>
        <Text
          style={[
            styles.buttonText,
            isNickname && value && checked
              ? styles.buttonTextOk
              : styles.buttonTextNo,
          ]}>
          다음 단계로
        </Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'space-between',
  },
  header: {
    borderBottomColor: '#eeee',
    paddingBottom: 10,
    borderBottomWidth: 5,
    position: 'relative',
    zIndex: 0,
    width: '100%',
    alignItems: 'center',
    marginTop: 50,
  },
  headerLeft: {
    position: 'absolute',
    backgroundColor: '#FFF',
    top: 0,
    left: 15,
    zIndex: 50,
  },
  headerRight: {
    width: '100%',
    textAlign: 'center',
  },
  headerText: {
    width: '100%',
    color: 'black',
    fontSize: 28,
    fontWeight: '500',
    textAlign: 'center',
    justifyContent: 'center',
  },
  top: {
    marginRight: 30,
    marginLeft: 30,
    marginTop: 10,
    textAlign: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  topText: {
    color: '#1e90ff',
    fontSize: 22,
    paddingTop: 10,
    marginTop: 10,
    marginBottom: 20,
    fontWeight: '500',
  },
  topRightBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  topTextRight: {
    color: '#6666',
    fontSize: 22,
    paddingTop: 10,
    marginTop: 10,
    marginBottom: 20,
    fontWeight: '500',
  },
  bottom: {
    margin: 30,
  },
  input: {
    padding: 15,
    color: 'black',
    borderColor: '#bbb',
    borderWidth: 1,
    borderRadius: 8,
    fontSize: 18,
  },
  icon: {
    position: 'absolute',
    backgroundColor: '#FFF',
    top: 10,
    right: 15,
    padding: 8,
  },
  dropdown: {
    padding: 15,
    borderColor: '#bbb',
    borderWidth: 1,
    borderRadius: 8,
    fontSize: 18,
  },

  dropdownBox: {
    width: '50%',
  },
  bottomBox: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    fontSize: 18,
  },
  buttonText: {
    fontSize: 18,
    textAlign: 'center',
    zIndex: -1,
  },
  buttonBox: {
    margin: 30,
    padding: 20,
    fontSize: 30,
    borderRadius: 10,
    zIndex: -1,
  },
  buttonOk: {
    backgroundColor: '#1e90ff',
  },
  buttonNo: {
    backgroundColor: '#eeee',
    borderColor: '#6666',
    borderWidth: 1,
  },
  buttonTextOk: {
    color: '#fff',
  },
  buttonTextNo: {
    color: '#6666',
  },
  inputBox: {
    position: 'relative',
    zIndex: 0,
  },
  inputText: {
    position: 'absolute',
    backgroundColor: '#FFF',
    top: -15,
    left: 25,
    padding: 8,
    zIndex: 50,
  },
  inputTrue: {
    color: '#1e90ff',
  },
  inputFalse: {
    color: 'red',
  },
  inputLineTrue: {
    borderColor: '#1e90ff',
  },
  inputLineFalse: {
    borderColor: 'red',
  },
  inputLineDark: {
    borderColor: 'black',
  },
  errorMsg: {
    borderColor: 'red',
    marginTop: 10,
    color: 'red',
  },
  labelStyle: {
    color: 'red',
  },
  checkbox: {
    margin: 8,
    borderRadius: 50,
  },
  radioBox: {
    width: '50%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingRight: 50,
    marginLeft: 25,
  },
});

export default Page;
