const PostEvent = function(state = {}, action) {
  switch (action.type) {
    case "POST_EVENT": {
      return { ...state, PostEvent: [state.events, action.payload] };
    }
    default:
      return state;
  }
};

export default PostEvent;
