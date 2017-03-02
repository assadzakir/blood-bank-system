const INITIAL_DONOR_STATE ={
    isloaded:false,
    isProcessing:false,
    donorList:[
    ],
    donorDetails:{}
};

export var donorReducer = function (state= INITIAL_DONOR_STATE,action) {
    switch (action.type) {
        case "FETCH_DONORS":
            return Object.assign({}, state, { isloaded: true, donorList: action.payload });
        default:
            return state
    }
}


export var donorDetailsReducer = function (state= INITIAL_DONOR_STATE,action) {
    switch (action.type) {
        case "DONOR_DETAILS":
            return Object.assign({}, state, {donorDetails: action.payload });
        default:
            return state
    }
}