import axios from "axios";

const api = axios.create({
    baseURL: "https://api.cargo525.com",
    timeout: 1000 * 30,
    headers: {
        "X-Requested-With": "XMLHttpRequest",
    },
});

api.interceptors.request.use((config) => {
    config.headers.Authorization = window.localStorage.getItem("token");
    return config;
});

api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 403) {
            const currentPath = window.location.pathname;
            // Перенаправляем на страницу входа только если мы не на главной странице
            if (currentPath !== "/" && currentPath !== "/login") {
                localStorage.removeItem("token");
                window.location.href = "/login";
            }
        }
        return Promise.reject(error);
    }
);

export default api;

// server {
//     server_name cargo525.com www.cargo525.com;


//     location / {
//         root /var/www/cargo;
//         index  index.html index.htm;
//         proxy_http_version 1.1;
//         proxy_set_header Upgrade $http_upgrade;
//         proxy_set_header Connection 'upgrade';
//         proxy_set_header Host $host;
//         proxy_cache_bypass $http_upgrade;
//         try_files $uri $uri/ /index.html;
//     }
// }
   
   
// server {
//     server_name api.cargo525.com;


//     location / {
//         proxy_pass http://77.243.80.126:5025;
//         proxy_http_version 1.1;
//         proxy_set_header Upgrade $http_upgrade;
//         proxy_set_header Connection 'upgrade';
//         proxy_set_header Host $host;
//         proxy_cache_bypass $http_upgrade;
//     }
// }
   