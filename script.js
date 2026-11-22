const dialog = document.querySelector('#trailer-dialog');
const video = dialog.querySelector('video');
document.querySelectorAll('[data-trailer]').forEach(button => button.addEventListener('click', () => {
  dialog.showModal();
  video.play().catch(() => {});
}));
dialog.querySelector('.close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) { const box = dialog.getBoundingClientRect(); if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close(); } });
dialog.addEventListener('close', () => video.pause());
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
document.querySelectorAll('.addon-tile').forEach(tile => {
  tile.addEventListener('pointermove', event => {
    if (reduceMotion.matches || event.pointerType === 'touch') return;
    const box = tile.getBoundingClientRect();
    const x = (event.clientX - box.left) / box.width;
    const y = (event.clientY - box.top) / box.height;
    tile.style.setProperty('--rx', `${(0.5-y)*4}deg`);
    tile.style.setProperty('--ry', `${(x-0.5)*4}deg`);
    tile.style.setProperty('--mx', `${x*100}%`);
    tile.style.setProperty('--my', `${y*100}%`);
  });
  tile.addEventListener('pointerleave', () => { tile.style.setProperty('--rx','0deg'); tile.style.setProperty('--ry','0deg'); });
});
