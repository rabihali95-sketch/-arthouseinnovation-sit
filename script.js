const menu = document.querySelector('.menu');

const nav = document.querySelector('nav');

menu.addEventListener('click', () => {

  nav.classList.toggle('open');

});

const itemField = document.getElementById('item-field');

document.querySelectorAll('.inquire').forEach(btn => {

  btn.addEventListener('click', () => {

    itemField.value = btn.dataset.item;

    document.getElementById('contact').scrollIntoView({

      behavior: 'smooth'

    });

  });

});

document.getElementById('inquiry-form').addEventListener('submit', e => {

  e.preventDefault();

  const data = new FormData(e.currentTarget);

  const name = data.get('name') || '';

  const item = data.get('item') || '';

  const message = data.get('message') || '';

  const text = `Hello Art House Antiques,%0AName: ${encodeURIComponent(name)}%0AItem: ${encodeURIComponent(item)}%0A${encodeURIComponent(message)}`;

  window.open(`https://wa.me/?text=${text}`, '_blank');

});