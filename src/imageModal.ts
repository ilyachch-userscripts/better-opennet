const modalId = 'better-opennet-image-modal';
const modalImageId = 'better-opennet-image-modal__image';
const closeAnimationDurationMs = 200;
const imageExtensions = ['png', 'jpg', 'jpeg'];
let closeTimeoutId: number | null = null;

function isImageLink(url: string) {
  try {
    const parsedUrl = new URL(url, window.location.href);
    const lowerPath = parsedUrl.pathname.toLowerCase();
    return imageExtensions.some((extension) => lowerPath.endsWith(`.${extension}`));
  } catch {
    return false;
  }
}

function createModal() {
  if (document.getElementById(modalId)) {
    return;
  }

  const overlay = document.createElement('div');
  overlay.id = modalId;
  overlay.setAttribute('aria-hidden', 'true');

  const image = document.createElement('img');
  image.id = modalImageId;
  image.alt = '';

  overlay.appendChild(image);
  document.body.appendChild(overlay);

  overlay.addEventListener('click', (event) => {
    if (event.target === overlay) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeModal();
    }
  });
}

function openModal(imageUrl: string) {
  createModal();
  const overlay = document.getElementById(modalId);
  const image = document.getElementById(modalImageId) as HTMLImageElement | null;

  if (!overlay || !image) {
    return;
  }

  if (closeTimeoutId !== null) {
    window.clearTimeout(closeTimeoutId);
    closeTimeoutId = null;
  }

  image.src = imageUrl;
  overlay.setAttribute('aria-hidden', 'false');
  overlay.classList.add('is-open');
  document.body.classList.add('better-opennet-modal-open');
}

function closeModal() {
  const overlay = document.getElementById(modalId);
  const image = document.getElementById(modalImageId) as HTMLImageElement | null;

  if (overlay) {
    overlay.setAttribute('aria-hidden', 'true');
    overlay.classList.remove('is-open');
  }

  if (image) {
    if (closeTimeoutId !== null) {
      window.clearTimeout(closeTimeoutId);
    }

    closeTimeoutId = window.setTimeout(() => {
      image.src = '';
      closeTimeoutId = null;
    }, closeAnimationDurationMs);
  }

  document.body.classList.remove('better-opennet-modal-open');
}

export function initImageModal() {
  document.addEventListener('click', (event) => {
    const target = event.target as HTMLElement | null;
    if (!target) {
      return;
    }

    const image = target.closest('img') as HTMLImageElement | null;
    if (!image) {
      return;
    }

    const link = image.closest('a[href]') as HTMLAnchorElement | null;

    const imageUrl = link && isImageLink(link.href) ? link.href : image.src;
    if (!imageUrl) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
    openModal(imageUrl);
  });
}
