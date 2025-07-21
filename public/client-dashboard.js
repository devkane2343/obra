// Demo data for workers
const workers = [
  {
    avatar: '',
    specialization: 'Web Development',
    services: 'Frontend, Backend',
    name: 'Kane Reroma',
    rating: 4.8
  },
  {
    avatar: '',
    specialization: 'Graphic Design',
    services: 'Logo, Branding',
    name: 'Jane Cruz',
    rating: 4.7
  },
  {
    avatar: '',
    specialization: 'Content Writing',
    services: 'Blogs, SEO',
    name: 'Mark Dela Cruz',
    rating: 4.9
  },
  {
    avatar: '',
    specialization: 'I.T. Support',
    services: 'Network, Hardware',
    name: 'Anna Santos',
    rating: 4.6
  },
  {
    avatar: '',
    specialization: 'Mobile Apps',
    services: 'iOS, Android',
    name: 'Leo Ramos',
    rating: 4.8
  },
  {
    avatar: '',
    specialization: 'Digital Marketing',
    services: 'Social Media, Ads',
    name: 'Mia Lopez',
    rating: 4.7
  },
  {
    avatar: '',
    specialization: 'Video Editing',
    services: 'YouTube, Ads',
    name: 'Paul Lim',
    rating: 4.9
  },
  {
    avatar: '',
    specialization: 'Virtual Assistant',
    services: 'Admin, Scheduling',
    name: 'Ella Reyes',
    rating: 4.8
  }
];

function renderWorkers(filter = '') {
  const grid = document.getElementById('workerGrid');
  grid.innerHTML = '';
  const filtered = workers.filter(w =>
    w.specialization.toLowerCase().includes(filter) ||
    w.services.toLowerCase().includes(filter) ||
    w.name.toLowerCase().includes(filter)
  );
  if (filtered.length === 0) {
    grid.innerHTML = '<div style="grid-column: span 4; text-align:center; color:#888;">No workers found.</div>';
    return;
  }
  filtered.forEach(w => {
    const card = document.createElement('div');
    card.className = 'worker-card';
    card.innerHTML = `
      <div class="worker-avatar"></div>
      <div class="worker-specialization">${w.specialization}</div>
      <div class="worker-services">${w.services}</div>
      <div class="worker-name">${w.name}</div>
      <div class="worker-rating">⭐ ${w.rating}</div>
    `;
    card.onclick = () => alert(`Viewing profile for ${w.name}`);
    grid.appendChild(card);
  });
}

// Search functionality
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
searchBtn.onclick = () => {
  renderWorkers(searchInput.value.trim().toLowerCase());
};
searchInput.addEventListener('keyup', e => {
  if (e.key === 'Enter') renderWorkers(searchInput.value.trim().toLowerCase());
});

// Modal logic
const postJobModal = document.getElementById('postJobModal');
const openPostJobModal = document.getElementById('openPostJobModal');
const closePostJobModal = document.getElementById('closePostJobModal');
openPostJobModal.onclick = () => {
  postJobModal.style.display = 'flex';
};
closePostJobModal.onclick = () => {
  postJobModal.style.display = 'none';
};
window.onclick = function(event) {
  if (event.target === postJobModal) postJobModal.style.display = 'none';
};

// Post job form (main panel)
document.getElementById('postJobForm').onsubmit = function(e) {
  e.preventDefault();
  alert('Job posted! (Demo only)');
  this.reset();
};
// Post job form (modal)
document.getElementById('modalPostJobForm').onsubmit = function(e) {
  e.preventDefault();
  alert('Job posted from modal! (Demo only)');
  postJobModal.style.display = 'none';
  this.reset();
};

// Logout button
document.getElementById('logoutBtn').onclick = function() {
  alert('Logging out... (Demo only)');
};

// Initial render
renderWorkers(); 