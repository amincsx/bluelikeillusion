// Common initialization for language switcher and scroll hide/show
(function() {
  // Map pages to their FA/EN counterparts
  const pageMap = {
    'index.html': 'index-fa.html',
    'index-fa.html': 'index.html',
    'services.html': 'services-fa.html',
    'services-fa.html': 'services.html',
    'about.html': 'about-fa.html',
    'about-fa.html': 'about.html',
    'contact.html': 'contact-fa.html',
    'contact-fa.html': 'contact.html',
    'create.html': 'create-fa.html',
    'create-fa.html': 'create.html'
  };

  function getFileName(pathname) {
    const parts = pathname.split('/');
    return parts[parts.length - 1] || 'index.html';
  }

  function initLanguageSwitcher() {
    const langSelect = document.getElementById('langSelect');
    if (!langSelect) return;

    const file = getFileName(window.location.pathname);
    const isFa = file.includes('-fa');
    langSelect.value = isFa ? 'fa' : 'en';

    langSelect.onchange = function() {
      const current = getFileName(window.location.pathname);
      const target = pageMap[current] || (this.value === 'fa' ? 'index-fa.html' : 'index.html');
      window.location.href = target;
    };
  }

  function initScrollHideShow() {
    const nav = document.querySelector('.explore-nav') || document.querySelector('.simple-nav');
    if (!nav) return;

    let lastY = window.pageYOffset || document.documentElement.scrollTop || 0;
    let ticking = false;
    let stopTimer = null;
    const sensitivityPx = 0; // immediate reaction
    let touchStartY = null;

    const applyState = (scrollTop) => {
      const delta = scrollTop - lastY;
      // Hide on any downward movement, show on any upward movement
      if (delta > 0 && scrollTop > 0) {
        nav.classList.add('hidden');
      } else if (delta < 0) {
        nav.classList.remove('hidden');
      }

      // Always show when very close to the top
      if (scrollTop <= 20) {
        nav.classList.remove('hidden');
      }

      lastY = scrollTop;
    };

    const handle = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      applyState(scrollTop);
      ticking = false;
    };

    const onScroll = () => {
      // React immediately for single-step scrolls
      handle();
    };

    // Scroll events
    ['scroll'].forEach(evt => {
      window.addEventListener(evt, onScroll, { passive: true });
      document.addEventListener(evt, onScroll, { passive: true });
    });

    // Wheel: respond instantly based on direction
    const onWheel = (e) => {
      if (e.deltaY > 0) {
        nav.classList.add('hidden');
      } else if (e.deltaY < 0) {
        nav.classList.remove('hidden');
      }
      // Sync lastY to current position to avoid lag next frame
      lastY = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      onScroll();
    };
    window.addEventListener('wheel', onWheel, { passive: true });
    document.addEventListener('wheel', onWheel, { passive: true });

    // Touch: respond instantly to swipe direction
    const onTouchStart = (e) => {
      if (e.touches && e.touches.length > 0) {
        touchStartY = e.touches[0].clientY;
      }
    };
    const onTouchMove = (e) => {
      if (e.touches && e.touches.length > 0 && touchStartY !== null) {
        const y = e.touches[0].clientY;
        const diff = touchStartY - y; // positive when moving up (scrolling down)
        if (diff > 0) {
          nav.classList.add('hidden');
        } else if (diff < 0) {
          nav.classList.remove('hidden');
        }
        touchStartY = y;
      }
      onScroll();
    };
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    document.addEventListener('touchstart', onTouchStart, { passive: true });
    document.addEventListener('touchmove', onTouchMove, { passive: true });

    // Keyboard scroll: react on first keypress
    const onKeyDown = (e) => {
      const key = e.key;
      if (key === 'ArrowDown' || key === 'PageDown' || key === 'End' || key === ' ') {
        nav.classList.add('hidden');
      } else if (key === 'ArrowUp' || key === 'PageUp' || key === 'Home') {
        nav.classList.remove('hidden');
      }
      onScroll();
    };
    window.addEventListener('keydown', onKeyDown, { passive: true });
  }

  document.addEventListener('DOMContentLoaded', function() {
    initLanguageSwitcher();
    initScrollHideShow();
  });
})();


