export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

interface FetchProductsRequestAction {
  type: typeof FETCH_PRODUCTS_REQUEST;
}

interface FetchProductsSuccessAction {
  type: typeof FETCH_PRODUCTS_SUCCESS;
  products: any[];
}

interface FetchProductsFailureAction {
  type: typeof FETCH_PRODUCTS_FAILURE;
  error: string;
}

export const fetchProductsRequest = (): FetchProductsRequestAction => ({
  type: FETCH_PRODUCTS_REQUEST,
});

export const fetchProductsSuccess = (products: any[]): FetchProductsSuccessAction => ({
  type: FETCH_PRODUCTS_SUCCESS,
  products,
});

export const fetchProductsFailure = (error: string): FetchProductsFailureAction => ({
  type: FETCH_PRODUCTS_FAILURE,
  error,
});

export type ProductActionTypes = FetchProductsRequestAction | FetchProductsSuccessAction | FetchProductsFailureAction;
