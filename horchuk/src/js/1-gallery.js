import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const images = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2020/06/11/18/32/flower-5289172__480.jpg',
    original:
      'https://cdn.pixabay.com/photo/2020/06/11/18/32/flower-5289172_1280.jpg',
    description: 'Beautiful Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__480.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_1280.jpg',
    description: 'Ocean View',
  },
];

const galleryContainer = document.querySelector('.gallery');

function createMarkup(arr) {
  return arr
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery-item">
          <a class="gallery-link" href="${original}">
            <img
              class="gallery-image"
              src="${preview}"
              alt="${description}"
            />
          </a>
        </li>`
    )
    .join('');
}

galleryContainer.innerHTML = createMarkup(images);

const gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
