import * as api from "../api/auth";

export const signin = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData, history);
    dispatch({ type: "AUTH", data });
    history.push("/dashboard");
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData, history);
    dispatch({ type: "AUTH", data });
    history.push("/dashboard");
  } catch (error) {
    console.log(error);
  }
};
