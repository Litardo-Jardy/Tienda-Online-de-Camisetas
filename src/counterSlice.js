import { createSlice } from '@reduxjs/toolkit';


const initialState = []
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    
    //Realiza la funcion de agregar alememtos al carrito
          setLittleCar: (state,action) => {
              const actions = action.payload;
              const search = state.filter(num => num.id === actions.id).length;

              if (search < 1){
                  state.push(action.payload);
              }else{
                  let getAmount = state.find(num => num.id === actions.id);
                  getAmount.amount +=1;}},

          deleteComponentLitleCar: (state,action) =>{
               const actions = action.payload;
               let getElement = state.find(num => num.id === actions);
               
               if ( getElement.amount === 0){
                  state.splice(state.indexOf(getElement),1)
               }else{
                getElement.amount -= 1;}},
   
           addLittleCar: (state, action) => {
              const actions = action.payload;
              let getElement = state.find(num => num.id === actions);
              
              getElement.amount += 1;}
            
    }

});

export const { setLittleCar, deleteComponentLitleCar, addLittleCar } = counterSlice.actions;

 export default counterSlice.reducer;