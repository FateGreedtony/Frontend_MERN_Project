const BACKEND_BASEURL = (import.meta.env.VITE_REACT_APP_BACKEND_BASEURL || "http://localhost:4000");

export const URL_SIGNIN = `${BACKEND_BASEURL}/api/auth/signin`;
export const URL_PRODUCTS = `${BACKEND_BASEURL}/api/products`;
export const URL_TRANSACTIONS = `${BACKEND_BASEURL}/api/transactions`;