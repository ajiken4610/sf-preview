import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import { createPinia } from "pinia";

createApp(App).use(createPinia()).use(router).mount("#app");

/* initialize firebase */

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNzVocg43q4J4Iag41wtvB-D1lFzhnt4k",
  authDomain: "sfsitepreview.firebaseapp.com",
  projectId: "sfsitepreview",
  storageBucket: "sfsitepreview.appspot.com",
  messagingSenderId: "802442240493",
  appId: "1:802442240493:web:ef024937e1d26ef4e0c7e4",
  measurementId: "G-J3EJQD5QQ9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import { useAnalyticsStore } from "./store";
const analyticsStore = useAnalyticsStore();
analyticsStore.analytics = analytics;

// Initialize appcheck
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";
// Pass your reCAPTCHA v3 site key (public key) to activate(). Make sure this
// key is the counterpart to the secret key you set in the Firebase console.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider("6LfwcpcgAAAAAIyqwzAW6c0K-6CICLOUR4mYrFfy"),

  // Optional argument. If true, the SDK automatically refreshes App Check
  // tokens as needed.
  isTokenAutoRefreshEnabled: true,
});
