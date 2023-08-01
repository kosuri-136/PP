const projects = [
  {
    id: 1,
    title: 'Car renting app',
    subtitle: 'Car Rental',
    position: 'Full-Stack',
    year: '2022',
    description: 'CAR BOOKING is a platform that allow users to reserve cars for renting. the user can browse the list of cars and can pay online...',
    skills: ['ReactJS', 'NodeJS', 'JWT','Redux','Javascript', 'Git', 'MongoDB'],
    img: 'carrent.png',
    source_code: 'https://github.com/kosuri-136/ProjectCR.git',
    live_version: 'https://kingkoscars.netlify.app/',
  },
  {
    id: 2,
    title: 'Instaclone',
    subtitle: 'Photos ',
    position: 'Full Stack',
    year: '2023',
    description: 'A simple photo sharing app with friends with a photo , title , description.',
    skills: ['ReactJS' , 'NodeJS' , 'MongoDB' , 'Express' , 'html', 'css', 'javascript'],
    img: 'insta.png',
    source_code: 'https://github.com/kosuri-136/instacloneff.git',
    live_version: 'https://kosuriinstaclone.netlify.app/',
  },
  {
    id: 3,
    title: 'Snap Shot',
    subtitle: 'Photos ',
    position: 'Full Stack',
    year: '2023',
    description: 'A simple photo Fetching app on searching.',
    skills: ['ReactJS' , 'NodeJS' , 'MongoDB' , 'Express' , 'html', 'css', 'javascript'],
    img: 'snapshot.png',
    source_code: 'https://github.com/kosuri-136/snapshot.git',
    live_version: 'https://kosuri-snapshot-125cd9.netlify.app/',
  },
  {
    id: 4,
    title: 'Chaari-The Meme Page',
    subtitle: 'Memes',
    position: 'Full Stack',
    year: '2023',
    description: 'Entertainment website where u can find the photos of different memes posted by different Facebook pages and News items and it has signin , signup options etc',
    skills: ['ReactJS' , 'NodeJS' , 'MongoDB' , 'Express' , 'html', 'JWT', 'css', 'javascript'],
    img: 'charigaru.png',
    source_code: '#',
    live_version: 'https://charimemepage.netlify.app/',
  },
 
];

function returnSkills(array) {
  let value = '';
  for (let i = 0; i < array.length; i += 1) {
    value += `<li class="skills-list first-element">
      <div class="skills-container-badge">
      <h4 class="skills-item">${array[i]}</h4>
      </div>
      </li>`;
  }
  return value;
}

projects.forEach((p) => {
  document.getElementById('works-section').innerHTML += `<div class="cards-work">
    <img src="img/${p.img}" alt="portfolio project image" class="cards-img">
    <div>
        <h2 class="work-title">${p.title}</h2>
        <div class="frame-2">
            <h3 class="frame-subtitle">${p.subtitle}</h3>
            <div class="rounded-bullet"></div>
            <h3 class="position-title">${p.position}</h3>
            <div class="rounded-bullet"></div>
            <h3 class="work-year">${p.year}</h3>
        </div>
        <p class="skills-description">
           ${p.description.substring(0, 206)}...
        </p>
        <ul class="skills-ul">
            ${returnSkills(p.skills)}
        </ul>
        <button class="view-project-button openProject" id="${p.id}">See Project</button>
    </div>
</div>`;
});

const btn = document.querySelectorAll('.openProject');
let wrapper = null;

function showModal(obj) {
  if (wrapper !== null) {
    document.body.removeChild(wrapper);
    // document.getElementById('modal').remove();
  }
  // alert("clicked "
  wrapper = document.createElement('div');
  wrapper.innerHTML = `
  <div class="modal" id="modal">
                <!-- Modal content -->
                <div class="modal-content">
                    <div class="cards-work-preview">
                        <div>
                            <div class="card-preview-header">
                                <h2 class="work-title-preview">${obj.title}</h2>
                                <span class="close">&times;</span>
                            </div>

                            <div class="frame-2-preview">
                                <h3 class="frame-subtitle">${obj.subtitle}</h3>
                                <div class="rounded-bullet"></div>
                                <h3 class="position-title">${obj.position}</h3>
                                <div class="rounded-bullet"></div>
                                <h3 class="work-year">${obj.year}</h3>
                            </div>
                            <div class="middle-container">
                            <img src="img/${obj.img}" alt="portfolio project image" class="cards-img-preview">
                            <!-- body content -->
                            <div class="preview-body-content"> 
                                <p class="skills-description-preview">
                                ${obj.description.substring(0, 206)}...
                                </p>
                                <div class="skills-and-footer-body">
                                    <ul class="skills-ul-preview">
                                        ${returnSkills(obj.skills)}
                                    </ul>
        
                                    <div class="footer-popup">
                                        <!-- customized buttons -->
                                        <a href="${obj.live_version}" target="_blank" class="footer-popup-link">
                                        <div class="footer-popup-button">
                                            <h5 class="footer-button-title">Go Live</h5>
                                            <img src="img/go-live-icon.svg" alt="">
                                        </div>
                                        </a>
                                        <a href="${obj.source_code}" target="_blank" class="footer-popup-link">
                                        <div class="footer-popup-button">
                                            <h5 class="footer-button-title">View Source</h5>
                                            <img src="img/github_icon_preview.svg" alt="">
                                        </div>
                                        </a>
                                    </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
  document.body.appendChild(wrapper);

  const modal = document.getElementById('modal');
  modal.style.display = 'block';
  // // Get the <span> element that closes the modal
  const span = document.getElementsByClassName('close')[0];

  // // When the user clicks on <span> (x), close the modal
  span.onclick = () => {
    modal.style.display = 'none';
    // document.getElementById('modal').remove();
  };

  window.onclick = (event) => {
    if (event.target === document.getElementById('modal')) {
      modal.style.display = 'none';
      // document.getElementById('modal').remove();
    }
  };
}

btn.forEach((node) => {
  document.getElementById(node.id).addEventListener('click', () => {
    const item = projects.find((item) => (item.id === parseInt(node.id, 10)));
    showModal(item);
  });
});
