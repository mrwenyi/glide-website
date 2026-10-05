const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#mobile-nav');
const closeMenu = () => {
  if (!nav || !toggle) return;
  nav.hidden = true;
  toggle.setAttribute('aria-expanded', 'false');
};
toggle?.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', String(open));
  nav.hidden = !open;
});
nav?.addEventListener('click', event => {
  if (event.target.closest('a')) closeMenu();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && toggle?.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    toggle.focus();
  }
});
matchMedia('(min-width: 761px)').addEventListener('change', event => {
  if (event.matches) closeMenu();
});

const data = document.querySelector('#feature-data');
if (data) {
  const features = JSON.parse(data.textContent);
  const tabs = [...document.querySelectorAll('[data-feature]')];
  const panel = document.querySelector('#feature-panel');
  const select = tab => {
    const feature = features.find(f => f.id === tab.dataset.feature);
    if (!feature) return;
    tabs.forEach(item => {
      item.setAttribute('aria-selected', String(item === tab));
      item.tabIndex = item === tab ? 0 : -1;
    });
    panel.setAttribute('aria-labelledby', tab.id);
    panel.querySelector('[data-feature-title]').textContent = feature.title;
    panel.querySelector('[data-feature-text]').textContent = feature.text;
    panel.querySelector('[data-feature-note]').textContent = feature.note;
    const image = tab.querySelector('svg').cloneNode(true);
    panel.querySelector('.feature-icon').replaceChildren(image);
    const effect = panel.querySelector('[data-demo-effect]');
    effect.dataset.demoEffect = feature.id;
    effect.replaceChildren(image.cloneNode(true));
  };
  tabs.forEach(tab => {
    tab.addEventListener('click', () => select(tab));
    tab.addEventListener('keydown', event => {
      const index = tabs.indexOf(tab);
      let next;
      if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
      if (event.key === 'ArrowLeft') next = (index + tabs.length - 1) % tabs.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = tabs.length - 1;
      if (next !== undefined) {
        event.preventDefault();
        select(tabs[next]);
        tabs[next].focus();
      }
    });
  });
}
