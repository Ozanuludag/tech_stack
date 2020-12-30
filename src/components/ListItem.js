import React, {useRef, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation,
  UIManager,
  Platform,
} from 'react-native';
import {Button, CardSection} from './common';
import {selectedLibrary} from '../actions';
import {useDispatch, useSelector} from 'react-redux';

const ListItem = ({library}) => {
  useEffect(() => {
    if (
      Platform.OS === 'android' &&
      UIManager.setLayoutAnimationEnabledExperimental
    ) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  });

  const {item} = library;
  const {titleStyle} = styles;
  const dispatch = useDispatch();
  const selectedLibraryId = useSelector(
    (libraries) => libraries.selectedLibrary,
  );

  const renderDescription = () => {
    if (item.id === selectedLibraryId) {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);

      return (
        <CardSection>
          <Text style={{flex: 1}}>{item.description}</Text>
        </CardSection>
      );
    }
  };

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
