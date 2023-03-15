import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {};

export const fetchCountryDetails = createAsyncThunk('countryDetails/fetchCountryDetails', async (countryName) => {
  const response = await axios.get(`https://restcountries.com/v3.1/name/${countryName}`);
  const country = response.data[0];
  return {
    name: country.name.common,
    population: country.population,
    capital: country.capital[0],
    area: country.area,
    timezones: country.timezones,
    flagEmoji: country.flag,
    flagPng: country.flags.png,
    flagSvg: country.flags.svg,
    flagAlt: country.flags.alt,
  };
});

const countryDetailsSlice = createSlice({
  name: 'countryDetails',
  initialState,
  reducers: {
    clearCountryDetails: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCountryDetails.fulfilled, (state, action) => action.payload);
  },
});

export const { clearCountryDetails } = countryDetailsSlice.actions;

export default countryDetailsSlice.reducer;
