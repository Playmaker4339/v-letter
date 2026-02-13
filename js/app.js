document.addEventListener('DOMContentLoaded', function () {
  const textboxContainer = document.querySelector('.textbox-container');
  const textboxText = document.querySelector('.textbox-text');

  if (!textboxContainer || !textboxText) return;

  function changeText() {
    textboxText.textContent = 'Este es un nuevo texto diferente para el cuadro.';
  }

  textboxContainer.addEventListener('click', changeText);
  textboxContainer.addEventListener('touchstart', changeText, { passive: true });
});
