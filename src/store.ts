// import { configureStore } from '@reduxjs/toolkit';

// import { setupListeners } from '@reduxjs/toolkit/query';
// import { attractionApi  } from './services/users';

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./services/users";

// Complete Tutorial
// import counterReducer from './services/users';

// export const store = configureStore({
//   reducer: {
//     [attractionApi.reducerPath]: attractionApi.reducer,
//   },

//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(attractionApi.middleware),
// })

// setupListeners(store.dispatch);

// const store = configureStore({
//   reducer : {
//     users : userReducer
//   }
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

// export default store;

// const rootReducer = {
//   user : userReducer
// };

const store = configureStore({
  reducer : {
    users : userReducer
  }
});

export default store;

// Complete Tutorial
// const store = configureStore({
//   reducer : {
//     counter : counterReducer
//   }
// });

// export default store;

