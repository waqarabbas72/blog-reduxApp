import React from 'react'
import jsonPlaceholders from '../apis/jsonPlaceholders'

export const fetchPosts = async () => {
    const response = await jsonPlaceholders.get('/posts')
  return {
    type : 'FETCH_POSTS',
    payload : response
  }
}