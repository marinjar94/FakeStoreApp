import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  index: undefined;
  ProductList: undefined;
  ProductDetails: { id: number };
};

export type NavigationProp = StackNavigationProp<RootStackParamList>;