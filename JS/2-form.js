const formRef = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

let formData = {
  email: '',
  message: '',
};

// Функція для завантаження даних з локального сховища
function loadFromLocalStorage() {
  try {
    const savedState = localStorage.getItem(STORAGE_KEY);
    return savedState ? JSON.parse(savedState) : { email: '', message: '' };
  } catch (error) {
    console.error('Error parsing JSON from localStorage:', error);
    return { email: '', message: '' };
  }
}

// Завантаження даних при завантаженні сторінки
document.addEventListener('DOMContentLoaded', () => {
  formData = loadFromLocalStorage();
  formRef.elements.email.value = formData.email.trim();
  formRef.elements.message.value = formData.message.trim();
});

// Обробник події input
formRef.addEventListener('input', event => {
  const { name, value } = event.target;
  formData[name] = value.trim(); // Зберігаємо значення без пробілів по краях
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

// Обробник події submit
formRef.addEventListener('submit', event => {
  event.preventDefault(); // Запобігаємо стандартній відправці форми

  const { email, message } = formData;

  if (email === '' || message === '') {
    alert('Fill please all fields');
    return;
  }

  console.log(formData); // Виводимо об'єкт formData з актуальними значеннями

  // Очищення локального сховища, об'єкта formData та полів форми
  localStorage.removeItem(STORAGE_KEY);
  formData = { email: '', message: '' };
  formRef.reset(); // Скидає значення всіх полів форми
});
