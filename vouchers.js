let selectedVouchers = [];
const voucherCards = document.querySelectorAll('.voucher-card');
const confirmButton = document.getElementById('confirm-vouchers');

voucherCards.forEach(card => {
  card.addEventListener('click', () => {
    const voucherType = card.dataset.voucher;

    if (card.classList.contains('selected')) {
      // Deselect if already selected
      card.classList.remove('selected');
      selectedVouchers = selectedVouchers.filter(v => v !== voucherType);
    } else {
      // Select if not selected and less than 2 vouchers are chosen
      if (selectedVouchers.length < 2) {
        card.classList.add('selected');
        selectedVouchers.push(voucherType);
      } else {
        alert('Você pode escolher no máximo 2 vales!');
      }
    }
    // Enable/disable confirm button based on selection count
    confirmButton.disabled = selectedVouchers.length !== 2;
  });
});

confirmButton.addEventListener('click', () => {
  if (selectedVouchers.length === 2) {
    // Store selected vouchers in local storage to pass to the next page
    localStorage.setItem('chosenVouchers', JSON.stringify(selectedVouchers));
    location.href = 'display_vouchers.html';
  } else {
    alert('Por favor, escolha exatamente 2 vales.');
  }
});