// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { createSlice , PayloadAction } from '@reduxjs/toolkit';

// Api Tutorial
// export const attractionApi = createApi({
//   reducerPath: 'attractionApi',
//   baseQuery: fetchBaseQuery({ baseUrl: 'https://www.melivecode.com/api' }),
//   endpoints: (builder) => ({
//     getAllAttraction : builder.query({
//       query: () => `/attractions`,
//     }),
//   }),
// })

// export const { useGetAllAttractionQuery } = attractionApi;

interface User {
  id : number,
  key : string,
  prefix : string,
  firstname : string,
  lastname : string,
  birthday : string,
  nationality : string,
  id_card_member : string,
  gender : string,
  phone_number : string,
  passport : string,
  salary : string
};


const userTestData : User [] = [
  {
    id : 1,
    key : "1",
    prefix : "นาย",
    firstname : "Jacob",
    lastname  : "Seed",
    birthday : "02-06-1999",
    nationality : "ไทย",
    id_card_member : "1101800874071",
    gender : "ผู้ชาย",
    phone_number : "0806808594",
    passport : "De-card",
    salary : "28000"
  },{
    id : 2,
    key : "2",
    prefix : "นางสาว",
    firstname : "Mary",
    lastname  : "Seed",
    birthday : "04-04-1997",
    nationality : "ต่างชาติ",
    id_card_member : "1121800874023",
    gender : "ผู้หญิง",
    phone_number : "0806807890",
    passport : "De-card",
    salary : "20000"
  }
];


// const usersData = localStorage.getItem('users') !== null ? JSON.parse(localStorage.getItem('users') || "") : "";


export const userSlice = createSlice({
    name : 'users',
    initialState : { value : userTestData },
    // initialState : { value : usersData },
    reducers : {
      addUser : (state , action : PayloadAction<User>) => {
        state.value.push(action.payload);
        localStorage.setItem('users' , JSON.stringify(state.value));
      },
      removeUser : (state , action : PayloadAction<User>) => {
        state.value = state.value.filter(user => user.key !== action.payload.key);
      },
      updateUser : (state , action : PayloadAction<User>) => {
        const updateUser = action.payload;
        state.value = state.value.map(user => user.id === action.payload.id ? {...user , updateUser} : user);
      },
    }
});

export const { addUser , removeUser , updateUser } = userSlice.actions;

export default userSlice.reducer;



// Complete Tutorial
// const initialState = {
//   value : 0,
//   name : "Cocoa"
// };

// export const counterSlice = createSlice({
//   name : 'counter',
//   initialState,
//   reducers : {
//     increment : (state) => {
//       state.value += 1;
//       state.name = "Jojo";
//     },
//     decrement : (state) => {
//       state.value -= 1;
//       state.name = "Coconut"
//     },
//   }
// });

// export const { increment , decrement } = counterSlice.actions;
// export default counterSlice.reducer;