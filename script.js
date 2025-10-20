function ozgartir() {
  const body = document.body;
  const music = document.getElementById('music');
  const oy = document.querySelector('.oy');
  const yulduzlar = document.querySelector('.yulduzlar');

  // Musiqa ijro etilsin
  music.volume = 0.3;  // Ovozni biroz pasaytiramiz (xushro'lik uchun)
  music.play();

  // Kun foniga o'tamiz
  body.classList.remove('night');
  body.classList.add('day');

  // Oy va yulduzlarni yo'q qilamiz
  oy.style.opacity = '0';
  yulduzlar.style.opacity = '0';

  // Quyoshni qo'shamiz (agar yo'q bo'lsa)
  if (!document.querySelector('.quyosh')) {
    const quyosh = document.createElement('div');
    quyosh.classList.add('quyosh');
    document.body.appendChild(quyosh);
  }

  // Bog fonini ko'rsatamiz
  if (!document.querySelector('.bog')) {
    const bog = document.createElement('div');
    bog.classList.add('bog');
    document.body.appendChild(bog);
    setTimeout(() => {
      bog.style.opacity = '1';
    }, 500);
  }
}