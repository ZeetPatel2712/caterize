// button loader logic
window.addEventListener('DOMContentLoaded', () => {
     const allBtns = document.querySelectorAll(`[loading="true"]`);

     allBtns.forEach((btn) => {
          const iconifyIcon = document.createElement('iconify-icon');
          const userLoadingIcon = btn.getAttribute('loading-icon');
          iconifyIcon.className = 'loader-icon';
          iconifyIcon.setAttribute('icon', `${userLoadingIcon ? userLoadingIcon : 'svg-spinners:ring-resize'}`);
          btn.appendChild(iconifyIcon);
     });
});
