import uuid from 'uuid';

export const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

const addComment = text => {
	return {
	type: 'ADD_COMMENT',
	text,
	id: uuid.v4()
	}
}

const removeComment = id => {
	return {
	type: 'REMOVE_COMMENT',
	id
	}
}

const editComment = (text, id) => {
	return {
		type: 'EDIT_COMMENT',
		text,
		id
	}
}

const thumbUpComment = (id, vetes) => {
	return {
		type: 'THUMB_UP_COMMENT',
		id,
		votes: ++votes
	}
}

const thumbDownComment = (id, votes) => {
	return {
		type: 'THUMB_DOWN_COMMENT',
		id,
		votes: ++votes
	}
}

const boundAddComment = text => dispatch(addComment(text));
const boundRemoveComment = id => dispatch(removeComment(id));
const boundEditComment = (text, id) => dispatch(editComment(text, id));
const boundthumbUpComment = (id, votes) => dispatch(thumbUpComment(id, votes));
const boundthumbDownComment = (id, votes) => dispatch(thumbDownComment(id, votes));

