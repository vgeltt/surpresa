document.addEventListener('DOMContentLoaded', () => {
  const chosenVouchers = JSON.parse(localStorage.getItem('chosenVouchers'));
  const voucherDisplay = document.getElementById('voucher-display');

  if (chosenVouchers && chosenVouchers.length > 0) {
    chosenVouchers.forEach(voucher => {
      let title = '';
      let description = '';
      let validUntil = '31/12/2027'; // Data de validade padrão
      let exclusiveMessage = ''; // Variável para armazenar a mensagem exclusiva

      switch (voucher) {
        case 'massagem':
          title = 'Vale Massagem';
          description = 'Este vale te dá direito a uma massagem relaxante! Use quando quiser.';
          break;
        case 'cafune':
          title = 'Vale Cafunézinho';
          description = 'Este vale garante muitos cafunés carinhosos e ilimitados! Use-o sempre que quiser um carinho extra.';
          break;
        case 'lanchinho':
          title = 'Vale Lanchinho';
          description = 'Este vale te oferece seu lanchinho preferido, por minha conta! Pra te fazer ficar gordinha <3';
          break;
        case 'beijo':
          title = 'Vale Beijo';
          description = 'Só um lembrete de que um beijo meu tá sempre disponível. É só pedir.';
          exclusiveMessage = '<p class="valid-until">* Este vale é para uso exclusivo da pessoa mais especial do mundo (você).</p>'; // Mensagem exclusiva para o beijo
          break;
      }

      const voucherTicket = `
        <div class="voucher-ticket">
          <div class="ticket-side-tab">
            <span>VALES<br>
          </div>
          <div class="voucher-main-content">
            <h2>${title}</h2>
            <p>${description}</p>
            <div class="voucher-details-section">
                <div class="detail-item">
                    <strong>Validade</strong>
                    <span>${validUntil}</span>
                </div>
                <div class="detail-item">
                    <strong>Uso</strong>
                    <span>${voucher === 'beijo' ? '∞' : '0/10'}</span>
                </div>
            </div>
            ${exclusiveMessage} </div>
        </div>
      `;
      voucherDisplay.innerHTML += voucherTicket;
    });
  } else {
    voucherDisplay.innerHTML = '<p class="alert alert-warning">Nenhum vale foi selecionado. Volte e escolha seus vales!</p>';
  }
});