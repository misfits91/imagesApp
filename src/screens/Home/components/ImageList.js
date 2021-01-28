import React, { useRef } from 'react';
import {
  FlatList,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  View
} from 'react-native';

const { width } = Dimensions.get('screen');
const imageW = width * 0.7;
const imageH = imageW * 1.54;

export default function({ data = [] }) {
  const keyExtractor = item => `${item.id}`;
  
  const renderItem = ({ item: { image, title, description } }) => {
    return <View style={styles.item}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: image }}
          style={styles.image}
        />
        <View style={styles.descriptionContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
    </View>
  };

  return (
    <FlatList
      data={data}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
    />
  )
};

const styles = StyleSheet.create({
  item: {
    width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    height: imageH,
    width: imageW,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,
  },
  image: {
    height: imageH,
    width: imageW,
    resizeMode: 'cover',
    borderRadius: 16
  },
  descriptionContainer: {
    position: 'absolute',
    left: 10,
    right: 10,
    bottom: 10
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textShadowColor: 'rgba(255, 255, 255, 0.75)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 20,
  },
  description: {
    color: 'white',
    fontSize: 18,
    textShadowColor: 'rgba(255, 255, 255, 0.75)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 20,
  }
});
