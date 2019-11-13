const repoElement = ({
  stargazers_count,
  html_url,
  homepage,
  description,
  name
}) => {
  const parsedHomepage = homepage ? new URL(homepage) : {};

  return new DOMParser().parseFromString(`
    <div class="repo">
      <a href="${html_url}" target="_blank" rel="noopener noreferrer" class="image">
        <img alt="Project ${name}" src="https://hugoraw.herokuapp.com/hdf1986/${name}/master/logo.png">
      </a>
      <a href="${html_url}" target="_blank" rel="noopener noreferrer" class="description">
        <h2>${name}</h2>
        <h3>${description}</h3>
      </a>
      <div class="footer">
        <a href="${homepage}" target="_blank" rel="noopener noreferrer">${homepage ? parsedHomepage['host'] + parsedHomepage['pathname'] : ''}</a>
        <div class="stars">
          ${stargazers_count}
          <i class="fas fa-star"></i>
        </div>
      </div>
    </div>
  `,'text/html').body.firstChild;
};

(function () {
  const repos = document.querySelector('.repos');
  const loadingElement = repos.querySelector('.loading');
  const titleElement = document.querySelector('.title');
  const titles = [
    'Node developer',
    'Ruby enthusiast',
    'Twitch streamer'
  ];

  fetch('https://api.github.com/search/repositories?q=pinned+user:hdf1986+fork:true&sort=stars')
    .then(res => res.json())
    .then(({items}) => {
      const reposElements = items.map(item => repoElement(item))
      loadingElement.classList.add('hidden');
      reposElements.forEach((element, index) => {
        repos.appendChild(element);
        setTimeout(() => element.classList.add('visible'), 200 + 150 * index);
      });
    })


  let title = titles[Math.floor(Math.random() * titles.length)];
  const changeTitle = () => {
    setTimeout(() => {
      const removeCharacter = () => {
        titleElement.innerHTML = titleElement.innerHTML.substring(0, titleElement.innerHTML.length - 1);
        if(titleElement.innerHTML !== '') return setTimeout(removeCharacter, 100);
        let newTitle = titles[Math.floor(Math.random() * titles.length)];
        while(newTitle === title) newTitle = titles[Math.floor(Math.random() * titles.length)];
        title = newTitle;
        changeText();
      }
      setTimeout(removeCharacter, 100);
    }, 1200);
  }

  const changeText = () => {
    if(titleElement.innerHTML === title) return changeTitle();

    titleElement.innerHTML += title[titleElement.innerHTML.length];

    setTimeout(changeText, 100);
  }

  setTimeout(changeText, 100);
  // setInterval(changeText, 3000);
})()
