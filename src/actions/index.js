import _ from 'lodash'
import jsonPlaceholders from '../apis/jsonPlaceholders'

export const fetchPostsAndUsers = () => async (dispatch , getState) => {
   await dispatch(fetchPosts())
    const userIds = _.uniq(_.map(getState().posts , 'userId'))
    userIds.forEach(id => (fetchUser(id)))
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
  
 