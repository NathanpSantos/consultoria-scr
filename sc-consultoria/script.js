document.addEventListener('DOMContentLoaded', function() {
  const carrossel = document.querySelector('.carrossel-servicos');
  const cards = carrossel.querySelectorAll('.card-servico');
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');

  let scrollAmount = cards[0].offsetWidth + 32; // 32 = gap

  nextBtn.onclick = () => {
    // Se está quase no fim, volta para o início
    if (carrossel.scrollLeft + carrossel.offsetWidth >= carrossel.scrollWidth - 1) {
      carrossel.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      carrossel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };
  prevBtn.onclick = () => {
    // Se está no início, vai para o fim
    if (carrossel.scrollLeft === 0) {
      carrossel.scrollTo({ left: carrossel.scrollWidth, behavior: 'smooth' });
    } else {
      carrossel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };
});
