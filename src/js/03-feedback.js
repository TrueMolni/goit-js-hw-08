import throttle from 'lodash.throttle';
// імпортуємо throttle

// наші посилання на елементи форми
const refs = {
  formRef: document.querySelector('.feedback-form'),
  textareaRef: document.querySelector('textarea'),
  inputRef: document.querySelector('input'),
};

// основні змінні
const formData = {};
const FORM_KEY = 'user-form-data';
const parsedData = JSON.parse(localStorage.getItem(FORM_KEY));

//додаємо слухачів подій для делегування форми
refs.formRef.addEventListener('submit', onSubmitHandle);
refs.formRef.addEventListener('input', throttle(onFormHandle, 500));

//підгружаємо дані
loadFormData();

// відстежуємо івенти форми і записуємо в локальне сховище
function onFormHandle() {
  formData.email = refs.inputRef.value;
  formData.message = refs.textareaRef.value;

  localStorage.setItem(FORM_KEY, JSON.stringify(formData));
}

// ф-ія для загрузки зі сховища валідного js об'єкту
function loadFormData() {
  if (parsedData) {
    try {
      const savedMessage = parsedData.message;
      const savedEmail = parsedData.email;

      if (savedMessage) {
        refs.textareaRef.value = savedMessage;
      }

      if (savedEmail) {
        refs.inputRef.value = savedEmail;
      }
    } catch (error) {
      console.log(error.name);
    }
  }
}

// обробник події submit. очищує форму і дані з локального сховища
function onSubmitHandle(event) {
  event.preventDefault();

  if (formData.email && formData.message) {
    console.log(formData);
    event.currentTarget.reset();
    localStorage.removeItem(FORM_KEY);
  }
}
