import { createSlice } from "@reduxjs/toolkit";

export const pointsSlice = createSlice({
  name: "points",
  initialState: {
    // kurdistan
    kurdistan_points: 0,
    kurdistan_whole_points: 0,
    kurdistanPoints: 0,

    // turkey
    turkey_points: 0,
    turkey_whole_points: 0,
    turkeyPoints: 0,

    // syria
    syria_points: 0,
    syria_whole_points: 0,
    syriaPoints: 0,

    // for all
    forAllPoints: 0,
  },
  reducers: {
    //  kurdistan
    addKurdistanPoint: (state, action) => {
      console.log("action kurdistan", action.payload);
      state.kurdistanPoints += action.payload.diamondCount;

      while (state.kurdistanPoints > 0) {
        if (state.kurdistan_points >= 10) {
          state.kurdistan_points = 0;
          state.kurdistan_whole_points += 1;
          state.kurdistanPoints--;
        } else {
          state.kurdistan_points++;
          state.kurdistanPoints--;
        }
      }
    },
    // turkey
    addTurkeyPoint: (state, action) => {
      state.turkeyPoints += action.payload.diamondCount;
      console.log("action turkey", action.payload);

      while (state.turkeyPoints > 0) {
        if (state.turkey_points >= 10) {
          state.turkey_points = 0;
          state.turkey_whole_points += 1;
          state.turkeyPoints--;
        } else {
          state.turkey_points++;
          state.turkeyPoints--;
        }
      }
    },
    //  syria
    addSyriaPoint: (state, action) => {
      state.syriaPoints += action.payload.diamondCount;
      console.log("action syria", action.payload);

      while (state.syriaPoints > 0) {
        if (state.syria_points >= 10) {
          state.syria_points = 0;
          state.syria_whole_points += 1;
          state.syriaPoints--;
        } else {
          state.syria_points++;
          state.syriaPoints--;
        }
      }
    },
    addForAll: (state, action) => {
      state.forAllPoints += action.payload.diamondCount;
      while (state.forAllPoints > 0) {
        // kurdistan
        if (state.kurdistan_points >= 10) {
          state.kurdistan_points = 0;
          state.kurdistan_whole_points += 1;
        } else {
          state.kurdistan_points++;
        }
        // syria
        if (state.syria_points >= 10) {
          state.syria_points = 0;
          state.syria_whole_points += 1;
        } else {
          state.syria_points++;
        }
        // turkey
        if (state.turkey_points >= 10) {
          state.turkey_points = 0;
          state.turkey_whole_points += 1;
        } else {
          state.turkey_points++;
        }
        state.forAllPoints--;
      }

      console.log("all points", state.forAllPoints);
    },
    clearAllPoints: (state, action) => {
      state.kurdistan_points = 0;
      state.kurdistan_whole_points = 0;
      state.turkey_points = 0;
      state.turkey_whole_points = 0;
      state.syria_points = 0;
      state.syria_whole_points = 0;
      state.forAllPoints = 0;
    },
  },
});

export const {
  addKurdistanPoint,
  addTurkeyPoint,
  addSyriaPoint,
  addForAll,
  clearAllPoints,
} = pointsSlice.actions;
export default pointsSlice.reducer;
