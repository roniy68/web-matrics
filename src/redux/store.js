import countriesReducer from './countries/countriesSlice';
import countryDetailsSlice from './countryDetails/countryDetailsSlice';

const { configureStore } = require('@reduxjs/toolkit');

const store = configureStore({
  reducer: {
    countries: countriesReducer,
    countryDetails: countryDetailsSlice,
  },
});

export default store;
