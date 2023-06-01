import React from 'react';
import {Button, View} from 'react-native';
// import * as WebBrowser from "@toruslabs/react-native-web-browser";
  import * as WebBrowser from "expo-web-browser"; // (for expo)
import Web3Auth, { LOGIN_PROVIDER, OPENLOGIN_NETWORK } from "@web3auth/react-native-sdk";
// import * as WebBrowser from "expo-web-browser";

// const resolvedRedirectUrl =
//   Constants.appOwnership == AppOwnership.Expo || Constants.appOwnership == AppOwnership.Guest
//     ? Linking.createURL("web3auth", {})
//     : Linking.createURL("web3auth", { scheme: scheme });

    // const scheme = "exp://192.168.29.244:19000"; // Or your desired app redirection scheme
// const resolvedRedirectUrl = `${scheme}://openlogin`;

const web3auth = new Web3Auth(WebBrowser, {
  clientId: "BDa3KzVEtDEf8NxJZrIC4YndpEbAoAsop3DkcyqQN-kevgGJe-k-jGywdUhfQzY5qhTDR8kVRmoQm68Ot66QjCQ",
  network: OPENLOGIN_NETWORK.TESTNET,
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
async function state() {
    console.log("yes")
    await  web3auth.login({
        loginProvider: LOGIN_PROVIDER.GOOGLE,
        redirectUrl: `exp://192.168.29.244:19000`,
        
  })
}

// const state = await web3auth.login({
//     loginProvider: LOGIN_PROVIDER.GOOGLE,
//     redirectUrl: resolvedRedirectUrl,
//   });
const MyButton = () => {
  return (
    <View>
      <Button title="Click me!" onPress={state}  />
    </View>
  );
};

export default MyButton;