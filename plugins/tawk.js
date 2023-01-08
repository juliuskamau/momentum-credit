export default (context, inject) => {
  let Tawk_API = Tawk_API || {};
  let Tawk_LoadStart = new Date();
  (function() {
    var s1 = document.createElement("script"),
      s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = "https://embed.tawk.to/5f1eca8c4eb6fc4a189af290/1ee84qote";
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");
    s0.parentNode.insertBefore(s1, s0);
  })();

  inject("Tawk_API", Tawk_API);
};
