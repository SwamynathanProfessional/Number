import React from 'react';
import {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {FlatList} from 'react-native';
import {CATEGORIES} from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';
const ExitPage = ({route, navigation}) => {
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    try {
      AsyncStorage.getItem('UserName').then(value => {
        if (value != null) {
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const renderGridItem = itemData => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        imageUrl={itemData.item.imageUrl}
        onSelect={async () => {
          try {
            await AsyncStorage.setItem('UserName', 'Screen_C');
            await AsyncStorage.setItem('UserSelect', itemData.item.title);
            navigation.navigate('Screen_C', itemData.item.title);
          } catch (error) {
            console.log(error);
          }
        }}
      />
    );
  };
  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      numColumns={2}
      renderItem={renderGridItem}
    />
  );
};

export default ExitPage;
