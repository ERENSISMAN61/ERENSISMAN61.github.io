function updateClock() {
  const clock = document.getElementById('clock');
  const now = new Date();
  clock.innerText = now.toLocaleTimeString();
}
setInterval(updateClock, 1000);

document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  const feedback = document.getElementById('formFeedback');

  if (name && email.includes('@') && message) {
    feedback.innerText = 'Mesaj başarıyla gönderildi!';
    feedback.style.color = 'green';
  } else {
    feedback.innerText = 'Lütfen tüm alanları doğru doldurunuz.';
    feedback.style.color = 'red';
  }
});

function toggleMoreInfo() {
  const moreInfo = document.getElementById('moreInfo');
  moreInfo.style.display = moreInfo.style.display === 'none' ? 'block' : 'none';
}

function filterProjects(category) {
  const projects = document.getElementsByClassName('project');
  for (const project of projects) {
    if (project.getAttribute('data-category') === category || category === 'all') {
      project.style.display = 'block';
    } else {
      project.style.display = 'none';
    }
  }
}

function openScreen(projectId) {
  const screen = document.getElementById('projectScreen');
  const image = document.getElementById('screenImage');
  const description = document.getElementById('screenDescription');

  if (projectId === 'project1') {
    image.src = 'proje1.png';
    description.innerText = 'Bu oyun, arkadaşlarınla oynayabileceğin 3D Tank savaşı oyunudur. Oyunun amacı, en çok parayı toplamak. Paranızı kaybetmemeniz için rakip tankları yok etmelisiniz.';
  } else if (projectId === 'project2') {
    image.src = 'proje2.png';
    description.innerText = 'Bu oyun, tek başınıza gemileri yok ederek, gemi birimleri alarak donanmanı büyütebildiğin ve daha büyük düşmanlarla kapışabileceğin bir oyun.';
  }
  else if (projectId === 'project3') {
    image.src = 'proje3.png';
    description.innerText = 'Bu oyun, 60 saniye içinde önüne çıkan düşmanları yok ederek boss ile savaşıp onu yenmeye çalıştığın bir oyun. 60 Saniye sonra ölüp tekrar doğarsın. Her doğduğunda kazandığın paralarla geliştirmeler satın alabilirsin.';
  }
  else if (projectId === 'project4') {
    image.src = 'proje4.png';
    description.innerText = 'Bu oyun, Mağaradan çıkmaya çalıştığın bir koşu oyunu. Arkanda yuvarlanıp sana yetişen bir kaya var. Bu kayadan kaçarak dışarı çıkmaya çalışıyorsun.';
  }

  screen.style.display = 'flex';
}

function closeScreen() {
  document.getElementById('projectScreen').style.display = 'none';
}

window.onclick = function(event) {
  const screen = document.getElementById('projectScreen');
  if (event.target === screen) {
    screen.style.display = 'none';
  }
}

function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('show');
}

function showAllProjects() {
  location.reload();
}
