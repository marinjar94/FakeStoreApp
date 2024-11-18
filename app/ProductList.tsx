import React, { useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsStart, fetchProductsSuccess, fetchProductsFailure } from './reducers/productSlice';
import { RootState, AppDispatch } from './store';
import ProductCard from './components/ProductCard';

const ProductList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, products, error } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    const fetchProducts = async () => {
      dispatch(fetchProductsStart());
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        dispatch(fetchProductsSuccess(data));
      } catch (errpr) {
        if (errpr instanceof Error) {
          dispatch(fetchProductsFailure(errpr.message));
        } else {
          dispatch(fetchProductsFailure('An unknown error occurred.'));
        }
      }
    };

    fetchProducts();
  }, [dispatch]);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        renderItem={({ item }) => (
          <ProductCard title={item.title} price={item.price} image={item.image} id={item.id} />
        )}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  flatListContent: {
    paddingBottom: 16,
  },
});

export default ProductList;
