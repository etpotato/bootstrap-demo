import 'bootstrap/js/dist/collapse';

const setSelectlist = selectlist => {
  const ACTIVE_CLASS = 'selectlist-active';
  const TAB_CLASS = 'js-selectlist-choice';
  const parent = selectlist;
  const toggle = parent.querySelector('.js-selectlist-toggle');
  const toggleImg = toggle.querySelector('.js-selectlist-toggle-img');
  const tablist = parent.querySelector('.js-selectlist-tablist');
  let isExpanded;

  const toggleMenu = evt => {
    evt.preventDefault();
    toggle.classList.toggle(ACTIVE_CLASS);
    isExpanded = toggle['aria-expanded'] === 'true';
    toggle['aria-expanded'] = !isExpanded;
    isExpanded = !isExpanded;
  };

  const handleTabClick = evt => {
    evt.preventDefault();
    if (!evt.target.classList.contains(TAB_CLASS)) return;
    toggleImg.src = evt.target.querySelector('img').src;
    toggleMenu(evt);
  };

  toggle.addEventListener('click', toggleMenu);
  tablist.addEventListener('click', handleTabClick);
};

const selectlists = [...document.querySelectorAll('.js-selectlist')];
if (selectlists.length) selectlists.forEach(selectlist => setSelectlist(selectlist));
