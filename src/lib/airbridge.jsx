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

export const event = (category, {action, label, value} ) => {
  airbridge.events.send(category,{
    action, label, value
  });
}