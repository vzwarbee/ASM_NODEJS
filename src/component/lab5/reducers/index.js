import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "No Scrubs", duration: "4:05" },
    { title: "Macarena", duration: "2:30" },
    { title: "All Star", duration: "3:15" },
    { title: "I Want it That Way", duration: "1:45" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

const initialState = {
  count: 0
};
export const Middle = (state = initialState, action) => {
  switch (action.type) {
      case "INC":
          return{ ...state, count: state.count +1};
      case "DEC":
          return {...state, count: state.count -1};
      case "RESET":
          return {...state, count: 0};
      default:
          return state;
  }
};

const rootReducer = combineReducers({
  Middle: Middle,
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});

export default rootReducer;