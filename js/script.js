// Плавный скролл при нажатии на ссылки меню с учётом фиксированного header
const navLinks = document.querySelectorAll('header .nav-links a');
const header = document.querySelector('header'); // Селектор header

// Убираем дублирование кода для кнопок и ссылок
const smoothScroll = (element) => {
  element.addEventListener('click', e => {
    e.preventDefault();

    const targetId = element.getAttribute('href').substring(1); // ID целевой секции
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      // Вычисление высоты header
      const headerHeight = header.offsetHeight;

      // Прокрутка с учётом высоты header
      const targetPosition = targetSection.offsetTop - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
};

// Для ссылок в меню
navLinks.forEach(link => smoothScroll(link));

// Для кнопок с классом .btn
const btn = document.querySelectorAll('.btn');
btn.forEach(link => smoothScroll(link));


// Функция для валидации формы "Вопрос"////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function validateQuestionForm() {
  var nameInput = document.querySelector('#name');
  var emailInput = document.querySelector('#email');
  var phoneInput = document.querySelector('#phone1');
  var questionInput = document.querySelector('#question');

  // Проверка поля имени
  if (nameInput.value.trim() === '') {
    alert('Введите ваше имя');
    nameInput.focus();
    return false;
  }

  // Проверка поля email
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
    alert('Введите корректный email');
    emailInput.focus();
    return false;
  }

  // Проверка поля телефона
  if (!/^\+?[78][0-9]{10}$/.test(phoneInput.value)) {
    alert('Введите корректный номер телефона (например, +79123456789 или 89123456789)');
    phoneInput.focus();
    return false;
  }

  // Проверка ввода вопроса
  if (questionInput.value.trim() === '') {
    alert('Введите ваш вопрос');
    questionInput.focus();
    return false;
  }

  // Если все проверки пройдены, возвращаем true
  return true;
}

// Функция для вывода данных формы "Вопрос" в модальное окно
function displayQuestionFormData() {
  var name = document.querySelector('#name').value;
  var email = document.querySelector('#email').value;
  var phone = document.querySelector('#phone1').value;
  var question = document.querySelector('#question').value;

  // Создание модального окна
  var modal = document.createElement('div');
  modal.style.position = 'fixed';
  modal.style.top = '50%';
  modal.style.left = '50%';
  modal.style.transform = 'translate(-50%, -50%)';
  modal.style.backgroundColor = '#ffffff';
  modal.style.padding = '20px';
  modal.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
  modal.style.borderRadius = '8px';
  modal.style.zIndex = '1000';
  modal.innerHTML = `
    <h2>Ваш вопрос:</h2>
    <p><strong>Имя:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Телефон:</strong> ${phone}</p>
    <p><strong>Вопрос:</strong> ${question}</p>
    <button id="closeModal" style="margin-top: 20px; padding: 10px 20px; background-color:rgb(116, 171, 129); color: #ffffff; border: none; border-radius: 4px; cursor: pointer;">Отправить</button>
  `;

  document.body.appendChild(modal);

  // Закрытие модального окна
  document.getElementById('closeModal').addEventListener('click', function () {
    document.body.removeChild(modal);
    location.reload(); 
  });
}

// Обработчик отправки формы "Вопрос"
document.querySelector('#questions-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Отменяем стандартное поведение формы

  if (validateQuestionForm()) {
    // Если данные валидны, отображаем их в модальном окне
    displayQuestionFormData();
  }
});

// Функция для валидации формы "Оформить заказ"/////////////////////////////////////////////////////////////////////////////////////////////////////////////
function validateOrderForm() {
  var nameInput = document.querySelector('#order-name');
  var emailInput = document.querySelector('#order-email');
  var phoneInput = document.querySelector('#phone2');
  var invitationSelect = document.querySelector('#invitation');

  // Проверка поля имени
  if (nameInput.value.trim() === '') {
    alert('Введите ваше имя');
    nameInput.focus();
    return false;
  }

  // Проверка поля email
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
    alert('Введите корректный email');
    emailInput.focus();
    return false;
  }

  // Проверка поля телефона
  if (!/^\+?[78][0-9]{10}$/.test(phoneInput.value)) {
    alert('Введите корректный номер телефона (например, +79123456789 или 89123456789)');
    phoneInput.focus();
    return false;
  }

  // Проверка выбора приглашения
  if (invitationSelect.value === '') {
    alert('Выберите приглашение');
    invitationSelect.focus();
    return false;
  }

  // Если все проверки пройдены, возвращаем true
  return true;
}

// Функция для вывода данных формы "Заказ" в модальное окно
function displayOrderFormData() {
  var name = document.querySelector('#order-name').value;
  var email = document.querySelector('#order-email').value;
  var phone = document.querySelector('#phone2').value;
  var invitation = document.querySelector('#invitation').selectedOptions[0].text;

  // Создание модального окна
  var modal = document.createElement('div');
  modal.style.position = 'fixed';
  modal.style.top = '50%';
  modal.style.left = '50%';
  modal.style.transform = 'translate(-50%, -50%)';
  modal.style.backgroundColor = '#ffffff';
  modal.style.padding = '20px';
  modal.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
  modal.style.borderRadius = '8px';
  modal.style.zIndex = '1000';
  modal.innerHTML = `
    <h2>Ваш заказ:</h2>
    <p><strong>Имя:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Телефон:</strong> ${phone}</p>
    <p><strong>Тип приглашения:</strong> ${invitation}</p>
    <button id="closeOrderModal" style="margin-top: 20px; padding: 10px 20px; background-color: rgb(116, 171, 129); color: #ffffff; border: none; border-radius: 4px; cursor: pointer;">Отправить</button>
  `;

  document.body.appendChild(modal);

  // Закрытие модального окна
  document.getElementById('closeOrderModal').addEventListener('click', function () {
    document.body.removeChild(modal);
    location.reload(); 
  });
}

// Обработчик отправки формы "Заказ"
document.querySelector('#order-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Отменяем стандартное поведение формы

  if (validateOrderForm()) {
    // Если данные валидны, отображаем их в модальном окне
    displayOrderFormData();
  }
});







// Аккордеон для секции FAQ//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const faqItems = document.querySelectorAll('.faq-item');
// faqItems.forEach(item => {
//   const question = item.querySelector('h3');
//   const answer = item.querySelector('p');

//   // Изначально скрываем все ответы
//   answer.style.display = 'none';

//   // Добавляем обработчик клика
//   question.addEventListener('click', () => {
//     const isVisible = answer.style.display === 'block';

//     // Закрываем все ответы
//     faqItems.forEach(faq => faq.querySelector('p').style.display = 'none');

//     // Открываем текущий
//     answer.style.display = isVisible ? 'none' : 'block';

//     // Добавляем анимацию для плавного открытия/закрытия
//     if (isVisible) {
//       answer.style.maxHeight = '0';
//     } else {
//       answer.style.maxHeight = answer.scrollHeight + 'px';
//     }
//   });
// });

document.querySelectorAll('.faq-item h3').forEach(item => {
  item.addEventListener('click', () => {
      const parent = item.parentElement;
      parent.classList.toggle('active');
  });
});

