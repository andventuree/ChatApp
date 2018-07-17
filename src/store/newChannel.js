const WRITE_CHANNEL_NAME = "WRITE_CHANNEL_NAME";

export const writeChannelName = channelName => {
  return { type: WRITE_CHANNEL_NAME, channelName };
};

export default (state = "", action) => {
  switch (action.type) {
    case WRITE_CHANNEL_NAME:
      return action.channelName;
    default:
      return state;
  }
};
