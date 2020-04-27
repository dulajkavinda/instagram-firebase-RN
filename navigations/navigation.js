import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";

import Loading from "../screens/Loading";

import TabNavigator from "./TabNavigator";
import AuthNavigator from "./AuthNavigator";

export default () => {
  const user = useSelector((state) => state.user.uid);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(!isLoading);
      //  setUser({});
    }, 0);
  }, []);

  return (
    <NavigationContainer>
      {isLoading ? <Loading /> : user ? <TabNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};
