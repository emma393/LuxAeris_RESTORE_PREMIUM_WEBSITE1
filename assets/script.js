const AIRPORTS = ["New York JFK", "New York EWR", "Los Angeles LAX", "Chicago ORD", "Miami MIA", "San Francisco SFO", "Boston BOS", "Washington DC IAD", "Dallas DFW", "Seattle SEA", "Toronto YYZ", "Vancouver YVR", "London LHR", "London LGW", "Paris CDG", "Rome FCO", "Milan MXP", "Madrid MAD", "Barcelona BCN", "Lisbon LIS", "Amsterdam AMS", "Frankfurt FRA", "Munich MUC", "Zurich ZRH", "Vienna VIE", "Prague PRG", "Athens ATH", "Istanbul IST", "Dubai DXB", "Abu Dhabi AUH", "Doha DOH", "Riyadh RUH", "Singapore SIN", "Tokyo HND", "Tokyo NRT", "Osaka KIX", "Seoul ICN", "Hong Kong HKG", "Bangkok BKK", "Phuket HKT", "Bali DPS", "Sydney SYD", "Melbourne MEL", "Auckland AKL", "Male MLE"];

function formatDateForInput(date) {
  return date.toISOString().split('T')[0];
}

function attachAutocomplete(inputId) {
  const input = document.getElementById(inputId);
  if (!input) return;
  input.addEventListener('input', () => {
    closeSuggestionBox(inputId);
    const value = input.value.trim().toLowerCase();
    if (!value) return;
    const matches = AIRPORTS.filter(item => item.toLowerCase().includes(value)).slice(0, 8);
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
  input.addEventListener('blur', () => {
    setTimeout(() => closeSuggestionBox(inputId), 150);
  });
}

function closeSuggestionBox(inputId) {
  const current = document.getElementById(`${inputId}-suggestions`);
  if (current) current.remove();
}

function updateBudgetOptions() {
  const cabin = document.getElementById('cabin');
  const budget = document.getElementById('budget');
  if (!cabin || !budget) return;
  const ranges = {
    "Premium Economy": [
      "$1,200 – $2,000",
      "$2,000 – $3,000",
      "$3,000 – $4,000"
    ],
    "Business": [
      "$3,000 – $6,000",
      "$6,000 – $10,000",
      "$10,000 – $15,000"
    ],
    "First Class": [
      "$8,000 – $12,000",
      "$12,000 – $18,000",
      "$18,000 – $25,000+"
    ]
  };
  const selected = cabin.value;
  const options = ranges[selected] || [];
  budget.innerHTML = options.map(item => `<option value="${item}">${item}</option>`).join('');
}

function validateEmailField() {
  const email = document.getElementById('email');
  const output = document.getElementById('email-validation');
  if (!email || !output) return true;
  const value = email.value.trim();
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!value) {
    output.textContent = 'Please enter your email address.';
    output.className = 'validation error';
    return false;
  }
  if (!regex.test(value)) {
    output.textContent = 'Please enter a valid email address.';
    output.className = 'validation error';
    return false;
  }
  output.textContent = 'Email looks valid.';
  output.className = 'validation success';
  return true;
}

function validatePhoneField() {
  const phone = document.getElementById('phone');
  const output = document.getElementById('phone-validation');
  if (!phone || !output) return true;
  const value = phone.value.trim();
  const regex = /^\+?[0-9\s\-()](7, 20)$/;
  if (!value) {
    output.textContent = 'Please enter your phone or WhatsApp number.';
    output.className = 'validation error';
    return false;
  }
  if (!regex.test(value)) {
    output.textContent = 'Please enter a valid phone number.';
    output.className = 'validation error';
    return false;
  }
  output.textContent = 'Phone number looks valid.';
  output.className = 'validation success';
  return true;
}

function validateDates() {
  const departure = document.getElementById('departure');
  const returning = document.getElementById('return');
  if (!departure || !returning) return true;
  if (departure.value && returning.value && returning.value < departure.value) {
    alert('Return date cannot be earlier than departure date.');
    return false;
  }
  return true;
}

function validateForm() {
  const emailOk = validateEmailField();
  const phoneOk = validatePhoneField();
  const datesOk = validateDates();
  return emailOk && phoneOk && datesOk;
}

document.addEventListener('DOMContentLoaded', () => {
  const departure = document.getElementById('departure');
  const returning = document.getElementById('return');
  const today = new Date();
  const max = new Date();
  max.setDate(today.getDate() + 364);

  if (departure && returning) {
    departure.min = formatDateForInput(today);
    departure.max = formatDateForInput(max);
    returning.min = formatDateForInput(today);
    returning.max = formatDateForInput(max);
    departure.addEventListener('change', () => {
      if (departure.value) {
        returning.min = departure.value;
      }
    });
  }

  attachAutocomplete('origin');
  attachAutocomplete('destination');

  const cabin = document.getElementById('cabin');
  if (cabin) {
    cabin.addEventListener('change', updateBudgetOptions);
    updateBudgetOptions();
  }

  const email = document.getElementById('email');
  const phone = document.getElementById('phone');
  if (email) email.addEventListener('blur', validateEmailField);
  if (phone) phone.addEventListener('blur', validatePhoneField);

  const menuToggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.site-nav');
  if (menuToggle && menu) {
    menuToggle.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', String(open));
    });
  }

  const cookieBanner = document.getElementById('cookie-banner');
  const cookieButton = document.getElementById('accept-cookies');
  if (cookieBanner && cookieButton) {
    if (localStorage.getItem('luxaeris_cookie_ok') === '1') {
      cookieBanner.style.display = 'none';
    }
    cookieButton.addEventListener('click', () => {
      localStorage.setItem('luxaeris_cookie_ok', '1');
      cookieBanner.style.display = 'none';
    });
  }
});