import React, { useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";
import FruitDetails from "../src/FruitDetails"

const AppContext = React.createContext();

const intialState = {
  name: "",
  image: "",
  FruitDetails: [],
};

const AppProvider = ({ children }) => {
    
  const [state, dispatch] = useReducer(reducer, intialState);

  const updateHomePage = () => {
    return dispatch({
      type: "HOME_UPDATE",
      payload: {
        name: "Medhe International Fruits",
        image: "./images/homepage_fruits.jpeg",
      },
    });
  };

  const udpateAboutPage = () => {
    return dispatch({
      type: "ABOUT_UPDATE",
      payload: {
        name: "Medhe Internation Fruits",
        image: "./images/aboutpage_fruits.jpg",
      },
    });
  };

  const getProducts = () => {
    try {
      dispatch({ type: "GET_PRODUCTS", payload: FruitDetails });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => getProducts(), []);

  return (
    <AppContext.Provider value={{ ...state, updateHomePage, udpateAboutPage }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
