import { Stack } from 'expo-router';
import store from './store';
import { Provider } from 'react-redux';

export default function Layout() {
  return (
    <Provider store={store}>
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="ProductList" options={{ title: 'Products' }} />
    </Stack>
    </Provider>
  );
}