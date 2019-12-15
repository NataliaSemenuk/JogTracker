const initialState = {
    jogs: [],
}
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'LOAD_JOGS': 
            return {
                jogs: action.payload,
            };
        
        default: return state;
    }
}
export default reducer;