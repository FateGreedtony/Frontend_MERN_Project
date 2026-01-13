const BACKEND_BASEURL = (import.meta.env.VITE_REACT_APP_BACKEND_BASEURL || "http://localhost:4000").replace(/\/+$/, "");
const api = (path) => `${BACKEND_BASEURL}${path.startsWith("/") ? path : `/${path}`}`;

export const URL_SIGNIN = api("/api/auth/signin");
export const URL_PRODUCTS = api("/api/products");
export const URL_TRANSACTIONS = api("/api/transactions");