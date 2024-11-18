export const FETCH_PRODUCT_DETAILS_REQUEST = 'FETCH_PRODUCT_DETAILS_REQUEST';
export const FETCH_PRODUCT_DETAILS_SUCCESS = 'FETCH_PRODUCT_DETAILS_SUCCESS';
export const FETCH_PRODUCT_DETAILS_FAILURE = 'FETCH_PRODUCT_DETAILS_FAILURE';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface FetchProductDetailsRequestAction {
  type: typeof FETCH_PRODUCT_DETAILS_REQUEST;
}

interface FetchProductDetailsSuccessAction {
  type: typeof FETCH_PRODUCT_DETAILS_SUCCESS;
  product: Product;
}

interface FetchProductDetailsFailureAction {
  type: typeof FETCH_PRODUCT_DETAILS_FAILURE;
  error: string;
}

export const fetchProductDetailsRequest = (): FetchProductDetailsRequestAction => ({
  type: FETCH_PRODUCT_DETAILS_REQUEST,
});

export const fetchProductDetailsSuccess = (product: Product): FetchProductDetailsSuccessAction => ({
  type: FETCH_PRODUCT_DETAILS_SUCCESS,
  product,
});

export const fetchProductDetailsFailure = (error: string): FetchProductDetailsFailureAction => ({
  type: FETCH_PRODUCT_DETAILS_FAILURE,
  error,
});

export type ProductDetailsActionTypes = FetchProductDetailsRequestAction | FetchProductDetailsSuccessAction | FetchProductDetailsFailureAction;