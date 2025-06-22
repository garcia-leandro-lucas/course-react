
export const todoReducer = ( inicialState = [], action ) => {

    switch (action.type) {
        case 'ABC':
            throw new Error('Action.type = ABC no esta implementada.');
        break;
    
        default:

        return inicialState;
        break;
    }

};
