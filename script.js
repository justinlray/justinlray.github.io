  document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('button[data-bs-toggle="collapse"]');

    buttons.forEach(button => {
      const collapseId = button.getAttribute('data-bs-target');
      const icon = button.querySelector('i');
      const collapseEl = document.querySelector(collapseId);

      if (collapseEl && icon) {
        collapseEl.addEventListener('show.bs.collapse', () => {
          icon.classList.remove('bi-chevron-down');
          icon.classList.add('bi-chevron-up');
        });

        collapseEl.addEventListener('hide.bs.collapse', () => {
          icon.classList.remove('bi-chevron-up');
          icon.classList.add('bi-chevron-down');
        });
      }
    });
  });