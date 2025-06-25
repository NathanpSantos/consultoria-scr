// Modal abrir/fechar 
document.querySelectorAll('.saiba-mais').forEach(btn => {
    btn.onclick = () => {
        document.getElementById('modal-' + btn.dataset.servico).classList.add('active');
    };
});
document.querySelectorAll('.modal .close').forEach(btn => {
    btn.onclick = () => {
        btn.closest('.modal-bg').classList.remove('active');
    };
});
window.onclick = e => {
    if (e.target.classList.contains('modal-bg')) {
        e.target.classList.remove('active');
    }
};
// Carrossel lateral
const carrossel = document.querySelector('.carrossel-servicos');
document.getElementById('next').onclick = () => {
    carrossel.scrollBy({ left: 350, behavior: 'smooth' });
};
document.getElementById('prev').onclick = () => {
    carrossel.scrollBy({ left: -350, behavior: 'smooth' });
};
