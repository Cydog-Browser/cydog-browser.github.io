fetch('static/data/demos.json')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    // Render grid items
    const gridContainer = document.querySelector('.grid-container');
    data.forEach(link => {
        const item = document.createElement('div');
        item.className = 'grid-item';
        item.innerHTML = `
            <i class="${link.icon}"></i>
            <h3>${link.title}</h3>
            <p>${link.desc}</p>
        `;
        item.addEventListener('click', () => {
            window.open(link.url, '_blank');
        });
        gridContainer.appendChild(item);
    });
  })
  .catch(error => {
    console.error('Error fetching the local file:', error);
  });

// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeToggle.innerHTML = document.body.classList.contains('dark-mode') 
        ? '<i class="fas fa-sun"></i>' 
        : '<i class="fas fa-moon"></i>';
});