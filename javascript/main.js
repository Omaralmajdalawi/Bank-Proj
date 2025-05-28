document.addEventListener('DOMContentLoaded', () => {
  const openAccountBtn = document.getElementById('Account_btn');
  const accAccount_div = document.getElementById('accAccount_div');

  openAccountBtn.addEventListener('click', function (e) {
    e.preventDefault();
    console.log("Button clicked, scrolling now...");
    accAccount_div.scrollIntoView({ behavior: 'smooth' });
  });
});
