const initialState = 0;
// Reducer is the PURE FUNCTION
export const upDownReducer=(state = initialState, action)=>{
    switch(action.type){
        case 'INCREMENT':
            return state + 1; 
        case 'DECREMENT':
           return (state > 0) ? state - 1 : state;
        default : 
            return state;
    }
}