import {FETCH_WEATHER} from '../actions/index';

export default function(state = [], action) {
    
    switch(action.type) {
        case FETCH_WEATHER:
       // return state.concat([action.payload.data]);
        //es6 syntax
        return [ action.payload.data, ...state ]; 
      
      // ^ [city, city, city] and not [city, city, [city, city]]
    }
    return state;
}



//each time add a new city to the state...dont manipulate state like state.push...by concat we are not mutating the state
//returning a new instance of state all the older plus new