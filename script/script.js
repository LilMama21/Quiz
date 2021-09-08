document.addEventListener("DOMContentLoaded", function () {
  const btnOpenModal = document.querySelector("#btnOpenModal");
  const modalBlock = document.querySelector("#modalBlock");
  const closeModal = document.querySelector("#closeModal");
  const questionTitle = document.querySelector("#question");
  const formAnswers = document.querySelector("#formAnswers");
  const burgerName = 'Черный';
  const burgerBlackImageUrl = '../image/burgerBlack.png';

  btnOpenModal.addEventListener("click", () => {
    modalBlock.classList.add("d-block");
    playTest();
  })

  closeModal.addEventListener("click", () => {
    modalBlock.classList.remove("d-block");
    })

  const playTest = () => {
    const renderQuestion = () => {
      questionTitle.textContent = "Какого цвета бургер Вы хотите?";

      formAnswers.innerHTML = `
      <div class="answers-item d-flex flex-column">
          <input type="radio" id="answerItem1" name="answer" class="d-none">
          <label for="answerItem1" class="d-flex flex-column justify-content-between">
          <img class="answerImg" src="./image/burger.png" alt="burger">
          <span>Стандарт</span>
          </label>
      </div>
      <div class="answers-item d-flex justify-content-center">
          <input type="radio" id="answerItem2" name="answer" class="d-none">
          <label for="answerItem2" class="d-flex flex-column justify-content-between">
          <img class="answerImg" src="${burgerBlackImageUrl}" alt="burger">
          <span>${burgerName}</span>
          </label>
      </div>`
    }
    renderQuestion();
  }
})
