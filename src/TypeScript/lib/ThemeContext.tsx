"use client"

import React, { createContext, useReducer } from "react";

type State = {
  theme: string;
  fontSize: number;
};

// type Action = {
//   type: "CHANGE_THEME" | "CHANGE_FONTSIZE";
//   payload: number;
// };
//Discriminated Union
type ActionTheme = {
  type: "CHANGE_THEME";
};
type ActionFont = {
  type: "CHANGE_FONTSIZE";
  payload: number;
};
type Action =ActionTheme|ActionFont

const INITIAL_STATE = {
  theme: "dark",
  fontSize: 16,
};

export const ThemeContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
}>({
  state: INITIAL_STATE,
  dispatch: () => {},
});

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "CHANGE_THEME":
      return {
        ...state,
        theme: state.theme === "dark" ? "light" : "dark",
      };
    case "CHANGE_FONTSIZE":
      return {
        ...state,
        fontSize: action.payload,
      };

    default:
      return state;
  }
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};
