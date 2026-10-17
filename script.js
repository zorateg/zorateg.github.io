const meals = {
  breakfast: [
    { name: 'Овсянка с ягодами', calories: 430, recipe: 'Сварите овсяные хлопья на молоке или воде. Добавьте горсть ягод, ложку йогурта и немного семян чиа.', image: 'photo-1517673132405-a56a62b18caf' },
    { name: 'Тост с авокадо и яйцом', calories: 470, recipe: 'Подрумяньте цельнозерновой хлеб, разомните авокадо с лимонным соком и подайте с яйцом пашот или вкрутую.', image: 'photo-1525351484163-7529414344d8' },
    { name: 'Творожная миска с фруктами', calories: 390, recipe: 'Смешайте творог с натуральным йогуртом. Сверху добавьте нарезанные фрукты, орехи и чайную ложку мёда.', image: 'photo-1490645935967-10de6ba17061' },
    { name: 'Йогурт с гранолой', calories: 440, recipe: 'Выложите густой греческий йогурт, гранолу и свежие ягоды слоями. Для сладости добавьте немного мёда.', image: 'photo-1488477181946-6428a0291777' },
    { name: 'Омлет со шпинатом', calories: 410, recipe: 'Взбейте яйца с ложкой молока, добавьте шпинат и томаты. Готовьте под крышкой и подайте с ломтиком хлеба.', image: 'photo-1525351484163-7529414344d8' }
  ],
  lunch: [
    { name: 'Боул с курицей и киноа', calories: 690, recipe: 'Соберите боул из запечённой курицы, киноа, огурца, томатов и зелени. Заправьте лимонным соком и оливковым маслом.', image: 'photo-1546069901-ba9599a7e63c' },
    { name: 'Лосось с овощами', calories: 740, recipe: 'Запеките филе лосося с лимоном. Подайте с порцией бурого риса и овощами, приготовленными на пару.', image: 'photo-1467003909585-2f8a72700288' },
    { name: 'Салат с нутом и фетой', calories: 620, recipe: 'Смешайте нут, свежие овощи, листья салата и фету. Добавьте оливковое масло, лимон и щепотку орегано.', image: 'photo-1512621776951-a57141f2eefd' },
    { name: 'Паста с томатами и индейкой', calories: 710, recipe: 'Отварите цельнозерновую пасту. Добавьте обжаренную индейку, томаты, чеснок и свежий базилик.', image: 'photo-1473093295043-cdd812d0e601' },
    { name: 'Тёплый боул с тофу', calories: 650, recipe: 'Обжарьте тофу до золотистой корочки. Подавайте с рисом, брокколи и морковью, добавив немного соевого соуса.', image: 'photo-1512621776951-a57141f2eefd' }
  ],
  dinner: [
    { name: 'Курица с овощами', calories: 590, recipe: 'Запеките куриное филе с кабачком, перцем и красным луком. Приправьте паприкой и подайте с зеленью.', image: 'photo-1547592180-85f173990554' },
    { name: 'Боул с креветками', calories: 610, recipe: 'Быстро обжарьте креветки с чесноком. Добавьте рис, авокадо и огурец, сбрызните лаймом.', image: 'photo-1512621776951-a57141f2eefd' },
    { name: 'Запечённая рыба с салатом', calories: 560, recipe: 'Запеките белую рыбу с лимоном и травами. Подайте с большим зелёным салатом и небольшим печёным картофелем.', image: 'photo-1519708227418-c8fd9a32b7a2' },
    { name: 'Гречка с индейкой', calories: 640, recipe: 'Отварите гречку, отдельно приготовьте кусочки индейки с грибами и луком. Смешайте и добавьте свежую зелень.', image: 'photo-1547592180-85f173990554' },
    { name: 'Салат с яйцом и авокадо', calories: 520, recipe: 'Соедините листья салата, варёное яйцо, авокадо и томаты. Заправьте лимонным соком и ложкой оливкового масла.', image: 'photo-1512621776951-a57141f2eefd' }
  ]
};

const mealTitles = { breakfast: 'Завтрак', lunch: 'Обед', dinner: 'Ужин' };
const goalLabels = { lose: 'Похудение', maintain: 'Поддержание', gain: 'Набор массы' };
const form = document.getElementById('nutrition-form');
const errorBox = document.getElementById('form-error');
const results = document.getElementById('results');
const fieldIds = ['age', 'weight', 'height'];
const menuStatus = document.getElementById('menu-status');
let currentMealSelections = {};
let currentTargetCalories = 0;

function nearestMeal(options, targetCalories) {
  return options.reduce((best, current) =>
    Math.abs(current.calories - targetCalories) < Math.abs(best.calories - targetCalories) ? current : best
  );
}

function getFormValues() {
  const age = Number(document.getElementById('age').value);
  const weight = Number(document.getElementById('weight').value);
  const height = Number(document.getElementById('height').value);
  const sex = document.getElementById('sex').value;
  const goal = document.getElementById('goal').value;
  const activity = Number(form.elements.activity.value);
  return { age, weight, height, sex, goal, activity };
}

function validate({ age, weight, height, sex, goal, activity }) {
  const fields = fieldIds.map((id) => document.getElementById(id));
  if (fields.some((field) => field.value.trim() === '')) {
    return 'Заполните возраст, вес и рост, чтобы продолжить.';
  }
  if (![age, weight, height, activity].every(Number.isFinite)) {
    return 'Проверьте введённые параметры.';
  }
  if (age < 15 || age > 100) return 'Укажите возраст от 15 до 100 лет.';
  if (weight < 30 || weight > 300) return 'Укажите вес от 30 до 300 кг.';
  if (height < 120 || height > 230) return 'Укажите рост от 120 до 230 см.';

  const stepMismatch = fields.find((field) => field.validity.stepMismatch);
  if (stepMismatch?.id === 'age') return 'Возраст укажите целым числом.';
  if (stepMismatch?.id === 'weight') return 'Вес укажите с точностью до 0,1 кг.';
  if (stepMismatch?.id === 'height') return 'Рост укажите целым числом.';
  if (!['female', 'male'].includes(sex) || !['lose', 'maintain', 'gain'].includes(goal) || ![1.2, 1.375, 1.55, 1.725].includes(activity)) {
    return 'Проверьте выбранные параметры.';
  }
  return '';
}

function updateFieldValidityState() {
  fieldIds.forEach((id) => {
    const field = document.getElementById(id);
    const invalid = !field.checkValidity();
    field.setAttribute('aria-invalid', String(invalid));
    field.closest('.input-wrap')?.classList.toggle('is-invalid', invalid);
  });
}

function hideResults() {
  results.classList.remove('is-visible');
  results.setAttribute('aria-hidden', 'true');
}

function scrollResultsIntoView() {
  const prefersReducedMotion = typeof window.matchMedia === 'function'
    && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  results.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' });
}

function handleFormUpdate() {
  if (errorBox.textContent) {
    errorBox.textContent = validate(getFormValues());
    updateFieldValidityState();
  }
  if (results.classList.contains('is-visible')) hideResults();
}

form.addEventListener('input', handleFormUpdate);
form.addEventListener('change', handleFormUpdate);

function roundToNearest50(value) {
  return Math.round(value / 50) * 50;
}

function calculateCalories(person) {
  // Формула Миффлина — Сан Жеора: основной обмен (BMR).
  const sexConstant = person.sex === 'male' ? 5 : -161;
  const bmr = 10 * person.weight + 6.25 * person.height - 5 * person.age + sexConstant;
  const maintenance = bmr * person.activity;
  const goalFactor = { lose: 0.85, maintain: 1, gain: 1.10 }[person.goal];
  return { bmr: Math.round(bmr), target: roundToNearest50(maintenance * goalFactor) };
}

function imageUrl(photoId) {
  return `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=1000&q=82`;
}

function createMealCard(key, dish) {
  const card = document.createElement('article');
  card.className = 'meal-card';

  const imageWrap = document.createElement('div');
  imageWrap.className = 'meal-image-wrap';
  const image = document.createElement('img');
  image.className = 'meal-image';
  image.src = imageUrl(dish.image);
  image.alt = dish.name;
  image.loading = 'lazy';
  image.decoding = 'async';
  imageWrap.append(image);

  const label = document.createElement('span');
  label.className = 'meal-label';
  label.textContent = mealTitles[key];
  imageWrap.append(label);

  const content = document.createElement('div');
  content.className = 'meal-content';
  const titleRow = document.createElement('div');
  titleRow.className = 'meal-title-row';
  const name = document.createElement('h3');
  name.className = 'meal-title';
  name.textContent = dish.name;
  const calories = document.createElement('span');
  calories.className = 'meal-calories';
  calories.textContent = `${dish.calories} ккал`;
  titleRow.append(name, calories);

  const recipe = document.createElement('p');
  recipe.className = 'meal-recipe';
  recipe.textContent = dish.recipe;

  const actions = document.createElement('div');
  actions.className = 'meal-actions';
  const swapButton = document.createElement('button');
  swapButton.className = 'meal-swap';
  swapButton.type = 'button';
  swapButton.textContent = '↻ Другое блюдо';
  swapButton.setAttribute('aria-label', `Другое блюдо: ${mealTitles[key]}`);
  swapButton.addEventListener('click', () => swapMeal(key, card));
  actions.append(swapButton);

  content.append(titleRow, recipe, actions);
  card.append(imageWrap, content);
  return card;
}

function updateMenuTotal() {
  const menuCalories = Object.values(currentMealSelections)
    .reduce((sum, dish) => sum + dish.calories, 0);
  const difference = currentTargetCalories - menuCalories;
  const balance = document.getElementById('menu-balance');

  document.getElementById('menu-total').textContent = menuCalories.toLocaleString('ru-RU');
  if (Math.abs(difference) <= 50) {
    balance.textContent = 'Почти соответствует дневной цели';
  } else if (difference > 0) {
    balance.textContent = `Ниже цели на ${difference.toLocaleString('ru-RU')} ккал`;
  } else {
    balance.textContent = `Выше цели на ${Math.abs(difference).toLocaleString('ru-RU')} ккал`;
  }
  balance.classList.toggle('is-close', Math.abs(difference) <= 100);
}

function swapMeal(key, card) {
  const options = meals[key];
  const currentIndex = options.indexOf(currentMealSelections[key]);
  const dish = options[(currentIndex + 1) % options.length];
  currentMealSelections[key] = dish;

  const replacement = createMealCard(key, dish);
  card.replaceWith(replacement);
  replacement.querySelector('.meal-swap').focus({ preventScroll: true });
  updateMenuTotal();
  menuStatus.textContent = `${mealTitles[key]}: ${dish.name}, ${dish.calories} ккал. ${document.getElementById('menu-balance').textContent}.`;
}

function renderMeals(targetCalories) {
  currentTargetCalories = targetCalories;
  currentMealSelections = {};
  const mealTargets = {
    breakfast: targetCalories * 0.25,
    lunch: targetCalories * 0.40,
    dinner: targetCalories * 0.35
  };
  const mealList = document.getElementById('meal-list');
  mealList.replaceChildren();

  Object.keys(mealTitles).forEach((key) => {
    const dish = nearestMeal(meals[key], mealTargets[key]);
    currentMealSelections[key] = dish;
    mealList.append(createMealCard(key, dish));
  });
  updateMenuTotal();
  menuStatus.textContent = '';
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const person = getFormValues();
  const message = validate(person);
  errorBox.textContent = message;
  if (message) {
    updateFieldValidityState();
    hideResults();
    const invalidField = fieldIds.map((id) => document.getElementById(id)).find((field) => !field.value || !field.checkValidity());
    invalidField?.focus();
    return;
  }

  fieldIds.forEach((id) => {
    const field = document.getElementById(id);
    field.removeAttribute('aria-invalid');
    field.closest('.input-wrap')?.classList.remove('is-invalid');
  });

  const { bmr, target } = calculateCalories(person);
  document.getElementById('calorie-target').textContent = target.toLocaleString('ru-RU');
  document.getElementById('bmr-value').textContent = `${bmr.toLocaleString('ru-RU')} ккал`;
  document.getElementById('goal-badge').textContent = goalLabels[person.goal];
  renderMeals(target);

  results.setAttribute('aria-hidden', 'false');
  results.classList.remove('is-visible');
  // Перезапуск анимации и прокрутка с учётом настройки уменьшения анимации.
  void results.offsetWidth;
  results.classList.add('is-visible');
  window.setTimeout(scrollResultsIntoView, 80);
});

document.getElementById('year').textContent = new Date().getFullYear();
