/* eslint-disable */
export default history => {
  if (process.env.NODE_ENV !== "production") {
    return;
  }
  (function(i, s, o, g, r, a, m) {
    i["GoogleAnalyticsObject"] = r;
    (i[r] =
      i[r] ||
      function() {
        (i[r].q = i[r].q || []).push(arguments);
      }),
      (i[r].l = 1 * new Date());
    (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m);
  })(
    window,
    document,
    "script",
    "https://www.google-analytics.com/analytics.js",
    "ga"
  );

  window.ga("create", "UA-47575342-4", "auto");
  window.ga("set", "anonymizeIp", true);
  window.ga("require", "displayfeatures");
  window.ga("send", "pageview");

  history.listen(location => {
    window.ga("send", "pageview", location.pathname);
  });
};
