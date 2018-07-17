import axios from "axios";

const GET_USER = "GET_USER";
const REMOVE_USER = "REMOVE_USER";

const defaultUser = {};

const getUser = user => {
  return { type: GET_USER, user };
};

const removeUser = () => {
  return { type: REMOVE_USER };
};

export const me = () => async dispatch => {
  try {
    const res = await axios.get("/auth/me");
    dispatch(getUser(res.data || defaultUser));
  } catch (err) {
    console.error(err);
  }
};

export const authenticate = (username, method, history) => async dispatch => {
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
    history.push("/channels/1"); //redirect after logging in
  } catch (dispatchOrHistoryErr) {
    console.error(dispatchOrHistoryErr);
  }
};

export const logout = (user, history) => async dispatch => {
  console.log("user: ", user);

  try {
    await axios.post("/auth/logout", user);
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
