import React from 'react';
import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import {Button, CardSection} from './common';
import {selectedLibrary} from '../actions';
import {useDispatch, useSelector} from 'react-redux';

const ListItem = ({library}) => {
  const {item} = library;
  const {titleStyle} = styles;
  const dispatch = useDispatch();
  const selectedLibraryId = useSelector(
    (libraries) => libraries.selectedLibrary,
  );
  console.log(selectedLibraryId);

  const renderDescription = () => {
    if(item.id === selectedLibraryId) {
      return (
        <View>
          <Text>{item.description}</Text>
        </View>
      );
    }
  }
  

  return (
    <TouchableWithoutFeedback
      onPress={() => dispatch(selectedLibrary(item.id))}>
      <View>
        <CardSection>
          <Text style={titleStyle}>{item.title}</Text>
        
        </CardSection>
        {renderDescription()}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  },
});
