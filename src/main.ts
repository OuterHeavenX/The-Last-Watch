import './style.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <section class="title-screen">
    <div class="moon" aria-hidden="true"></div>
    <div class="fortress" aria-hidden="true"><span></span><span></span><span></span></div>
    <div class="title-card">
      <p class="eyebrow">Gravenhold stands</p>
      <h1>THE LAST WATCH</h1>
      <p class="subtitle">A gothic tower-defense RPG</p>
      <button id="begin" type="button">NEW GAME</button>
      <p id="status" class="status">Deployment checkpoint zero</p>
    </div>
  </section>`;

document.querySelector<HTMLButtonElement>('#begin')!.addEventListener('click', () => {
  document.querySelector('#status')!.textContent = 'The first watch awaits.';
});
