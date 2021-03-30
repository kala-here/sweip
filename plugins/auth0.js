import Vue from 'vue'
import { Auth0Plugin } from "~/auth";
// Install the authentication plugin here
Vue.use(Auth0Plugin, {
  domain: process.env.AUTH0_DOMAIN,
  clientId: process.env.AUTH0_CLIENT_ID,
  onRedirectCallback: appState => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
  }
});
