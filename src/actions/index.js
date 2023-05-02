import _ from 'lodash'
import jsonPlaceholders from '../apis/jsonPlaceholders'

export const fetchPostsAndUsers = () => async (dispatch , getState) => {
   await dispatch(fetchPosts())
        
    _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value()
} 

export const fetchPosts = () => async(dispatch) => {
    const response = await jsonPlaceholders.get('/posts')

    dispatch({type : 'FETCH_POSTS' , payload : response.data})
    };

export const fetchUser = id => async dispatch => _fetchUser(id , dispatch);
const _fetchUser = _.memoize(async (id , dispatch) => {
    const response = await jsonPlaceholders.get(`/users/${id}`)
     dispatch({type : 'FETCH_USER' , payload : response.data})
})
  
 