import { Action } from "@ngrx/store";

function reducer(state = 10, action:Action){

    switch(action.type ){
      case  "AUMENTAR"  :  return state += 1;
      case  "DECREMENTAR"  :  return state -= 1;
   // case  "MULTIPLICAR"  :  return state * action.payload;
    }
    return state;
  }
  