import axios from "axios";
import socket from "../socket";

const GET_CHANNELS = "GET_CHANNELS";
const GET_CHANNEL = "GET_CHANNEL";

export const getChannel = channel => {
  return { type: GET_CHANNEL, channel };
};

export const getChannels = channels => {
  return { type: GET_CHANNELS, channels };
};

export const fetchChannels = () => {
  return dispatch => {
    return axios
      .get("/api/channels")
      .then(res => res.data)
      .then(channels => {
        const action = getChannels(channels);
        dispatch(action);
      });
  };
};

export const postChannel = (channel, history) => {
  return dispatch => {
    return axios
      .post("/api/channels", channel)
      .then(res => res.data)
      .then(newChannel => {
        dispatch(getChannel(newChannel));
        socket.emit("new-channel", newChannel);
        history.push(`/channels/${newChannel.id}`);
      });
  };
};

export default (state = [], action) => {
  switch (action.type) {
    case GET_CHANNELS:
      return action.channels;
    case GET_CHANNEL:
      return [...state, action.channel];
    default:
      return state;
  }
};
