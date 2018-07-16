import axios from "axios";

const GET_MESSAGES = "GET_MESSAGES";

export const getMessages = messages => {
  return { type: GET_MESSAGES, messages };
};

export const fetchMessages = () => {
  return dispatch => {
    return axios
      .get("/api/messages")
      .then(res => res.data)
      .then(messages => {
        const action = getMessages(messages);
        dispatch(action);
      });
  };
};

export default (state = [], action) => {
  switch (action.type) {
    case GET_MESSAGES:
      return action.messages;
    default:
      return state;
  }
};
