import axois from "axios";

const GET_CHANNELS = "GET_CHANNELS";

export const getChannels = channels => {
  return {
    type: GET_CHANNELS,
    channels
  };
};

export const fetchChannels = () => {
  return dispatch => {
    return axois
      .get("/api/channels")
      .then(res => res.data)
      .then(channels => {
        const action = getChannels(channels);
        dispatch(action);
      });
  };
};

export default (state = [], action) => {
  switch (action.type) {
    case GET_CHANNELS:
      return action.channels;
    default:
      return state;
  }
};
