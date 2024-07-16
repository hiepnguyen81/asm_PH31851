/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {
  Alert,
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {S, TS, color, ms} from '../themes';
import {AppButton} from '../component/app-button';

const NoteScreen = () => {
  const [list, setList] = useState([]);
  const [dateCreate, setDay] = useState('');
  const [thankText, setInputThank] = useState('');
  const [gratitude, setInputGratitude] = useState('');
  const apiUrl = 'https://662609fd052332d5532164eb.mockapi.io/ASM/noted';

  const getList = () => {
    fetch(apiUrl, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setList(data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    getList();
  }, []);

  const addNote = () => {
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        dateCreate: dateCreate,
        thankText: thankText,
        gratitude: gratitude,
      }),
    })
      .then(() => {
        Alert.alert('Thêm thành công');
        getList();
        setDay('');
        setInputThank('');
        setInputGratitude('');
      })
      .catch(err => {
        console.log(err);
      });
  };

  const deleteNote = (id: any) => {
    fetch(`${apiUrl}/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        Alert.alert('Xóa thành công !');
        getList();
      })
      .catch(err => {
        console.log(err);
      });
  };

  const renderItem = ({item}: {item: any}) => {
    return (
        <View
          style={{
            borderRadius: 23,
            backgroundColor: color.backgroundItemNoted,
            padding: ms(12),
            rowGap: ms(12),
            marginBottom: ms(10),
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              color: color.white,
              marginTop: 10,
              fontSize: 17,
            }}>Ngày: {item.dateCreate}</Text>
          <Text style={{color: color.white}}>Lời cảm ơn: {item.thankText}</Text>
          <Text style={{color: color.white}}>Lời biết ơn: {item.gratitude}</Text>
          <AppButton
          title="Xoá"
          customStyleButton={styles.buttonDelete}
          onPress={() => {
            deleteNote(item.id);
          }}/>
        </View>
    );
  };

  return (
    <View style={{backgroundColor: '#0C0F14', height: '100%'}}>
      <StatusBar
        barStyle="light-content"
        animated={true}
        backgroundColor={'#0C0F14'}
      />
      <SafeAreaView>
        <View style={{paddingHorizontal: ms(15), paddingVertical: ms(10)}}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={{...TS.textBaseBold, fontSize: 25, color: 'white'}}>
              Ghi chú
            </Text>
            <Text style={{...TS.textXXlBold, color: '#ff6632'}}>
              Thêm ghi chú nhắc nhở bản thân
            </Text>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: 20,
                marginTop: 20,
              }}>
              Lời biết ơn, hạnh phúc
            </Text>
            <View style={styles.textInputContent}>
              <TextInput
                style={styles.TextInput}
                placeholderTextColor="rgba(82, 85, 90, 1)"
                placeholder="Nhập ngày"
                value={dateCreate}
                onChangeText={text => setDay(text)}
              />
              <TextInput
                style={styles.textInput}
                placeholderTextColor="rgba(82, 85, 90, 1)"
                placeholder="Nhập lời cảm ơn"
                value={thankText}
                onChangeText={text => setInputThank(text)}
                numberOfLines={4}
                multiline
              />
              <TextInput
                style={styles.textInput}
                placeholderTextColor="rgba(82, 85, 90, 1)"
                placeholder="Nhập lời biết ơn"
                value={gratitude}
                onChangeText={text => setInputGratitude(text)}
                numberOfLines={4}
                multiline
              />
            </View>
            <AppButton title="Thêm" onPress={addNote} />
            <View style={{marginTop: 30, flexDirection: 'row'}}>
              <FlatList
              showsHorizontalScrollIndicator={false}
                data={list}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
              />
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default NoteScreen;

const styles = StyleSheet.create({
  button: {
    width: 37,
    height: 37,
    borderRadius: 10,
  },
  TextInput: {
    width: '100%',
    height: 48,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'white',
    color: color.white,
    paddingLeft: 12,
  },
  footer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  buttonAdd: {
    alignSelf: 'center',
    backgroundColor: '#FF6633',
    borderRadius: 15,
    alignItems: 'center',
  },
  buttonDelete: {
    backgroundColor: '#FF6633',
    borderRadius: 25,
    alignItems: 'center',
    padding: ms(12),
  },
  TextAdd: {
    ...TS.textXXlBold,
    color: color.white,
    ...S.centerAll,
  },
  textInput: {
    height: 100,
    width: '100%',
    borderColor: color.white,
    borderWidth: 1,
    padding: 8,
    borderRadius: ms(10),
    color: color.white,
  },
  textInputContent: {
    marginVertical: ms(20),
    rowGap: ms(20),
    flexDirection: 'column',
  },
});
