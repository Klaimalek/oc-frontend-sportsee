import axios from 'axios';
import MainDataModel from './models/ModelMainData';
import ModelActivity from './models/ModelActivity';
import ModelSession from './models/ModelSession';
import ModelPerformance from './models/ModelPerformance';
/** récupération les données des utilisateurs */

export const getMainData = async (userId) => {
  let errorCode = null;

  // Je précise l'url de l'API pour récupérer les données principales de l'utilisateur
  let mainDataUrl = `http://localhost:3000/user/${userId}/`;

  try {
    const userMainData = await axios.get(mainDataUrl);
    const userData = new MainDataModel(userMainData.data.data);
    // Je retourne un objet avec les données de l'utilisateur et le code d'erreur

    return { data: userData, errorCode };
  } catch (error) {
    if (error.code === 'ERR_NETWORK') {
      errorCode = error.code;
      console.log('problème API, code :', errorCode);
    }
    return { data: null, errorCode };
  }
};

/** récupération les données des activités de l'utilisateur */
export const getDataActivity = async (userId) => {
  let activityDataUrl = `http://localhost:3000/user/${userId}/activity`;

  try {
    const userActivity = await axios.get(activityDataUrl);
    const dataUserActivity = new ModelActivity(userActivity.data.data);

    return dataUserActivity;
  } catch (error) {
    console.log(error);
  }
};

/** récupération les données des sessions de l'utilisateur */

export const getDataSession = async (userId) => {
  // Je précise l'url de l'API pour récupérer les données de sessions de l'utilisateur
  let dataSessionUrl = `http://localhost:3000/user/${userId}/average-sessions`;

  try {
    const userSessions = await axios.get(dataSessionUrl);
    const userDataSession = new ModelSession(userSessions.data.data);
    return userDataSession;
  } catch (error) {
    console.log(error);
  }
};
/** récupération les données des performances */

export const getDataPerformance = async (userId) => {
  let urlDataPerformance = `http://localhost:3000/user/${userId}/performance`;

  try {
    const userPerformance = await axios.get(urlDataPerformance);

    const dataUserPerformance = new ModelPerformance(userPerformance.data.data);
    return console.log(dataUserPerformance);
  } catch (error) {
    console.log(error);
  }
};
