import { FETCH } from "../config/actionsTypes";
import { initialRepos } from "../contexts/initials";

const userReducer = (repos = initialRepos, { type, payload }) => {
  console.log("repos Reducer", { repos, type, payload });
  switch (type) {
    case FETCH:
      payload.isLoading = false;
      const updatedRepos = [...initialRepos, ...repos, ...payload];
      return updatedRepos;

    default:
      return repos;
  }
};

export default userReducer;
