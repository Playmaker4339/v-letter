document.addEventListener('DOMContentLoaded', function () {
  const textboxContainer = document.querySelector('.textbox-container');
  const textboxText = document.querySelector('.textbox-text');
  const charImage = document.getElementById('char-image');

  if (!textboxContainer || !textboxText || !charImage) return;

  const slides = [

    /*text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi gravida tempus nisl venenatis commodo.*/

    {
      text: '...',
      src: '../img/cat_neutral.png',
      alt: 'Gatito feliz'
    },
    {
      text: 'Ah hola amorcito, te estaba esperando.',
      src: '../img/cat_cheerful.png',
      alt: 'Gatito tranquilo'
    },
    {
      text: '¡Soy yo, tu noviecito! En forma de un gatito digital.',
      src: '../img/cat_heart.png',
      alt: 'Gatito risueño'
    },
    {
      text: 'Es que a pesar de todos mis esfuerzos, no pude estar contigo como hubiera querido.',
      src: '../img/cat_sad.png',
      alt: 'Gatito con carta'
    },
    {
      text: 'Aún así cuando eres informático solo necesitas ganas, internet y una laptop.',
      src: '../img/cat_laptop.png',
      alt: 'Gatito tierno extrañando'
    },
    {
      text: 'Entonces como no me rindo con facilidad, ahora irrumpiré en tu casa a través de tu pantalla.',
      src: '../img/cat_hehe.png',
      alt: 'Gatito con flores'
    },
    {
      text: 'Quería traerte flores, pero no pude encontrar un ramo digital a la altura de tu belleza.',
      src: '../img/cat_neutral.png',
      alt: 'Gatito enamorado'
    },
    {
      text: 'Así que te traje estas rosas pixeladas, que aunque son digitales, están llenas de amor real.',
      src: '../img/cat_boquet.png',
      alt: 'Gatito tierno extrañando'
    },
    {
      text: 'Y eso no es todo.',
      src: '../img/cat_boquet.png',
      alt: 'Gatito tierno extrañando'
    },
    {
      text: 'Como en esta forma de gatito no puedo hablar demasiado, recurrí a los clásicos.',
      src: '../img/cat_neutral.png',
      alt: 'Gatito tierno extrañando'
    },
    {
      text: 'Y lo mezclé con un toque de modernidad.',
      src: '../img/cat_laptop.png',
      alt: 'Gatito tierno extrañando'
    },
    {
      text: 'Así que te escribí un montón de cosas melosas en una carta que espero que te guste mucho.',
      src: '../img/cat_heart.png',
      alt: 'Gatito tierno extrañando'
    },
    {
      text: 'Aqui tienes amor, felíz día de San Valentín.',
      src: '../img/cat_letter.png',
      alt: 'Gatito tierno extrañando'
    }
  ];

  let currentIndex = 0;
  let typingInterval = null;

  function typeText(text) {
    if (typingInterval) {
      clearInterval(typingInterval);
      typingInterval = null;
    }

    textboxText.textContent = '';
    let i = 0;

    typingInterval = setInterval(() => {
      textboxText.textContent += text.charAt(i);
      i++;

      if (i >= text.length) {
        clearInterval(typingInterval);
        typingInterval = null;
      }
    }, 70); // Velocidad de escritura (ms por letra)
  }

  function showSlide(index) {
    const slide = slides[index];
    typeText(slide.text);
    charImage.src = slide.src;
    charImage.alt = slide.alt;
  }

  function nextSlide() {
    // Si ya estamos en el último mensaje, redirigir a la carta
    if (currentIndex === slides.length - 1) {
      window.location.href = 'letter.html';
      return;
    }

    // En otro caso, pasar al siguiente mensaje
    currentIndex = currentIndex + 1;
    showSlide(currentIndex);
  }

  // Mostrar el primer mensaje al cargar
  showSlide(currentIndex);

  textboxContainer.addEventListener('click', nextSlide);
});
