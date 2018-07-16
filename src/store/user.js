import axios from "axios";
//history

const GET_USER = "GET_USER";
const REMOVE_USER = "REMOVE_USER";

const defaultUser = {};

const getUser = user => {
  return { type: GET_USER, user };
};

const removeUser = () => {
  return { type: REMOVE_USER };
};

const me = () => async dispatch => {
  try {
    const res = await axios.get("/auth/me");
    dispatch(getUser(res.data || defaultUser));
  } catch (err) {
    console.error(err);
  }
};

export const authenticate = (username, method) => async dispatch => {
  console.log("check out authenticate in store", username, method);
  let res;
  try {
    res = await axios.post(`/auth/${method}`, {
      username
    });
  } catch (authError) {
    return dispatch(getUser({ error: authError }));
  }
  try {
    dispatch(getUser(res.data));
    // history.push("/home"); //redirect after logging in
  } catch (dispatchOrHistoryErr) {
    console.error(dispatchOrHistoryErr);
  }
};

export const logout = () => async dispatch => {
  try {
    await axios.post("/auth/logout");
    dispatch(removeUser());
    // history.push("/login"); //necessary for redirect
  } catch (err) {
    console.error(err);
  }
};

export default (state = defaultUser, action) => {
  switch (action.type) {
    case GET_USER:
      return action.user;
    case REMOVE_USER:
      return defaultUser;
    default:
      return state;
  }
};
