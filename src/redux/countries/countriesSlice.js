import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = [];
const URL = 'https://restcountries.com/v3.1/all';
export const fetchCountries = createAsyncThunk('countries/fetchCountries', async () => {
  const response = await axios.get(URL);
  return response.data.map((country) => ({
    name: country.name.common,
    population: country.population,
    flagEmoji: country.flag,
    flagPng: country.flags.png,
    flagSvg: country.flags.svg,
    flagAlt: country.flags.alt,
    continent: country.continents[0],
  }));
});

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCountries.fulfilled, (state, action) => action.payload);
  },
});

export default countriesSlice.reducer;
