import axios from "axios";
import { apiUrl } from "../../config/constants";

export const HOMEPAGE_DETAILS_FETCHED = "HOMEPAGE_DETAILS>FETCHED";

export const homepageDetailsFetched = (homepage) => ({
  type: HOMEPAGE_DETAILS_FETCHED,
  payload: homepage,
});

export const fetchHomepageId = id => {
  return async (dispatch, getState) => {
    const response = await axios.get(`${apiUrl}/homepages/${id}`);
    console.log(response);
    dispatch(homepageDetailsFetched(response.data.homepage));
  };
};
