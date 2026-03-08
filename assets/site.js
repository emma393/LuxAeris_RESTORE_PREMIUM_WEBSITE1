
(function(){
  const path = (location.pathname || "/").toLowerCase();
  const isHome = path === "/" || path.endsWith("/index.html");

  const headerHTML = `
  <header class="header">
    <div class="wrap">
      <div class="header__in">
        <a class="brand" href="/">
          <div class="brand__mark" aria-hidden="true"></div>
          <div>
            <div class="brand__name">LUXAERIS</div>
            <div class="brand__tag">Business • First • Private Jet</div>
          </div>
        </a>

        <nav class="nav" aria-label="Primary">
          <a href="/request.html">Quote</a>
          <a href="/top-destinations.html">Destinations</a>
          <a href="/routes-hub.html">Routes</a>
          <a href="/guides-hub.html">Guides</a>
          <a href="/private-jet-charter.html">Private Jet</a>
        </nav>

        <div class="header__actions">
          <a class="btn btn--ghost" href="/about.html">About</a>
          <a class="btn btn--primary" href="/request.html">Request a quote</a>
        </div>
      </div>
    </div>
  </header>`;

  const footerHTML = `
  <footer class="footer">
    <div class="wrap">
      <div class="cols">
        <div>
          <div style="font-family:'Cormorant Garamond', Georgia, serif;letter-spacing:.16em;font-weight:700;font-size:28px;">LUXAERIS</div>
          <div class="muted" style="margin-top:8px;">Premium cabin flight concierge • Worldwide.</div>
        </div>
        <div>
          <div style="font-weight:800;margin-bottom:8px;letter-spacing:.10em;text-transform:uppercase;font-size:12px;">Explore</div>
          <a href="/top-destinations.html">Destinations</a><br/>
          <a href="/routes-hub.html">Routes</a><br/>
          <a href="/guides-hub.html">Guides</a><br/>
          <a href="/request.html">Request a quote</a>
        </div>
        <div>
          <div style="font-weight:800;margin-bottom:8px;letter-spacing:.10em;text-transform:uppercase;font-size:12px;">Legal</div>
          <a href="/privacy.html">Privacy</a><br/>
          <a href="/terms.html">Terms</a><br/>
          <a href="/advertise.html">Advertise</a>
        </div>
      </div>
      <div style="height:14px"></div>
      <div class="smallnote">© <span id="year"></span> LuxAeris. All rights reserved.</div>
    </div>
  </footer>`;

  function ensureYear(){
    const y = document.getElementById("year");
    if(y) y.textContent = new Date().getFullYear();
  }

  function ensureFloatCTA(){
    if(document.querySelector(".float-cta")) return;
    const a = document.createElement("a");
    a.className = "btn btn--primary float-cta";
    a.href = "/request.html";
    a.textContent = "Request a quote";
    document.body.appendChild(a);
  }

  if(isHome){
    ensureYear();
    ensureFloatCTA();
    return;
  }

  if(!document.querySelector("header.header")){
    document.body.insertAdjacentHTML("afterbegin", headerHTML);
  }
  if(!document.querySelector("footer.footer")){
    document.body.insertAdjacentHTML("beforeend", footerHTML);
  }
  ensureYear();
  ensureFloatCTA();
})();


(function(){
  const KEY = "luxaeris_cookie_consent";
  if(localStorage.getItem(KEY)) return;

  function closeBanner(value){
    try{ localStorage.setItem(KEY, value); }catch(e){}
    const el = document.getElementById("cookieBanner");
    if(el) el.remove();
  }

  function mountBanner(){
    if(document.getElementById("cookieBanner")) return;
    const wrap = document.createElement("div");
    wrap.id = "cookieBanner";
    wrap.className = "cookie-banner";
    wrap.innerHTML = `
      <div class="cookie-banner__row">
        <div class="cookie-banner__text">
          <div class="cookie-banner__title">Cookie notice</div>
          <div class="cookie-banner__copy">
            We use cookies and similar technologies to improve site performance, understand traffic, and support your browsing experience. By clicking Accept, you agree to our use of cookies as described in our <a href="/privacy.html">Privacy Policy</a>.
          </div>
        </div>
        <div class="cookie-banner__actions">
          <button class="btn btn--ghost" id="cookieDecline" type="button">Decline</button>
          <button class="btn btn--primary" id="cookieAccept" type="button">Accept</button>
        </div>
      </div>
    `;
    document.body.appendChild(wrap);
    document.getElementById("cookieAccept")?.addEventListener("click", ()=>closeBanner("accepted"));
    document.getElementById("cookieDecline")?.addEventListener("click", ()=>closeBanner("declined"));
  }

  if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", mountBanner);
  }else{
    mountBanner();
  }
})();
