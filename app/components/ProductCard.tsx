import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface ProductCardProps {
  title: string;
  price: number;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, price, image }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>${price.toFixed(2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
    margin: 8,
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  price: {
    fontSize: 14,
    color: '#888',
  },
});

export default ProductCard;
