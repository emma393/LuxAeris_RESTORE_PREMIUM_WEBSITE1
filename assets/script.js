
const AIRPORTS = ["New York", "New York JFK", "New York (JFK)", "JFK - New York", "New York EWR", "New York (EWR)", "EWR - New York", "New York LGA", "New York (LGA)", "LGA - New York", "Los Angeles", "Los Angeles LAX", "Los Angeles (LAX)", "LAX - Los Angeles", "Chicago", "Chicago ORD", "Chicago (ORD)", "ORD - Chicago", "Chicago MDW", "Chicago (MDW)", "MDW - Chicago", "Miami", "Miami MIA", "Miami (MIA)", "MIA - Miami", "Miami FLL", "Miami (FLL)", "FLL - Miami", "San Francisco", "San Francisco SFO", "San Francisco (SFO)", "SFO - San Francisco", "Boston", "Boston BOS", "Boston (BOS)", "BOS - Boston", "Washington DC", "Washington DC IAD", "Washington DC (IAD)", "IAD - Washington DC", "Washington DC DCA", "Washington DC (DCA)", "DCA - Washington DC", "Dallas", "Dallas DFW", "Dallas (DFW)", "DFW - Dallas", "Houston", "Houston IAH", "Houston (IAH)", "IAH - Houston", "Seattle", "Seattle SEA", "Seattle (SEA)", "SEA - Seattle", "Atlanta", "Atlanta ATL", "Atlanta (ATL)", "ATL - Atlanta", "Orlando", "Orlando MCO", "Orlando (MCO)", "MCO - Orlando", "Las Vegas", "Las Vegas LAS", "Las Vegas (LAS)", "LAS - Las Vegas", "Philadelphia", "Philadelphia PHL", "Philadelphia (PHL)", "PHL - Philadelphia", "Phoenix", "Phoenix PHX", "Phoenix (PHX)", "PHX - Phoenix", "San Diego", "San Diego SAN", "San Diego (SAN)", "SAN - San Diego", "Denver", "Denver DEN", "Denver (DEN)", "DEN - Denver", "Detroit", "Detroit DTW", "Detroit (DTW)", "DTW - Detroit", "Charlotte", "Charlotte CLT", "Charlotte (CLT)", "CLT - Charlotte", "Minneapolis", "Minneapolis MSP", "Minneapolis (MSP)", "MSP - Minneapolis", "Austin", "Austin AUS", "Austin (AUS)", "AUS - Austin", "Nashville", "Nashville BNA", "Nashville (BNA)", "BNA - Nashville", "Toronto", "Toronto YYZ", "Toronto (YYZ)", "YYZ - Toronto", "Vancouver", "Vancouver YVR", "Vancouver (YVR)", "YVR - Vancouver", "Montreal", "Montreal YUL", "Montreal (YUL)", "YUL - Montreal", "Calgary", "Calgary YYC", "Calgary (YYC)", "YYC - Calgary", "Mexico City", "Mexico City MEX", "Mexico City (MEX)", "MEX - Mexico City", "Cancun", "Cancun CUN", "Cancun (CUN)", "CUN - Cancun", "Guadalajara", "Guadalajara GDL", "Guadalajara (GDL)", "GDL - Guadalajara", "Panama City", "Panama City PTY", "Panama City (PTY)", "PTY - Panama City", "Sao Paulo", "Sao Paulo GRU", "Sao Paulo (GRU)", "GRU - Sao Paulo", "Rio de Janeiro", "Rio de Janeiro GIG", "Rio de Janeiro (GIG)", "GIG - Rio de Janeiro", "Buenos Aires", "Buenos Aires EZE", "Buenos Aires (EZE)", "EZE - Buenos Aires", "Lima", "Lima LIM", "Lima (LIM)", "LIM - Lima", "Bogota", "Bogota BOG", "Bogota (BOG)", "BOG - Bogota", "Santiago", "Santiago SCL", "Santiago (SCL)", "SCL - Santiago", "Quito", "Quito UIO", "Quito (UIO)", "UIO - Quito", "San Jose", "San Jose SJO", "San Jose (SJO)", "SJO - San Jose", "London", "London LHR", "London (LHR)", "LHR - London", "London LGW", "London (LGW)", "LGW - London", "London LCY", "London (LCY)", "LCY - London", "Paris", "Paris CDG", "Paris (CDG)", "CDG - Paris", "Paris ORY", "Paris (ORY)", "ORY - Paris", "Nice", "Nice NCE", "Nice (NCE)", "NCE - Nice", "Rome", "Rome FCO", "Rome (FCO)", "FCO - Rome", "Milan", "Milan MXP", "Milan (MXP)", "MXP - Milan", "Milan LIN", "Milan (LIN)", "LIN - Milan", "Venice", "Venice VCE", "Venice (VCE)", "VCE - Venice", "Madrid", "Madrid MAD", "Madrid (MAD)", "MAD - Madrid", "Barcelona", "Barcelona BCN", "Barcelona (BCN)", "BCN - Barcelona", "Lisbon", "Lisbon LIS", "Lisbon (LIS)", "LIS - Lisbon", "Porto", "Porto OPO", "Porto (OPO)", "OPO - Porto", "Amsterdam", "Amsterdam AMS", "Amsterdam (AMS)", "AMS - Amsterdam", "Brussels", "Brussels BRU", "Brussels (BRU)", "BRU - Brussels", "Frankfurt", "Frankfurt FRA", "Frankfurt (FRA)", "FRA - Frankfurt", "Munich", "Munich MUC", "Munich (MUC)", "MUC - Munich", "Berlin", "Berlin BER", "Berlin (BER)", "BER - Berlin", "Hamburg", "Hamburg HAM", "Hamburg (HAM)", "HAM - Hamburg", "Zurich", "Zurich ZRH", "Zurich (ZRH)", "ZRH - Zurich", "Geneva", "Geneva GVA", "Geneva (GVA)", "GVA - Geneva", "Vienna", "Vienna VIE", "Vienna (VIE)", "VIE - Vienna", "Prague", "Prague PRG", "Prague (PRG)", "PRG - Prague", "Budapest", "Budapest BUD", "Budapest (BUD)", "BUD - Budapest", "Warsaw", "Warsaw WAW", "Warsaw (WAW)", "WAW - Warsaw", "Krakow", "Krakow KRK", "Krakow (KRK)", "KRK - Krakow", "Athens", "Athens ATH", "Athens (ATH)", "ATH - Athens", "Santorini", "Santorini JTR", "Santorini (JTR)", "JTR - Santorini", "Mykonos", "Mykonos JMK", "Mykonos (JMK)", "JMK - Mykonos", "Dublin", "Dublin DUB", "Dublin (DUB)", "DUB - Dublin", "Edinburgh", "Edinburgh EDI", "Edinburgh (EDI)", "EDI - Edinburgh", "Copenhagen", "Copenhagen CPH", "Copenhagen (CPH)", "CPH - Copenhagen", "Stockholm", "Stockholm ARN", "Stockholm (ARN)", "ARN - Stockholm", "Oslo", "Oslo OSL", "Oslo (OSL)", "OSL - Oslo", "Helsinki", "Helsinki HEL", "Helsinki (HEL)", "HEL - Helsinki", "Istanbul", "Istanbul IST", "Istanbul (IST)", "IST - Istanbul", "Istanbul SAW", "Istanbul (SAW)", "SAW - Istanbul", "Antalya", "Antalya AYT", "Antalya (AYT)", "AYT - Antalya", "Reykjavik", "Reykjavik KEF", "Reykjavik (KEF)", "KEF - Reykjavik", "Malta", "Malta MLA", "Malta (MLA)", "MLA - Malta", "Dubai", "Dubai DXB", "Dubai (DXB)", "DXB - Dubai", "Dubai DWC", "Dubai (DWC)", "DWC - Dubai", "Abu Dhabi", "Abu Dhabi AUH", "Abu Dhabi (AUH)", "AUH - Abu Dhabi", "Doha", "Doha DOH", "Doha (DOH)", "DOH - Doha", "Riyadh", "Riyadh RUH", "Riyadh (RUH)", "RUH - Riyadh", "Jeddah", "Jeddah JED", "Jeddah (JED)", "JED - Jeddah", "Muscat", "Muscat MCT", "Muscat (MCT)", "MCT - Muscat", "Kuwait City", "Kuwait City KWI", "Kuwait City (KWI)", "KWI - Kuwait City", "Bahrain", "Bahrain BAH", "Bahrain (BAH)", "BAH - Bahrain", "Cairo", "Cairo CAI", "Cairo (CAI)", "CAI - Cairo", "Marrakech", "Marrakech RAK", "Marrakech (RAK)", "RAK - Marrakech", "Casablanca", "Casablanca CMN", "Casablanca (CMN)", "CMN - Casablanca", "Johannesburg", "Johannesburg JNB", "Johannesburg (JNB)", "JNB - Johannesburg", "Cape Town", "Cape Town CPT", "Cape Town (CPT)", "CPT - Cape Town", "Nairobi", "Nairobi NBO", "Nairobi (NBO)", "NBO - Nairobi", "Zanzibar", "Zanzibar ZNZ", "Zanzibar (ZNZ)", "ZNZ - Zanzibar", "Mauritius", "Mauritius MRU", "Mauritius (MRU)", "MRU - Mauritius", "Seychelles", "Seychelles SEZ", "Seychelles (SEZ)", "SEZ - Seychelles", "Tel Aviv", "Tel Aviv TLV", "Tel Aviv (TLV)", "TLV - Tel Aviv", "Amman", "Amman AMM", "Amman (AMM)", "AMM - Amman", "Delhi", "Delhi DEL", "Delhi (DEL)", "DEL - Delhi", "Mumbai", "Mumbai BOM", "Mumbai (BOM)", "BOM - Mumbai", "Bengaluru", "Bengaluru BLR", "Bengaluru (BLR)", "BLR - Bengaluru", "Hyderabad", "Hyderabad HYD", "Hyderabad (HYD)", "HYD - Hyderabad", "Chennai", "Chennai MAA", "Chennai (MAA)", "MAA - Chennai", "Bangkok", "Bangkok BKK", "Bangkok (BKK)", "BKK - Bangkok", "Phuket", "Phuket HKT", "Phuket (HKT)", "HKT - Phuket", "Singapore", "Singapore SIN", "Singapore (SIN)", "SIN - Singapore", "Kuala Lumpur", "Kuala Lumpur KUL", "Kuala Lumpur (KUL)", "KUL - Kuala Lumpur", "Jakarta", "Jakarta CGK", "Jakarta (CGK)", "CGK - Jakarta", "Bali", "Bali DPS", "Bali (DPS)", "DPS - Bali", "Hong Kong", "Hong Kong HKG", "Hong Kong (HKG)", "HKG - Hong Kong", "Tokyo", "Tokyo HND", "Tokyo (HND)", "HND - Tokyo", "Tokyo NRT", "Tokyo (NRT)", "NRT - Tokyo", "Osaka", "Osaka KIX", "Osaka (KIX)", "KIX - Osaka", "Kyoto", "Kyoto KIX", "Kyoto (KIX)", "KIX - Kyoto", "Seoul", "Seoul ICN", "Seoul (ICN)", "ICN - Seoul", "Seoul GMP", "Seoul (GMP)", "GMP - Seoul", "Busan", "Busan PUS", "Busan (PUS)", "PUS - Busan", "Shanghai", "Shanghai PVG", "Shanghai (PVG)", "PVG - Shanghai", "Beijing", "Beijing PEK", "Beijing (PEK)", "PEK - Beijing", "Beijing PKX", "Beijing (PKX)", "PKX - Beijing", "Taipei", "Taipei TPE", "Taipei (TPE)", "TPE - Taipei", "Manila", "Manila MNL", "Manila (MNL)", "MNL - Manila", "Sydney", "Sydney SYD", "Sydney (SYD)", "SYD - Sydney", "Melbourne", "Melbourne MEL", "Melbourne (MEL)", "MEL - Melbourne", "Brisbane", "Brisbane BNE", "Brisbane (BNE)", "BNE - Brisbane", "Perth", "Perth PER", "Perth (PER)", "PER - Perth", "Auckland", "Auckland AKL", "Auckland (AKL)", "AKL - Auckland", "Queenstown", "Queenstown ZQN", "Queenstown (ZQN)", "ZQN - Queenstown", "Maldives", "Maldives MLE", "Maldives (MLE)", "MLE - Maldives", "Male", "Male MLE", "Male (MLE)", "MLE - Male", "Tbilisi", "Tbilisi TBS", "Tbilisi (TBS)", "TBS - Tbilisi", "Yerevan", "Yerevan EVN", "Yerevan (EVN)", "EVN - Yerevan", "Chisinau", "Chisinau RMO", "Chisinau (RMO)", "RMO - Chisinau"];
function formatDateForInput(date) { return date.toISOString().split('T')[0]; }
function closeSuggestionBox(inputId) {
  const current = document.getElementById(`${inputId}-suggestions`);
  if (current) current.remove();
}
function attachAutocomplete(inputId) {
  const input = document.getElementById(inputId);
  if (!input) return;
  input.addEventListener('input', () => {
    closeSuggestionBox(inputId);
    const value = input.value.trim().toLowerCase();
    if (!value) return;
    const matches = AIRPORTS.filter(item => item.toLowerCase().includes(value)).slice(0, 12);
    if (!matches.length) return;
    const box = document.createElement('div');
    box.className = 'suggestions';
    box.id = `${inputId}-suggestions`;
    matches.forEach(match => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.textContent = match;
      btn.addEventListener('click', () => {
        input.value = match;
        closeSuggestionBox(inputId);
      });
      box.appendChild(btn);
    });
    input.parentNode.appendChild(box);
  });
  input.addEventListener('blur', () => setTimeout(() => closeSuggestionBox(inputId), 120));
}
function markField(fieldId, outputId, valid, message) {
  const fieldWrap = document.getElementById(fieldId)?.closest('.field');
  const output = document.getElementById(outputId);
  if (!fieldWrap || !output) return;
  fieldWrap.classList.remove('valid', 'invalid');
  fieldWrap.classList.add(valid ? 'valid' : 'invalid');
  output.className = `validation ${valid ? 'success' : 'error'}`;
  output.textContent = message;
}
function validateEmailField() {
  const email = document.getElementById('email');
  const hidden = document.getElementById('email_status');
  if (!email || !hidden) return true;
  const value = email.value.trim();
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const valid = regex.test(value);
  hidden.value = valid ? 'valid' : 'invalid';
  if (!value) { markField('email', 'email-validation', false, 'Email is missing and will be flagged as invalid.'); return false; }
  if (!valid) { markField('email', 'email-validation', false, 'Email format looks invalid. The request can still be submitted and flagged.'); return false; }
  markField('email', 'email-validation', true, 'Email looks valid.'); return true;
}
function validatePhoneField() {
  const phone = document.getElementById('phone');
  const hidden = document.getElementById('phone_status');
  if (!phone || !hidden) return true;
  const value = phone.value.trim();
  const regex = /^\+?[0-9\s\-()](7, 20)$/;
  const valid = regex.test(value);
  hidden.value = valid ? 'valid' : 'invalid';
  if (!value) { markField('phone', 'phone-validation', false, 'Phone number is missing and will be flagged as invalid.'); return false; }
  if (!valid) { markField('phone', 'phone-validation', false, 'Phone format looks invalid. The request can still be submitted and flagged.'); return false; }
  markField('phone', 'phone-validation', true, 'Phone number looks valid.'); return true;
}
function updateBudgetOptions() {
  const cabin = document.getElementById('cabin');
  const budget = document.getElementById('budget');
  if (!cabin || !budget) return;
  const ranges = {
    "Premium Economy": ["$1,200 – $2,000", "$2,000 – $3,000", "$3,000 – $4,000"],
    "Business": ["$3,000 – $6,000", "$6,000 – $10,000", "$10,000 – $15,000"],
    "First Class": ["$8,000 – $12,000", "$12,000 – $18,000", "$18,000 – $25,000+"]
  };
  const options = ranges[cabin.value] || [];
  budget.innerHTML = options.map(item => `<option value="${item}">${item}</option>`).join('');
}
function syncConsentFields() {
  validateEmailField();
  validatePhoneField();
  const departure = document.getElementById('departure');
  const returning = document.getElementById('return');
  if (departure && returning && departure.value && returning.value && returning.value < departure.value) {
    alert('Return date cannot be earlier than departure date.');
    return false;
  }
  return true;
}
function showCookiePopup() {
  document.getElementById('cookie-overlay')?.classList.add('show');
  document.getElementById('cookie-modal')?.classList.add('show');
}
function hideCookiePopup() {
  document.getElementById('cookie-overlay')?.classList.remove('show');
  document.getElementById('cookie-modal')?.classList.remove('show');
}
function saveCookieChoice(choice) {
  const analytics = document.getElementById('cookie-analytics');
  const state = { choice, analytics: analytics ? analytics.checked : false, savedAt: new Date().toISOString() };
  localStorage.setItem('luxaeris_cookie_choice', JSON.stringify(state));
  hideCookiePopup();
}
document.addEventListener('DOMContentLoaded', () => {
  const departure = document.getElementById('departure');
  const returning = document.getElementById('return');
  const today = new Date();
  const max = new Date(); max.setDate(today.getDate() + 364);
  if (departure && returning) {
    departure.min = formatDateForInput(today);
    departure.max = formatDateForInput(max);
    returning.min = formatDateForInput(today);
    returning.max = formatDateForInput(max);
    departure.addEventListener('change', () => { if (departure.value) returning.min = departure.value; });
  }
  attachAutocomplete('origin'); attachAutocomplete('destination');
  const cabin = document.getElementById('cabin');
  if (cabin) { cabin.addEventListener('change', updateBudgetOptions); updateBudgetOptions(); }
  document.getElementById('email')?.addEventListener('blur', validateEmailField);
  document.getElementById('phone')?.addEventListener('blur', validatePhoneField);
  const menuToggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.site-nav');
  if (menuToggle && menu) {
    menuToggle.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', String(open));
    });
  }
  const form = document.querySelector('form[name="quote-request"]');
  if (form) form.addEventListener('submit', () => syncConsentFields());
  if (!localStorage.getItem('luxaeris_cookie_choice')) showCookiePopup();
  document.getElementById('cookie-manage')?.addEventListener('click', () => {
    const prefs = document.getElementById('cookie-preferences');
    if (prefs) prefs.hidden = !prefs.hidden;
  });
  document.getElementById('cookie-accept')?.addEventListener('click', () => saveCookieChoice('accept_all'));
  document.getElementById('cookie-reject')?.addEventListener('click', () => saveCookieChoice('essential_only'));
  document.getElementById('cookie-save')?.addEventListener('click', () => saveCookieChoice('custom'));
});
