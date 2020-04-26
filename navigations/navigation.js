import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Loading from "../screens/Loading";

import TabNavigator from "./TabNavigator";
import AuthNavigator from "./AuthNavigator";

export default () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(!isLoading);
      //   setUser({});
    }, 0);
  }, []);

  return (
    <NavigationContainer>
      {isLoading ? <Loading /> : user ? <TabNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};
