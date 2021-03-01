const cards = document.querySelectorAll('.card');
const overlays = document.querySelectorAll('.card .overlay');
const cardParagraph = document.querySelectorAll('.card .card-text div');

const showCardText = (e) => {
  // Don't toggle the overlay if we click on a link inside the card.
  if (e.target instanceof HTMLAnchorElement) {
    return;
  }

  try {
    const card = e.currentTarget;  // Different from e.target
    const idx = parseInt(card.dataset.cardIdx);

    overlays[idx].classList.toggle('show');
    cardParagraph[idx].classList.toggle('show');

  } catch (err) {
    console.error(err);
  }
};

cards.forEach((card, idx) => {
  card.dataset.cardIdx = idx;
  card.addEventListener('click', showCardText);
});
