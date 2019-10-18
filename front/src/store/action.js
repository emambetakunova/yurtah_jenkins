import axios from '../axios-api';

export const LISTING_SUCCESS = 'LISTING_SUCCESS';
export const LISTING_FAILURE = 'LISTING_FAILURE';

export const listingSuccess = response => ({type: LISTING_SUCCESS, response});
export const listingFailure = error => ({type: LISTING_FAILURE, error});


export const fetchListings = (number) => {
  return dispatch => {
    return axios.get('/listings?size=' + number).then(
      response => dispatch(listingSuccess(response.data.results)),
      error => dispatch(listingFailure(error))
    )
  };
};