const boxes = Array.from(document.querySelectorAll('input[type="checkbox"]'));
const progressText = document.getElementById('progress-text');
const progressFill = document.getElementById('progress-fill');
const resetButton = document.getElementById('reset-button');

function updateProgress() {
  const checked = boxes.filter(box => box.checked).length;
  progressText.textContent = `${checked} of ${boxes.length} sections checked`;
  progressFill.style.width = `${(checked / boxes.length) * 100}%`;
}

boxes.forEach(box => box.addEventListener('change', updateProgress));
resetButton.addEventListener('click', () => {
  boxes.forEach(box => { box.checked = false; });
  updateProgress();
});
updateProgress();
