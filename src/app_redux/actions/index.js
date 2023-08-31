import { INCREMENT_TYPE, DECREMENT_TYPE } from '../typeConstant';

// This is the ACTION CREATOR.
//  AC are PURE FUNCTIONs.
//  It gives a PREDICTABLE OUTPUT.
export const typeIncrement=()=>{
    return {
        type: INCREMENT_TYPE
    }
}

export const typeDecrement=()=>{
    return {
        type: DECREMENT_TYPE
    }
}
