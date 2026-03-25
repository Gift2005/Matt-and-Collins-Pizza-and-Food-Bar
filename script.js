document.getElementById('menuBtn').addEventListener('click', function() {
  document.getElementById('navDropdown').classList.add('open');
});
document.getElementById('closeMenuBtn').addEventListener('click', function() {
  document.getElementById('navDropdown').classList.remove('open');
});
document.querySelectorAll('#navDropdown a').forEach(function(link) {
  link.addEventListener('click', function() {
    document.getElementById('navDropdown').classList.remove('open');
  });
});
function openMenu() {
  var modal = document.getElementById('menuModal');
  modal.classList.add('open');
  modal.scrollTop = 0;
  document.body.style.overflow = 'hidden';
}
function closeMenu() {
  document.getElementById('menuModal').classList.remove('open');
  document.body.style.overflow = '';
}
(function() {
  var now = new Date();
  var day = now.getDay();
  var time = now.getHours() + now.getMinutes() / 60;
  var s1 = document.getElementById('today-status');
  var s2 = document.getElementById('today-status2');
  var h  = document.getElementById('today-hours');
  var schedule = {
    0: { open: 10, close: 14 },
    1: { open: 9, close: 19.25 },
    2: { open: 9, close: 19.25 },
    3: { open: 9, close: 19.25 },
    4: { open: 9, close: 19.25 },
    5: { open: 9, close: 19.25 },
    6: { open: 9, close: 19.25 }
  };
  var today = schedule[day];
  var isOpen = time >= today.open && time < today.close;
  var txt = isOpen ? '&#9679; Open Now' : '&#9679; Closed';
  var col = isOpen ? '#6aaa70' : '#cc7050';
  function fmt(v) {
    var hrs = Math.floor(v);
    var mins = Math.round((v % 1) * 60);
    var ampm = hrs < 12 ? 'AM' : 'PM';
    var h12 = hrs > 12 ? hrs - 12 : hrs;
    return h12 + ':' + (mins < 10 ? '0' + mins : mins) + ' ' + ampm;
  }
  if (s1) { s1.innerHTML = txt; s1.style.color = col; }
  if (s2) { s2.innerHTML = txt; s2.style.color = col; }
  if (h)  { h.textContent = fmt(today.open) + ' - ' + fmt(today.close); }
})();