const initialState = {
    jogs: []
    // {
    //     'id': 8,
    //     'user_id': '6',
    //     'distance': 500.0,
    //     'time': 500,
    //     'data': 2550776400,
    // },
    // {
    //     'id': 9,
    //     'user_id': '10',
    //     'distance': 800.0,
    //     'time': 700,
    //     'data': 2550776111,
    // },
    // {
    //     'id': 10,
    //     'user_id': '6',
    //     'distance': 500.0,
    //     'time': 500,
    //     'data': 2550776400,
    // },
    // {
    //     'id': 11,
    //     'user_id': '10',
    //     'distance': 800.0,
    //     'time': 700,
    //     'data': 2550776111,
    // }],

}
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'JOGS_LOADED':

        break;
        default: return state;
    }
}
export default reducer;