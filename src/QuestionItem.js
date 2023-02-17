import React from 'react';
import {View, Text, Dimensions, FlatList, TouchableOpacity} from 'react-native';

const {height, width} = Dimensions.get('window');
const QuestionItem = ({data, selectedOption}) => {
  return (
    <View style={{width: width}}>
      <Text
        style={{
          fontSize: 25,
          fontWeight: '600',
          color: 'black',
          fontFamily: 'Times New Roman',
          marginLeft: 20,
          marginRight: 20,
        }}>
        {'Question:   ' + data.question}
      </Text>
      <View style={{marginTop: 20}}>
        <FlatList
          data={data.Options}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                style={{
                  width: '90%',
                  height: 60,
                  elevation: 3,
                  backgroundColor: data.marked == index + 1 ? '#03a9f4' : '#fff',
                  marginTop: 10,
                  marginBottom: 10,
                  alignSelf: 'center',
                  alignItems: 'center',
                  paddingLeft: 10,
                  paddingRight: 10,
                  flexDirection: 'row',
                }}
                onPress={() => {
                  selectedOption(index + 1);
                }}>
                <View
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 15,
                    backgroundColor: data.marked == index + 1 ? '#ffeb3b' : '#37d67a',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{fontWeight: '600', color: '#000', fontFamily: 'Times New Roman'}}>
                    {index == 0
                      ? 'A'
                      : index == 1
                      ? 'B'
                      : index == 2
                      ? 'C'
                      : 'D'}
                  </Text>
                </View>
                <Text style={{fontSize: 18, fontWeight: '600', marginLeft: 20, marginRight: 5, color:data.marked == index + 1 ?'#fff':'#000', flex: 1, flexWrap: 'wrap'}}>
                  {item}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

export default QuestionItem;
