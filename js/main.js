// The Social Tribe - Interactive Script (Light/Dark Toggle, City Slider, Feedbacks)
document.addEventListener('DOMContentLoaded', () => {

  // 1. Theme Management (Light Theme Default, Single Dedicated Toggle Button)
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const logoBtn = document.getElementById('brandLogoBtn');
  const brandHeaderTitle = document.getElementById('brandHeaderTitle');

  const sunIconSvg = `
    <svg class="svg-ico" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41s-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41s-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"/>
    </svg>`;

  const moonIconSvg = `
    <svg class="svg-ico" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-3.03 0-5.5-2.47-5.5-5.5 0-1.82.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z"/>
    </svg>`;

  function applyTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      if (themeToggleBtn) {
        themeToggleBtn.innerHTML = sunIconSvg;
        themeToggleBtn.setAttribute('title', 'Switch to Light Theme');
        themeToggleBtn.setAttribute('aria-label', 'Switch to Light Theme');
      }
    } else {
      document.documentElement.removeAttribute('data-theme');
      if (themeToggleBtn) {
        themeToggleBtn.innerHTML = moonIconSvg;
        themeToggleBtn.setAttribute('title', 'Switch to Dark Theme');
        themeToggleBtn.setAttribute('aria-label', 'Switch to Dark Theme');
      }
    }
    localStorage.setItem('tst_theme', theme);
  }

  // Load saved preference, default to light
  const savedTheme = localStorage.getItem('tst_theme') || 'light';
  applyTheme(savedTheme);

  function toggleTheme(e) {
    if (e) e.preventDefault();
    const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', toggleTheme);
  }

  // Logo & brand title click smoothly returns to top
  if (logoBtn) {
    logoBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  if (brandHeaderTitle) {
    brandHeaderTitle.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // 2. 35+ Verified Feedbacks Database (Matching User Screenshot)
  const feedbacks = [
    { name: "Neha", city: "Gandhinagar", text: "This page helped me understand the available services easily. Availability in Gandhinagar was easy to check." },
    { name: "Rahul", city: "Mumbai", text: "Booked the Netflix & Chill suite last Friday. The private room and big screen projector setup was completely uninterrupted." },
    { name: "Kunal", city: "Delhi NCR", text: "The long drive with lunch on Thursday was an incredible experience. Smooth booking on WhatsApp." },
    { name: "Aditya", city: "Bangalore", text: "Private room with projector and unlimited drinks. Exactly as described, zero disturbance." },
    { name: "Siddharth", city: "Pune", text: "The movie date setup was top tier. The ambiance and comfort were outstanding." },
    { name: "Pooja", city: "Ahmedabad", text: "Super easy to check availability in Ahmedabad. The host on WhatsApp responded within minutes." },
    { name: "Sameer", city: "Jaipur", text: "The big screen projector with Netflix and flavored hookah made for an unforgettable evening." },
    { name: "Vikram", city: "Gurgaon", text: "Total privacy guaranteed. Loved the discretion and seamless experience in Gurgaon." },
    { name: "Rohit", city: "Noida", text: "Booking on WhatsApp was fast and direct. The space in Noida was pristine." },
    { name: "Ananya", city: "Chandigarh", text: "The Thursday long drive with lunch was super relaxing. Great route and great food." },
    { name: "Karan", city: "Surat", text: "Movie theater experience was far better than crowded public halls. Cozy and comfortable." },
    { name: "Varun", city: "Hyderabad", text: "Availability in Hyderabad was smooth to check. Host arranged everything perfectly." },
    { name: "Arindam", city: "Kolkata", text: "Unlimited food and drinks plus premium Netflix access. Best private lounge in Kolkata." },
    { name: "Tushar", city: "Lucknow", text: "No awkward formalities. Private suite was ready when I arrived in Lucknow." },
    { name: "Megha", city: "Indore", text: "Checked slots for Indore and got confirmation instantly on WhatsApp." },
    { name: "Yash", city: "Bhopal", text: "The hookah flavor and ambiance were premium. Completely quiet and private." },
    { name: "Ritesh", city: "Baroda", text: "The Thursday drive from 1 PM to 8 PM was the highlight of my week." },
    { name: "Gaurav", city: "Udaipur", text: "Booked for movie date in Udaipur. Beautiful setup and total privacy." },
    { name: "Manav", city: "Jodhpur", text: "Smooth WhatsApp coordination. Clean luxury space and zero interruptions in Jodhpur." },
    { name: "Hardik", city: "Rajkot", text: "Big screen projector experience was wonderful in Rajkot." },
    { name: "Prateek", city: "Nashik", text: "The private room in Nashik had great vibes and chilled drinks ready." },
    { name: "Saurabh", city: "Nagpur", text: "Loved how fast the WhatsApp channel updates available slots in Nagpur." },
    { name: "Ayush", city: "Dehradun", text: "The Netflix & Chill space in Dehradun was warm, cozy, and private." },
    { name: "Deepak", city: "Agra", text: "Clear details without unnecessary fluff. Got my booking confirmed in Agra easily." },
    { name: "Alok", city: "Varanasi", text: "Checked availability for Varanasi. The setup was luxurious and discreet." },
    { name: "Shivam", city: "Kanpur", text: "The long drive with lunch was organized seamlessly in Kanpur." },
    { name: "Subhash", city: "Bhubaneswar", text: "Loved the private projector room in Bhubaneswar. Excellent refreshments." },
    { name: "Nikhil", city: "Raipur", text: "Fast booking, great privacy, and smooth vibes in Raipur." },
    { name: "Amit", city: "Bilaspur", text: "Direct WhatsApp communication without any hassle. Loved the Bilaspur setup." },
    { name: "Harsh", city: "Kota", text: "The hookah was great and the room was completely comfortable in Kota." },
    { name: "Mohit", city: "Gwalior", text: "Easy slot booking in Gwalior. Very respectful and private atmosphere." },
    { name: "Tarun", city: "Ujjain", text: "The Thursday highway drive with lunch in Ujjain was memorable." },
    { name: "Dev", city: "Jabalpur", text: "Everything matched the description. Private room and big screen in Jabalpur." },
    { name: "Chirag", city: "Bhavnagar", text: "Availability in Bhavnagar was easy to verify. WhatsApp booking was quick." },
    { name: "Kabir", city: "Mumbai", text: "The Social Tribe delivers pure privacy. Loved the movie date in Mumbai." }
  ];

  // 3. Populate Feedbacks Slider
  const fbTrack = document.getElementById('feedbackTrack');
  if (fbTrack) {
    feedbacks.forEach(fb => {
      const card = document.createElement('div');
      card.className = 'feedback-card-ui';
      card.innerHTML = `
        <div class="fb-top-bar">
          <div class="fb-avatar">${fb.name.charAt(0)}</div>
          <div class="fb-header-text">FEEDBACKS</div>
        </div>
        <p class="fb-quote">"${fb.text}"</p>
        <div class="fb-author">${fb.name} from ${fb.city}</div>
      `;
      fbTrack.appendChild(card);
    });
  }

  // 4. City Slider & Live Location Search Controller
  const cityTrack = document.getElementById('cityTrack');
  const cityPrev = document.getElementById('cityPrev');
  const cityNext = document.getElementById('cityNext');
  const citySearchInput = document.getElementById('citySearchInput');
  const citySearchClear = document.getElementById('citySearchClear');
  const citySearchMsg = document.getElementById('citySearchMsg');
  const filterChips = document.querySelectorAll('.filter-chip');
  let cityIndex = 0;
  let isSearchActive = false;
  let cityAutoTimer = null;

  function updateCitySlider() {
    if (!cityTrack || isSearchActive) return;
    const card = cityTrack.querySelector('.city-card:not(.search-hidden)');
    if (!card) return;
    const cardWidth = card.offsetWidth + 19.2;
    const visibleCards = cityTrack.querySelectorAll('.city-card:not(.search-hidden)').length;
    const maxIndex = visibleCards - Math.floor(cityTrack.parentElement.offsetWidth / cardWidth);
    if (cityIndex > maxIndex) cityIndex = 0;
    if (cityIndex < 0) cityIndex = Math.max(0, maxIndex);
    cityTrack.style.transform = `translateX(-${cityIndex * cardWidth}px)`;
  }

  function startCityAutoRotate() {
    if (cityAutoTimer) clearInterval(cityAutoTimer);
    cityAutoTimer = setInterval(() => {
      if (!isSearchActive) {
        cityIndex++;
        updateCitySlider();
      }
    }, 4000);
  }

  if (cityNext && cityPrev) {
    cityNext.addEventListener('click', () => {
      cityIndex++;
      updateCitySlider();
    });
    cityPrev.addEventListener('click', () => {
      cityIndex--;
      updateCitySlider();
    });
    startCityAutoRotate();
  }

  // Live Location Search & Filter
  function filterCities(query) {
    const q = query.trim().toLowerCase();
    const cards = cityTrack ? cityTrack.querySelectorAll('.city-card') : [];
    let matchCount = 0;

    if (!q || q === 'all') {
      isSearchActive = false;
      cards.forEach(card => {
        card.classList.remove('search-hidden', 'search-highlight');
      });
      if (citySearchClear) citySearchClear.style.display = 'none';
      if (citySearchMsg) citySearchMsg.textContent = '35 verified locations live & accepting reservations today';
      cityIndex = 0;
      updateCitySlider();
      return;
    }

    isSearchActive = true;
    cityTrack.style.transform = 'none';
    if (citySearchClear) citySearchClear.style.display = 'flex';

    cards.forEach(card => {
      const nameElem = card.querySelector('.city-name');
      const cityName = nameElem ? nameElem.textContent.toLowerCase() : '';
      if (cityName.includes(q)) {
        card.classList.remove('search-hidden');
        card.classList.add('search-highlight');
        matchCount++;
      } else {
        card.classList.add('search-hidden');
        card.classList.remove('search-highlight');
      }
    });

    if (citySearchMsg) {
      if (matchCount > 0) {
        citySearchMsg.textContent = `Found ${matchCount} ${matchCount === 1 ? 'city' : 'cities'} matching "${query}" — Instant Reservation Ready`;
      } else {
        citySearchMsg.textContent = `No exact match for "${query}". Check availability on WhatsApp directly!`;
      }
    }
  }

  if (citySearchInput) {
    citySearchInput.addEventListener('input', (e) => {
      filterCities(e.target.value);
      // Reset filter chips active state if typing custom
      filterChips.forEach(c => c.classList.remove('active'));
    });
  }

  if (citySearchClear) {
    citySearchClear.addEventListener('click', () => {
      if (citySearchInput) citySearchInput.value = '';
      filterCities('');
      filterChips.forEach(c => {
        if (c.getAttribute('data-filter') === 'all') c.classList.add('active');
        else c.classList.remove('active');
      });
    });
  }

  filterChips.forEach(chip => {
    chip.addEventListener('click', () => {
      filterChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      const filter = chip.getAttribute('data-filter');
      if (citySearchInput) {
        citySearchInput.value = filter === 'all' ? '' : filter;
      }
      filterCities(filter);
    });
  });

  // 5. Feedback Slider Controller
  const fbPrev = document.getElementById('fbPrev');
  const fbNext = document.getElementById('fbNext');
  let fbIndex = 0;

  function updateFbSlider() {
    if (!fbTrack) return;
    const card = fbTrack.querySelector('.feedback-card-ui');
    if (!card) return;
    const cardWidth = card.offsetWidth + 19.2;
    const maxIndex = feedbacks.length - Math.floor(fbTrack.parentElement.offsetWidth / cardWidth);
    if (fbIndex > maxIndex) fbIndex = 0;
    if (fbIndex < 0) fbIndex = Math.max(0, maxIndex);
    fbTrack.style.transform = `translateX(-${fbIndex * cardWidth}px)`;
  }

  if (fbNext && fbPrev) {
    fbNext.addEventListener('click', () => {
      fbIndex++;
      updateFbSlider();
    });
    fbPrev.addEventListener('click', () => {
      fbIndex--;
      updateFbSlider();
    });

    setInterval(() => {
      fbIndex++;
      updateFbSlider();
    }, 4500);
  }

  // Touch swipe support for mobile
  function attachSwipe(elem, onLeft, onRight) {
    if (!elem) return;
    let startX = 0;
    let startY = 0;
    elem.addEventListener('touchstart', (e) => {
      startX = e.changedTouches[0].clientX;
      startY = e.changedTouches[0].clientY;
    }, { passive: true });
    elem.addEventListener('touchend', (e) => {
      const diffX = e.changedTouches[0].clientX - startX;
      const diffY = e.changedTouches[0].clientY - startY;
      if (Math.abs(diffX) > 40 && Math.abs(diffX) > Math.abs(diffY)) {
        if (diffX < 0) {
          onLeft();
        } else {
          onRight();
        }
      }
    }, { passive: true });
  }

  attachSwipe(cityTrack, () => {
    cityIndex++;
    updateCitySlider();
  }, () => {
    cityIndex--;
    updateCitySlider();
  });

  attachSwipe(fbTrack, () => {
    fbIndex++;
    updateFbSlider();
  }, () => {
    fbIndex--;
    updateFbSlider();
  });

  window.addEventListener('resize', () => {
    updateCitySlider();
    updateFbSlider();
  });

  // 6. Realtime Floating Feedback Toast (Matching Screenshot)
  const toast = document.getElementById('floatingToast');
  const toastClose = document.getElementById('toastClose');
  const toastAvatar = document.getElementById('toastAvatar');
  const toastQuote = document.getElementById('toastQuote');
  const toastAuthor = document.getElementById('toastAuthor');
  let isToastDismissed = false;
  let toastIndex = 0;

  function showNextToast() {
    if (isToastDismissed || !toast) return;
    const fb = feedbacks[toastIndex % feedbacks.length];
    toastIndex++;

    toastAvatar.textContent = fb.name.charAt(0);
    toastQuote.textContent = `"${fb.text}"`;
    toastAuthor.textContent = `${fb.name} from ${fb.city}`;

    toast.classList.add('active');

    setTimeout(() => {
      if (!isToastDismissed) {
        toast.classList.remove('active');
      }
    }, 4500);
  }

  if (toastClose) {
    toastClose.addEventListener('click', (e) => {
      e.stopPropagation();
      e.preventDefault();
      isToastDismissed = true;
      toast.classList.remove('active');
    });
  }

  setTimeout(() => {
    showNextToast();
    setInterval(showNextToast, 7500);
  }, 2000);

  // 7. Interactive Service Card Image Sliders (Seductive, Fun Boy-Girl, Fun Girl-Girl)
  const serviceSliders = document.querySelectorAll('.service-slider');
  serviceSliders.forEach(slider => {
    const slides = slider.querySelectorAll('.service-slide');
    const dots = slider.querySelectorAll('.s-dot');
    const prevBtn = slider.querySelector('.prev-btn');
    const nextBtn = slider.querySelector('.next-btn');
    let cur = 0;

    function showSlide(idx) {
      if (idx >= slides.length) cur = 0;
      else if (idx < 0) cur = slides.length - 1;
      else cur = idx;

      slides.forEach((s, i) => s.classList.toggle('active', i === cur));
      dots.forEach((d, i) => d.classList.toggle('active', i === cur));
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        e.preventDefault();
        showSlide(cur + 1);
      });
    }
    if (prevBtn) {
      prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        e.preventDefault();
        showSlide(cur - 1);
      });
    }
    dots.forEach((dot, i) => {
      dot.addEventListener('click', (e) => {
        e.stopPropagation();
        e.preventDefault();
        showSlide(i);
      });
    });

    // Touch swipe for card slider
    let touchStartX = 0;
    slider.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    slider.addEventListener('touchend', (e) => {
      const diff = e.changedTouches[0].screenX - touchStartX;
      if (diff > 40) showSlide(cur - 1);
      else if (diff < -40) showSlide(cur + 1);
    }, { passive: true });

    // Auto rotate every 3.8s with small stagger
    let timer = setInterval(() => showSlide(cur + 1), 3800 + Math.random() * 800);
    slider.addEventListener('mouseenter', () => clearInterval(timer));
    slider.addEventListener('mouseleave', () => {
      timer = setInterval(() => showSlide(cur + 1), 3800 + Math.random() * 800);
    });
  });

});

