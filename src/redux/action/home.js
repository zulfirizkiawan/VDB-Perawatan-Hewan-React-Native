import Axios from 'axios';

const API_HOST = {
  url: 'http://vdb.otwlulus.com/api',
};

export const getDiskonData = () => dispatch => {
  Axios.get(`${API_HOST.url}/discount?id=1`)
    .then(res => {
      // console.log('res diskon :', res.data.data);
      dispatch({type: 'SET_DISKON', value: res.data.data});
    })
    .catch(err => {
      console.log('err :', err);
    });
};

export const getDokterData = () => dispatch => {
  Axios.get(`${API_HOST.url}/doctor`)
    .then(res => {
      dispatch({type: 'SET_DOKTER', value: res.data.data});
    })
    .catch(err => {
      console.log('err :', err);
    });
};

// export const getFoodDataByTypes = types => dispatch => {
//   Axios.get(`${API_HOST.url}/food?types=${types}`)
//     .then(res => {
//       if (types === 'newfood') {
//         dispatch({type: 'SET_NEW_TASTE', value: res.data.data.data});
//       }
//       if (types === 'popular') {
//         dispatch({type: 'SET_POPULAR', value: res.data.data.data});
//       }
//       if (types === 'recommended') {
//         dispatch({type: 'SET_RECOMMENDED', value: res.data.data.data});
//       }
//     })
//     .catch(err => {
//       showMessage('Terjadi kesalahan di API Food By Type');
//     });
// };
