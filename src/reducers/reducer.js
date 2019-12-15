const initialState = {
    jogs: [{        
        date: -62060601600,
        distance: 10,
        id: 353,
        time: 222,
        user_id: "3",
    }],
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