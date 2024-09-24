import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api, { local } from "../utils/api";

const initialState = {
  isLoading: false,
  isError: null,
  flights: [],
  airlines: [],
  destinations: [],
  aircraftTypes: [],
  myFlights: [],
};

export const getFlights = createAsyncThunk("flights/getFlights", async () => {
  const res = await api.get("/flights");

  return res.data.flights;
});

export const getAirlines = createAsyncThunk("flights/getAirlines", async () => {
  const res = await api.get("/airlines");

  return res.data.airlines;
});

export const getDestinations = createAsyncThunk(
  "flights/getDestinations",
  async () => {
    const res = await api.get("/destinations");

    return res.data.destinations;
  }
);

export const getAircraftTypes = createAsyncThunk(
  "flights/aircraftTypes",
  async () => {
    const res = await api.get("/aircrafttypes");

    return res.data.aircraftTypes;
  }
);

export const bookFlight = createAsyncThunk(
  "flights/bookFlight",
  async () => {
    const res = await local.post("/myflights",{params});

    return console.log(res.data);
  }
);

const flightSlice = createSlice({
  name: "flight",
  initialState,
  reducers: {
    addFlight: (state, action) => {
      state.myFlights.push = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getFlights.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getFlights.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      })
      .addCase(getFlights.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        state.flights = action.payload;
      });

    builder
      .addCase(getAirlines.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAirlines.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      })
      .addCase(getAirlines.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        state.airlines = action.payload;
      });

    builder
      .addCase(getDestinations.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getDestinations.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      })
      .addCase(getDestinations.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        state.destinations = action.payload;
      });

    builder
      .addCase(getAircraftTypes.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAircraftTypes.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      })
      .addCase(getAircraftTypes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        state.aircraftTypes = action.payload;
      });
  },
});

export const { addFlight } = flightSlice.actions;

export default flightSlice.reducer;
