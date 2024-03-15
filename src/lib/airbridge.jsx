import airbridge from "airbridge-web-sdk-loader";
import { useEffect } from "react";

export const useAirBridge = () => {
  useEffect(() => {
    airbridge.init({
      app: 'alphamail',
      webToken: process.env.REACT_APP_AIRBRIDGE_WEB_TOKEN,
    });
  }, []);
};
