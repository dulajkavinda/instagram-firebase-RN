import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";

import { AsyncStorage } from "react-native";

import Loading from "../screens/Loading";

import TabNavigator from "./TabNavigator";
import AuthNavigator from "./AuthNavigator";

export default () => {
  const token = useSelector((state) => state.user.userToken);
  const [isLoading, setIsLoading] = React.useState(true);
  const dispatch = useDispatch();

  let userToken;

  React.useEffect(() => {
    const bootstrapAsync = async () => {
      setIsLoading(!isLoading);

      try {
        userToken = await AsyncStorage.getItem("userToken");
        console.log("Hey: " + userToken);
      } catch (e) {}
      dispatch({ type: "RESTORE_TOKEN", token: userToken });
    };

    bootstrapAsync();
  }, []);

  return (
    <NavigationContainer>
      {isLoading ? (
        <Loading />
      ) : token != null ? (
        <TabNavigator />
      ) : (
        <AuthNavigator />
      )}
    </NavigationContainer>
  );
};
