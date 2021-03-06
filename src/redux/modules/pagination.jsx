import { GET as GET_POST } from 'redux/modules/post';
import { GET as GET_LIST } from 'redux/modules/list';

const reducer = (state = {
    min: 1,
    max: 1,
    now: 1,
}, action) => {
    switch (action.type) {
    case GET_POST:
        return Object.assign({}, state, {
            now: action.post.id,
        });
    case GET_LIST:
        return Object.assign({}, state, {
            max: action.data.length,
        });
    default:
        return state;
    }
};

export default reducer;
