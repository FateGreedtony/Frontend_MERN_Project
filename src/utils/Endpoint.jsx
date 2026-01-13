const RAW_BACKEND_BASEURL = import.meta.env.VITE_REACT_APP_BACKEND_BASEURL || "http://localhost:4000";
const BACKEND_BASEURL = RAW_BACKEND_BASEURL.replace(/\/+$/, "");

const joinUrl = (baseUrl, path) => `${baseUrl.replace(/\/+$/, "")}/${String(path).replace(/^\/+/, "")}`;

export const URL_SIGNIN = joinUrl(BACKEND_BASEURL, "api/auth/signin");
export const URL_PRODUCTS = joinUrl(BACKEND_BASEURL, "api/products");
export const URL_TRANSACTIONS = joinUrl(BACKEND_BASEURL, "api/transactions");