export function fetchComments(query){
  return(dispatch) => {
    dispatch({type: 'LOADING_COMMENTS'})
    fetch(`https://www.reddit.com/r/${query}/comments.json`)
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error('Invald User/Subreddit')
        }})
      .then(data =>
        {const comments = data.data.children.map(child => child.data.body)
        dispatch({type:'FETCH_COMMENTS', payload: comments})})
      .catch((err) => {
        dispatch({type:'THROW_ERROR', payload: err})
      })
  }
}
