const playButton = document.getElementById('play-button');

if (playButton) {
  playButton.addEventListener('click', () => {
    const isPlaying = playButton.classList.toggle('is-playing');
    playButton.textContent = isPlaying ? 'Ⅱ' : '▶';
    playButton.setAttribute('aria-label', isPlaying ? 'Pauzeer track' : 'Speel track af');
  });
}
