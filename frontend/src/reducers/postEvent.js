const PostEvent = function(state = {}, action) {
  switch (action.type) {
    case "POST_EVENT": {
      console.log("working");
      return state;
    }
    default:
      return state;
  }
};

export default PostEvent;
