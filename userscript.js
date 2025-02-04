// ==UserScript==
// @name         AWS Account Alias Display
// @version      2025-01-29
// @description  Display the current SSO session's Account Alias in the AWS Management Console.
// @author       Harry
// @match        https://*.console.aws.amazon.com/*
// @icon         https://assets.sso-portal.eu-west-1.amazonaws.com/2025-01-08-06-27-53-198/favicon.png
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  // config-mount-point

  // Your code here...
  function getAccountIdFromUrl() {
    return window.location.href.split("https://")[1].substring(0, 12) ?? "";
  }

  function displayAccountAlias() {
    const accountId = getAccountIdFromUrl();
    if (accountId && awsAccounts[accountId]) {
      const alias = awsAccounts[accountId];
      const navBar = document.querySelector(
        '[data-analytics-widget-id="@amzn/awsconsole-concierge-search-lotus"]'
      );
      if (navBar) {
        const aliasElement = document.createElement("div");
        aliasElement.style.cssText = `
          color: #fff !important;
          margin-left: 20px !important;
          font-size: 14px !important;
          font-family: "Amazon Ember", "Helvetica Neue", Roboto, Arial, sans-serif !important;
          font-style: bold !important;
          justify-self: flex-end !important;
          align-self: center !important;
        `;
        aliasElement.innerText = `Account: ${alias}`;
        navBar.appendChild(aliasElement);
      }
    }
  }

  function waitForNavBar() {
    const observer = new MutationObserver((mutations, me) => {
      const navBar = document.querySelector(
        '[data-analytics-widget-id="@amzn/awsconsole-concierge-search-lotus"]'
      );
      if (navBar) {
        displayAccountAlias();
        me.disconnect(); // stop observing
        return;
      }
    });

    observer.observe(document, {
      childList: true,
      subtree: true,
    });
  }

  // Run on page load
  waitForNavBar();
})();
