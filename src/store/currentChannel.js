const CHANGE_CHANNEL = "CHANGE_CHANNEL";

export const changeCurrentChannel = channelName => {
  return { type: CHANGE_CHANNEL, channelName };
};

export default (state = "", action) => {
  switch (action.type) {
    case CHANGE_CHANNEL:
      return action.channelName;
    default:
      return state;
  }
};
