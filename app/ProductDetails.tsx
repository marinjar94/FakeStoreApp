import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from './store';
import { fetchProductStart, fetchProductSuccess, fetchProductFailure } from './reducers/productDetailsSlice';
import { RootStackParamList } from './types';

type ProductDetailsRouteProp = RouteProp<RootStackParamList, 'ProductDetails'>;

const ProductDetails: React.FC = () => {
  const route = useRoute<ProductDetailsRouteProp>();
  const { id: id } = route.params;
  const dispatch = useDispatch<AppDispatch>();
  const { product, loading, error } = useSelector((state: RootState) => state.productDetails);

  useEffect(() => {
    const fetchProduct = async () => {
      dispatch(fetchProductStart());
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        dispatch(fetchProductSuccess(data));
      } catch (error) {
        dispatch(fetchProductFailure(error instanceof Error ? error.message : 'An error occurred'));
      }
    };

    fetchProduct();
  }, [dispatch, id]);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  if (!product) {
    return <Text>No product found</Text>;
  }

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>${product.price}</Text>
        <Text style={styles.description}>{product.description}</Text>
        <Text style={styles.category}>Category: {product.category}</Text>
        <Text style={styles.rating}>Rating: {product.rating.rate} ({product.rating.count} reviews)</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
  details: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  price: {
    fontSize: 20,
    color: '#2ecc71',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    marginBottom: 16,
    lineHeight: 24,
  },
  category: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  rating: {
    fontSize: 14,
    color: '#666',
  },
});

export default ProductDetails;