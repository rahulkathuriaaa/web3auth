import React from 'react';
import {Button, View} from 'react-native';
import * as WebBrowser from "@toruslabs/react-native-web-browser";
// or  import * as WebBrowser from "expo-web-browser"; // (for expo)
import {Web3Auth} from "@web3auth/react-native-sdk";


const web3auth = new Web3Auth(WebBrowser, {
  clientId: "BDa3KzVEtDEf8NxJZrIC4YndpEbAoAsop3DkcyqQN-kevgGJe-k-jGywdUhfQzY5qhTDR8kVRmoQm68Ot66QjCQ",
  network: Network.TESTNET,
  whiteLabel: {
    name: "Web3Auth ReactNative Sample App",
    logoLight: "https://images.web3auth.io/web3auth-logo-w.svg",
    logoDark: "https://images.web3auth.io/web3auth-logo-w.svg",
    defaultLanguage: "en",
    dark: true,
    theme: {
      primary: "#cddc39",
    },
  },
});
const state = await web3auth.login({
    loginProvider: LoginProvider.GOOGLE,
    redirectUrl: resolvedRedirectUrl,
  });
const MyButton = () => {
  return (
    <View>
      <Button title="Click me!" onPress={state}  />
    </View>
  );
};

export default MyButton;