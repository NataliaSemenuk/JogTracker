export const initialState = {
    jogs: [],
    jogToChange: {},
}
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'LOAD_JOGS': 
            return {
                ...state,
                jogs: action.payload,
            };
        case 'CHANGE_JOG':
            console.log('red', action.payload);
            return {
                ...state,
                jogToChange:  action.payload, 
            };
        
        default: return state;
    }
}
export default reducer;