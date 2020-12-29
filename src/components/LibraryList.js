import React from 'react';
import {StyleSheet, FlatList} from 'react-native';
import ListItem from './ListItem';
import {useSelector} from 'react-redux';

const LibraryList = () => {

  const libraries = useSelector(state => state.libraries);
  const renderItem = (libraries) => {
    
  return <ListItem library={libraries}/> ;
      
  };

  return (
    <FlatList 
     data={libraries}
     keyExtractor={libraries => (libraries.id).toString()}
     renderItem={renderItem}
    />
  );
};

export default LibraryList;

const styles = StyleSheet.create({});