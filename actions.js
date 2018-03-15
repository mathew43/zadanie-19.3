import uuid from uuid;

const ADD_COMMENT = 'ADD_COMMENT';
const REMOVE_COMMENT = 'REMOVE_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

// remove

const remove = function (id){
  return {
    type: REMOVE_COMMENT,
    id
  }
}

const boundRemoveComment = text => dispatch(removeComment(id));

// add

const add = function (text, author){
  return {
    type: ADD_COMMENT,
    id: (new Date()).getTime(),
    text,
    author
  }
}

const boundAddComment = text => dispatch(addComment(text));

// edit

const edit = function(id, text){
  return{
    type: EDIT_COMMENT,
    text,
    id
  }
}

const boundEditComment = (text, id) => dispatch(editComment(text, id));

//thumb up

const thumbUp = function(id, likes){
  return{
    type: THUMB_UP_COMMENT,
    id,
    likes: ++likes
  }

}

const boundThumbUpComment = (id, likes) => dispatch(ThumbUpComment(id, likes));

// thumb down

const thumbDown = function(id, dislikes){
  return{
    type: THUMB_DOWN_COMMENT,
    id,
    dislikes: ++dislikes
  }
}

const boundThumbUpComment = (id, dislikes) => dispatch(ThumbDownComment(id, dislikes));
