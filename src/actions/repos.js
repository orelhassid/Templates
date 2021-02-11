import { FETCH } from "../config/actionsTypes";
import * as api from "../api/github";

export const getRepos = (username) => async (dispatch) => {
  try {
    const { data } = await api.getRepos(username);
    // map result
    const payload = data.map((repo) => ({
      url: repo.url,
      description: repo.description,
      created_at: repo.created_at,
      updated_at: repo.updated_at,
      homepage: repo.homepage,
      language: repo.language,
    }));
    dispatch({ type: FETCH, payload });
  } catch (error) {
    throw error;
    console.error(error);
  }
};
