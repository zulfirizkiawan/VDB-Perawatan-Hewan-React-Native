import Axios from 'axios';
import {getData} from '../../utils';

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

export const getAllGrooming = () => dispatch => {
  getData('token').then(resToken => {
    Axios.all([
      Axios.get(`${API_HOST.url}/grooming?status=PENDING`, {
        headers: {
          Authorization: resToken.value,
        },
      }),
      Axios.get(`${API_HOST.url}/grooming?status=PENJEMPUTAN`, {
        headers: {
          Authorization: resToken.value,
        },
      }),
      Axios.get(`${API_HOST.url}/grooming?status=DI PROSES`, {
        headers: {
          Authorization: resToken.value,
        },
      }),
      Axios.get(`${API_HOST.url}/grooming?status=DI ANTAR`, {
        headers: {
          Authorization: resToken.value,
        },
      }),
    ])
      .then(
        Axios.spread((res1, res2, res3, res4) => {
          const pending = res1.data.data.data;
          const penjemputan = res2.data.data.data;
          const diProses = res3.data.data.data;
          const diAntar = res4.data.data.data;
          dispatch({
            type: 'SET_TOTAL_GROOMING',
            value: [...pending, ...penjemputan, ...diProses, ...diAntar],
          });
        }),
      )
      .catch(err => {
        showMessage('Terjadi Kesalahan di In Progress API');
      });
  });
};

export const getAllPenitipan = () => dispatch => {
  getData('token').then(resToken => {
    Axios.all([
      Axios.get(`${API_HOST.url}/penitipan?status=PENDING`, {
        headers: {
          Authorization: resToken.value,
        },
      }),
      Axios.get(`${API_HOST.url}/penitipan?status=PENJEMPUTAN`, {
        headers: {
          Authorization: resToken.value,
        },
      }),
      Axios.get(`${API_HOST.url}/penitipan?status=DI PROSES`, {
        headers: {
          Authorization: resToken.value,
        },
      }),
      Axios.get(`${API_HOST.url}/penitipan?status=DI ANTAR`, {
        headers: {
          Authorization: resToken.value,
        },
      }),
    ])
      .then(
        Axios.spread((res1, res2, res3, res4) => {
          const pending = res1.data.data.data;
          const penjemputan = res2.data.data.data;
          const diProses = res3.data.data.data;
          const diAntar = res4.data.data.data;
          dispatch({
            type: 'SET_TOTAL_PENITIPAN',
            value: [...pending, ...penjemputan, ...diProses, ...diAntar],
          });
        }),
      )
      .catch(err => {
        showMessage('Terjadi Kesalahan di In Progress API');
      });
  });
};

export const getAllPraktik = () => dispatch => {
  getData('token').then(resToken => {
    Axios.all([
      Axios.get(`${API_HOST.url}/praktik?status=PENDING`, {
        headers: {
          Authorization: resToken.value,
        },
      }),
      Axios.get(`${API_HOST.url}/praktik?status=PENJEMPUTAN`, {
        headers: {
          Authorization: resToken.value,
        },
      }),
      Axios.get(`${API_HOST.url}/praktik?status=DI PROSES`, {
        headers: {
          Authorization: resToken.value,
        },
      }),
      Axios.get(`${API_HOST.url}/praktik?status=DI ANTAR`, {
        headers: {
          Authorization: resToken.value,
        },
      }),
    ])
      .then(
        Axios.spread((res1, res2, res3, res4) => {
          const pending = res1.data.data.data;
          const penjemputan = res2.data.data.data;
          const diProses = res3.data.data.data;
          const diAntar = res4.data.data.data;
          dispatch({
            type: 'SET_TOTAL_PRAKTIK',
            value: [...pending, ...penjemputan, ...diProses, ...diAntar],
          });
        }),
      )
      .catch(err => {
        showMessage('Terjadi Kesalahan di In Progress API');
      });
  });
};
