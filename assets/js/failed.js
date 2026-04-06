const params = new URLSearchParams(window.location.search);
const dl     = params.get("dl")   ?? "";
const hash   = params.get("hash") ?? "";
const ab     = params.get("ab")   === "true";

const errorEl = document.getElementById("error");

if (ab) {
  const retryURL = `/download.html?dl=${encodeURIComponent(dl)}&hash=${encodeURIComponent(hash)}`;

  errorEl.innerHTML = `
    <h2 style="color:white;">Download failed due to an adblocker!</h2>
    <p style="color:#ccc;">Please disable your adblocker or extension and try again.</p>
    <br>
    <button class="glow-on-hover" type="button" onclick="window.location.href='${retryURL}';">
      <h3><span class="icon fa-arrow-right">Try again</span></h3>
    </button>
    <button class="glow-on-hover" type="button" onclick="window.location.href='/';">
      <h3><span class="icon fa-home">Go home</span></h3>
    </button>
  `;
} else {
  const retryURL = `/ads.html?ad=${encodeURIComponent(dl)}`;

  errorEl.innerHTML = `
    <h2 style="color:white;">Download failed! Do not use a Linkvertise bypasser.</h2>
    <p style="color:#ccc;">Please complete the link properly to access your download.</p>
    <br>
    <button class="glow-on-hover" type="button" onclick="window.location.href='${retryURL}';">
      <h3><span class="icon fa-arrow-right">Try again</span></h3>
    </button>
    <button class="glow-on-hover" type="button" onclick="window.location.href='/';">
      <h3><span class="icon fa-home">Go home</span></h3>
    </button>
  `;
}