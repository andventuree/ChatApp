import axios from "axios";

const GET_MESSAGE = "GET_MESSAGE";
const GET_MESSAGES = "GET_MESSAGES";

export const getMessage = message => {
  return { type: GET_MESSAGE, message };
};

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

export const postMessage = message => {
  console.log("in message.js store - message: ", message);
  return dispatch => {
    return axios
      .post("/api/messages", message)
      .then(res => res.data)
      .then(newMessage => {
        const action = getMessage(newMessage);
        dispatch(action);
        //will likely need a socket event here
      });
  };
};

export default (state = [], action) => {
  switch (action.type) {
    case GET_MESSAGES:
      return action.messages;
    case GET_MESSAGE:
      return [...state, action.message];
    default:
      return state;
  }
};
