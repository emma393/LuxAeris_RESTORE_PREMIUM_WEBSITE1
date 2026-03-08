
(function(){
  const dataUrl = "/assets/destinations.json";
  const grid = document.getElementById("destGrid");
  const chips = document.getElementById("regionChips");
  const search = document.getElementById("destSearch");
  const count = document.getElementById("destCount");

  let ALL = [];
  let region = "All";

  function esc(s){ return (s||"").replace(/[&<>"]/g, c=>({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;" }[c])); }
  function setCount(n){ if(count) count.textContent = n + " destinations"; }

  function card(d){
    const iata = (d.iata||[]).join("/");
    const title = `${d.city}, ${d.country}`;
    const things = (d.highlights||[]).slice(0,4).map(x=>`<li>${esc(x)}</li>`).join("");
    const best = (d.best_for||[]).slice(0,3).map(x=>`<span class="pill">${esc(x)}</span>`).join("");
    const destParam = encodeURIComponent(`${d.city} (${(d.iata||[])[0]||""})`.trim());
    return `
      <article class="destx" data-region="${esc(d.region)}">
        <div class="destx__img">
          <img loading="lazy" src="${esc(d.image)}" alt="${esc(title)}" />
        </div>
        <div class="destx__bd">
          <div class="destx__title">${esc(d.city)}</div>
          <div class="destx__meta">${esc(d.country)} • ${esc(iata)} • ${esc(d.region)}</div>
          <div class="destx__tag">${esc(d.tag||"")}</div>
          <ul class="destx__list">${things}</ul>
          <div class="destx__pills">${best}</div>
          <div class="destx__actions">
            <a class="btn btn--primary" href="/request.html?destination=${destParam}">Find flights</a>
            <a class="btn" href="/request.html?destination=${destParam}&service=Business%20Class">Business</a>
            <a class="btn" href="/request.html?destination=${destParam}&service=First%20Class">First</a>
          </div>
          <div class="small" style="margin-top:10px;">Images: ${esc(d.credit||"")}. Verify local requirements.</div>
        </div>
      </article>
    `;
  }

  function render(){
    if(!grid) return;
    const q = (search?.value || "").trim().toLowerCase();
    const filtered = ALL.filter(d=>{
      const okRegion = (region==="All") || (d.region===region);
      const blob = `${d.city} ${d.country} ${(d.iata||[]).join(" ")} ${d.tag}`.toLowerCase();
      const okQ = !q || blob.includes(q);
      return okRegion && okQ;
    });
    setCount(filtered.length);
    grid.innerHTML = filtered.map(card).join("");
  }

  function buildChips(regions){
    if(!chips) return;
    chips.innerHTML = ["All", ...regions].map(r=>{
      const active = (r===region) ? 'aria-current="true"' : "";
      return `<button class="chip" data-region="${esc(r)}" ${active}>${esc(r)}</button>`;
    }).join("");
    chips.querySelectorAll(".chip").forEach(b=>{
      b.addEventListener("click", ()=>{
        region = b.getAttribute("data-region") || "All";
        buildChips(regions);
        render();
      });
    });
  }

  fetch(dataUrl).then(r=>r.json()).then(d=>{
    ALL = d || [];
    const regions = Array.from(new Set(ALL.map(x=>x.region))).sort();
    buildChips(regions);
    render();
  });

  if(search){ search.addEventListener("input", ()=>render()); }
})();
