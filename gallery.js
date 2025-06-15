const images = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container ship in port',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Palm trees on beach',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse on coast',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Palm trees on beach',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse on coast',
  },
  {
    preview: 'images/thumb1.jpg',
    original: 'images/full1.jpg',
    description: 'SLIDE 1',
  },
  {
    preview: 'images/thumb2.jpg',
    original: 'images/full2.jpg',
    description: 'SLIDE 2',
  },
  {
    preview: 'images/thumb3.jpg',
    original: 'images/full3.jpg',
    description: 'SLIDE 3',
  }
];


const galleryRef = document.querySelector('.gallery');

function createGalleryMarkup(imagesArray) {
  return imagesArray
    .map(
      ({ preview, original, description }) => `
    <li class="gallery-item">
      <a class="gallery-link" href="${original}">
        <img
          class="gallery-image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
        <p class="gallery-image-description">${description}</p>
      </a>
    </li>
    `
    )
    .join('');
}

galleryRef.innerHTML = createGalleryMarkup(images);

galleryRef.addEventListener('click', onGalleryClick);

function onGalleryClick(event) {
  event.preventDefault(); // Запобігаємо переходу за посиланням

  const target = event.target;

  // Перевіряємо, чи клік був саме по зображенню
  if (target.nodeName !== 'IMG') {
    return;
  }

  const largeImageUrl = target.dataset.source;
  const imageDescription = target.alt;

  // Виводимо посилання на велике зображення в консоль (для пункту 10)
  console.log('Посилання на велике зображення:', largeImageUrl);

  // Відкриваємо модальне вікно за допомогою basicLightbox
  const instance = basicLightbox.create(`
    <div class="modal">
      <img src="${largeImageUrl}" alt="${imageDescription}" />
      <p class="modal-description">${imageDescription}</p>
    </div>
  `);

  instance.show();
}