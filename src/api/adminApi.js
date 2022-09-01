import { handleResponse, handleError } from "./apiUtils";
var sUrlHeroku = "https://miprode.herokuapp.com";
const baseUrl = sUrlHeroku + "/api/savePointsUser/";
const baseUrlTwo = sUrlHeroku + "/api/savePointsUserPlayer/"
const baseUrlThree = sUrlHeroku + "/api/enabledPoints/"
const baseUrlFour = sUrlHeroku + "/api/matches/";
const baseUrlFive = sUrlHeroku + "/api/postChampion/";
const baseUrlSix = sUrlHeroku + "/api/savePointsUserChampion/";
//.local. 
export function savePointsUser(userLogin, match) {
    debugger;
    //ToDo user .then
    const resultsData = {
        code: match.code,
        teamOne: match.teamOne,
        teamTwo: match.teamTwo ,
        goalsTeamOne: Number(match.goalsTeamOne),
        goalsTeamTwo: Number(match.goalsTeamTwo)
    };
    const myHeaders = new Headers();
    myHeaders.append("auth-token", userLogin.data.token);
    myHeaders.append("Content-Type", "application/json");
    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        redirect: 'follow',
        body: JSON.stringify(resultsData)
    };    
    return fetch(baseUrl, requestOptions)
      .then(handleResponse)
      .catch(handleError);    
  }

  export function saveGoalsPlayer(userLogin, player) {
    debugger;
    //ToDo user .then
    const resultsData = {
        code: player.code,
        goals: player.goals
    };
    const myHeaders = new Headers();
    myHeaders.append("auth-token", userLogin.data.token);
    myHeaders.append("Content-Type", "application/json");
    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        redirect: 'follow',
        body: JSON.stringify(resultsData)
    }; 
     
    return fetch(baseUrlTwo, requestOptions)
      .then(handleResponse)
      .catch(handleError);        
  }

  export function savePointsEnable(userLogin) {
    debugger;
    //ToDo user .then
    const resultsData = {
        code: "Send"
    };
    const myHeaders = new Headers();
    myHeaders.append("auth-token", userLogin.data.token);
    myHeaders.append("Content-Type", "application/json");
    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        redirect: 'follow',
        body: JSON.stringify(resultsData)
    }; 
     
    return fetch(baseUrlThree, requestOptions)
      .then(handleResponse)
      .catch(handleError);         
  }


  export function saveRunUpdateMatch(userLogin, match) {
    debugger;
    const resultsData = {
        code: match.code,
        RunUpdate: true
    };
    const myHeaders = new Headers();
    myHeaders.append("auth-token", userLogin.data.token);
    myHeaders.append("Content-Type", "application/json");
    const requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        redirect: 'follow',
        body: JSON.stringify(resultsData)
    };    
    return fetch(baseUrlFour + match._id, requestOptions)
      .then(handleResponse)
      .catch(handleError);    
  }

  export function saveChampionUser(userLogin, campeon) {
    debugger;
    //ToDo user .then
    const resultsData = {
        champion: campeon.code
    };
    const myHeaders = new Headers();
    myHeaders.append("auth-token", userLogin.data.token);
    myHeaders.append("Content-Type", "application/json");
    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        redirect: 'follow',
        body: JSON.stringify(resultsData)
    }; 
     
    return fetch(baseUrlSix, requestOptions)
      .then(handleResponse)
      .catch(handleError);        
  }

  export function saveChampionTeam(userLogin, campeon) {
    debugger;
    //ToDo user .then
    const resultsData = {
        champion: campeon.code
    };
    const myHeaders = new Headers();
    myHeaders.append("auth-token", userLogin.data.token);
    myHeaders.append("Content-Type", "application/json");
    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        redirect: 'follow',
        body: JSON.stringify(resultsData)
    }; 
     
    return fetch(baseUrlFive, requestOptions)
      .then(handleResponse)
      .catch(handleError);        
  }