function onFormSubmit() {
  const seconds = document.getElementById("seconds-input").value;
  const meters = Math.round(1000 * seconds / 2.91545189504);
  const message = `Расстояние до молнии: <strong>${meters} метров</strong>`;
  const answer = document.getElementById("answer");
  answer.innerHTML = message;
  answer.style.display = "inline-block";
}
