const WRITE_MESSAGE = "WRITE_MESSAGE";

export const writeMessage = content => {
  return { type: WRITE_MESSAGE, content };
};

export default (state = "", action) => {
  switch (action.type) {
    case WRITE_MESSAGE:
      return action.content;
    default:
      return state;
  }
};
