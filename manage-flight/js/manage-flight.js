document.addEventListener('DOMContentLoaded', function () {
  const concernBtns = document.querySelectorAll('.concern-btn');
  concernBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      concernBtns.forEach(b => b.classList.remove('concern-selected'));
      btn.classList.add('concern-selected');
    });
  });
});
