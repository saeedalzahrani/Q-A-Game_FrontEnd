import apiUrl from "../apiConfig";
import axios from "axios";



export const getQuestions = (user) => {
  return axios({
    url: apiUrl + "/questions",
    method: "get",
    headers: {
      Authorization: `Bearer ${user.token}` // FOR EXPRESS
      // 'Authorization': `Token ${user.token}` // FOR RAILS
    },
  });
};
export const getQuestionsById = (user,id) => {
    return axios({
      url: apiUrl + "/questions/"+id,
      method: "get",
      headers: {
        Authorization: `Bearer ${user.token}` // FOR EXPRESS
        // 'Authorization': `Token ${user.token}` // FOR RAILS
      },
    });
  };
  export const creatGuesse = (user,id,choice) => {
    return axios({
      url: apiUrl + "/questions/"+id+"/guesses",
      method: "post",
      headers: {
        Authorization: `Bearer ${user.token}` // FOR EXPRESS
        // 'Authorization': `Token ${user.token}` // FOR RAILS
      },
      data: {
          choice
      }
    });
  };
  export const getGuesse = (user,id) => {
    return axios({
      url: apiUrl + "/guesses/"+id,
      method: "get",
      headers: {
        Authorization: `Bearer ${user.token}` // FOR EXPRESS
        // 'Authorization': `Token ${user.token}` // FOR RAILS
      }
    })
  }

  export const sendScore = (user,owner,score) => {
    return axios({
      url: apiUrl + "/leaderboard",
      method: "post",
      headers: {
        Authorization: `Bearer ${user.token}` // FOR EXPRESS
        // 'Authorization': `Token ${user.token}` // FOR RAILS
      },
      data: {
        score,
         owner
      }
    });
  };

  export const getScore = () => {
    return axios({
      url: apiUrl + "/leaderboard",
      method: "get",
    });
  };