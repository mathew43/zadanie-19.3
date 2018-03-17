import uuid from uuid;

export const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

// remove

const remove = function (id){
  return {
    type: REMOVE_COMMENT,
    id
  }
}


// add

const add = function (text, author){
  return {
    type: ADD_COMMENT,
    id: (new Date()).getTime(),
    text,
    author
  }
}


// edit

const edit = function(id, text){
  return{
    type: EDIT_COMMENT,
    text,
    id
  }
}


//thumb up

const thumbUp = function(id, likes){
  return{
    type: THUMB_UP_COMMENT,
    id,
    likes
  }

}


// thumb down

const thumbDown = function(id, dislikes){
  return{
    type: THUMB_DOWN_COMMENT,
    id,
    dislikes:
  }
}
