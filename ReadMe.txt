1. When does the code in a loader function run?

Before the route change happens and the component for that route loads


2. What are some benefits of using a data loader function
   instead of fetching our data in a useEffect in a component?
    
    * Don't need to worry about handling loading state in the 
      component
    * Don't need to have lengthy/confusing useEffect code in our
      component
    * Don't need to handle error state in the component
   
   
3. What change do we need to make to our BrowserRouter before
   we can use loaders (or any of the new data-layer API features)
   in our app?
   
   Get rid of the BrowserRouter component and use 
   createBrowserRouter() instead. Can use 
   createRoutesFromElements() to make the transition a bit easier
   
   
   
4. What are the steps we need to take in order to use
   a loader on any given route?
   
   1. Define and export a loader function
   2. Import the loader and pass it to the route we're wanting
      to fetch data for
   3. Use the useLoaderData() hook to get the data from the loader
      function.


1. How did we change our route definitions in order to 
   "protect" certain routes from an un-logged-in user?

Wrapped the routes we wanted to protect in a Layout route
that contains logic to redirect someone if they're not logged
in
   
   
2. What component can we use to automatically send someone
   to a different route in our app?

<Navigate to="/login" />


3. What component can we render if the user IS logged in?

<Outlet />
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBM7MTaKt8bIwZ7qAOk_DfGmqu7ss-HYXE",
  authDomain: "vanlife-2922e.firebaseapp.com",
  projectId: "vanlife-2922e",
  storageBucket: "vanlife-2922e.appspot.com",
  messagingSenderId: "828182793783",
  appId: "1:828182793783:web:48778f8fcf091c6f4a39b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);