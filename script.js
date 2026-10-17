const meals = {
  breakfast: [
    { name: 'Овсянка с ягодами', calories: 430, recipe: 'Сварите овсяные хлопья на молоке или воде. Добавьте горсть ягод, ложку йогурта и немного семян чиа.', image: 'photo-1517673132405-a56a62b18caf' },
    { name: 'Тост с авокадо и яйцом', calories: 470, recipe: 'Подрумяньте цельнозерновой хлеб, разомните авокадо с лимонным соком и подайте с яйцом пашот или вкрутую.', image: 'photo-1525351484163-7529414344d8' },
    { name: 'Творожная миска с фруктами', calories: 390, recipe: 'Смешайте творог с натуральным йогуртом. Сверху добавьте нарезанные фрукты, орехи и чайную ложку мёда.', image: 'photo-1490645935967-10de6ba17061' },
    { name: 'Йогурт с гранолой', calories: 440, recipe: 'Выложите густой греческий йогурт, гранолу и свежие ягоды слоями. Для сладости добавьте немного мёда.', image: 'photo-1488477181946-6428a0291777' },
    { name: 'Омлет со шпинатом', calories: 410, recipe: 'Взбейте яйца с ложкой молока, добавьте шпинат и томаты. Готовьте под крышкой и подайте с ломтиком хлеба.', image: 'photo-1525351484163-7529414344d8' },
    { name: 'Сырники с йогуртом и ягодами', calories: 450, recipe: 'Запеките сырники до золотистой корочки и подайте с натуральным йогуртом и свежими ягодами.', image: 'photo-1504754524776-8f4f37790ca0' },
    { name: 'Тост с хумусом и помидорами', calories: 430, recipe: 'Подрумяньте цельнозерновой хлеб, намажьте хумусом и добавьте ломтики томата и зелень.', image: 'photo-1482049016688-2d3e1b311543' }
  ],
  lunch: [
    { name: 'Боул с курицей и киноа', calories: 690, recipe: 'Соберите боул из запечённой курицы, киноа, огурца, томатов и зелени. Заправьте лимонным соком и оливковым маслом.', image: 'photo-1546069901-ba9599a7e63c' },
    { name: 'Лосось с овощами', calories: 740, recipe: 'Запеките филе лосося с лимоном. Подайте с порцией бурого риса и овощами, приготовленными на пару.', image: 'photo-1467003909585-2f8a72700288' },
    { name: 'Салат с нутом и фетой', calories: 620, recipe: 'Смешайте нут, свежие овощи, листья салата и фету. Добавьте оливковое масло, лимон и щепотку орегано.', image: 'photo-1512621776951-a57141f2eefd' },
    { name: 'Паста с томатами и индейкой', calories: 710, recipe: 'Отварите цельнозерновую пасту. Добавьте обжаренную индейку, томаты, чеснок и свежий базилик.', image: 'photo-1473093295043-cdd812d0e601' },
    { name: 'Тёплый боул с тофу', calories: 650, recipe: 'Обжарьте тофу до золотистой корочки. Подавайте с рисом, брокколи и морковью, добавив немного соевого соуса.', image: 'photo-1512621776951-a57141f2eefd' },
    { name: 'Фасолевый боул с бурым рисом', calories: 680, recipe: 'Смешайте красную фасоль с бурым рисом, кукурузой и свежими овощами. Добавьте лайм и зелень.', image: 'photo-1504754524776-8f4f37790ca0' },
    { name: 'Суп из чечевицы с цельнозерновым хлебом', calories: 590, recipe: 'Потушите красную чечевицу с морковью, томатами и специями. Подавайте с ломтиком зернового хлеба.', image: 'photo-1547592180-85f173990554' }
  ],
  dinner: [
    { name: 'Курица с овощами', calories: 590, recipe: 'Запеките куриное филе с кабачком, перцем и красным луком. Приправьте паприкой и подайте с зеленью.', image: 'photo-1547592180-85f173990554' },
    { name: 'Боул с креветками', calories: 610, recipe: 'Быстро обжарьте креветки с чесноком. Добавьте рис, авокадо и огурец, сбрызните лаймом.', image: 'photo-1512621776951-a57141f2eefd' },
    { name: 'Запечённая рыба с салатом', calories: 560, recipe: 'Запеките белую рыбу с лимоном и травами. Подайте с большим зелёным салатом и небольшим печёным картофелем.', image: 'photo-1519708227418-c8fd9a32b7a2' },
    { name: 'Гречка с индейкой', calories: 640, recipe: 'Отварите гречку, отдельно приготовьте кусочки индейки с грибами и луком. Смешайте и добавьте свежую зелень.', image: 'photo-1547592180-85f173990554' },
    { name: 'Салат с яйцом и авокадо', calories: 520, recipe: 'Соедините листья салата, варёное яйцо, авокадо и томаты. Заправьте лимонным соком и ложкой оливкового масла.', image: 'photo-1512621776951-a57141f2eefd' },
    { name: 'Чечевичный дал с рисом', calories: 620, recipe: 'Потушите чечевицу с томатами и мягкими специями. Подавайте с порцией риса и свежей зеленью.', image: 'photo-1498837167922-ddd27525d352' },
    { name: 'Индейка с запечёнными овощами', calories: 650, recipe: 'Запеките кусочки индейки с бататом, морковью и луком. Добавьте зелень и немного оливкового масла.', image: 'photo-1505576399274-565b52d4ac71' }
  ]
};

const teenMeals = {
  breakfast: [
    { name: 'Овсянка с ягодами и йогуртом', calories: 440, recipe: 'Сварите овсяные хлопья на молоке, добавьте ягоды, натуральный йогурт и немного семян.', image: 'photo-1517673132405-a56a62b18caf' },
    { name: 'Творожная миска с бананом', calories: 430, recipe: 'Смешайте творог с йогуртом, добавьте банан и немного орехов или семян.', image: 'photo-1490645935967-10de6ba17061' },
    { name: 'Омлет со шпинатом и тостом', calories: 460, recipe: 'Приготовьте омлет с яйцом, шпинатом и томатами. Подайте с цельнозерновым тостом.', image: 'photo-1525351484163-7529414344d8' },
    { name: 'Гречневая каша с молоком', calories: 420, recipe: 'Отварите гречку, добавьте молоко и сезонные фрукты или ягоды.', image: 'photo-1504754524776-8f4f37790ca0' },
    { name: 'Сырники с йогуртом', calories: 450, recipe: 'Запеките сырники и подайте с натуральным йогуртом и свежими ягодами.', image: 'photo-1488477181946-6428a0291777' }
  ],
  lunch: [
    meals.lunch[0], meals.lunch[1], meals.lunch[3],
    { name: 'Суп из чечевицы с хлебом', calories: 620, recipe: 'Сварите чечевицу с морковью и томатами. Подавайте с ломтиком цельнозернового хлеба.', image: 'photo-1547592180-85f173990554' },
    { name: 'Тофу с рисом и овощами', calories: 650, recipe: 'Подавайте обжаренный тофу с рисом, брокколи и морковью.', image: 'photo-1512621776951-a57141f2eefd' }
  ],
  dinner: [
    meals.dinner[0], meals.dinner[2], meals.dinner[3],
    { name: 'Курица с картофелем и овощами', calories: 650, recipe: 'Запеките курицу, картофель и овощи с небольшим количеством масла и травами.', image: 'photo-1504754524776-8f4f37790ca0' },
    { name: 'Чечевица с овощами', calories: 600, recipe: 'Потушите чечевицу с морковью, томатами и зеленью до мягкости.', image: 'photo-1498837167922-ddd27525d352' }
  ]
};

const seniorMeals = {
  breakfast: [
    { name: 'Овсяная каша с грушей', calories: 390, recipe: 'Сварите овсяные хлопья до мягкости, добавьте грушу и ложку йогурта.', image: 'photo-1517673132405-a56a62b18caf' },
    { name: 'Нежный омлет с томатами', calories: 360, recipe: 'Приготовьте мягкий омлет с томатами и зеленью. По желанию подайте с зерновым хлебом.', image: 'photo-1525351484163-7529414344d8' },
    { name: 'Творог с йогуртом и ягодами', calories: 380, recipe: 'Смешайте творог с натуральным йогуртом и мягкими свежими или размороженными ягодами.', image: 'photo-1488477181946-6428a0291777' },
    { name: 'Гречневая каша с яйцом', calories: 400, recipe: 'Подавайте хорошо разваренную гречку с яйцом и зеленью.', image: 'photo-1504754524776-8f4f37790ca0' },
    { name: 'Запечённые сырники с фруктами', calories: 420, recipe: 'Запеките сырники и подайте с йогуртом и нарезанными фруктами.', image: 'photo-1490645935967-10de6ba17061' }
  ],
  lunch: [
    { name: 'Рыба с картофелем и овощами', calories: 610, recipe: 'Запеките белую рыбу. Подайте с мягким картофелем и тушёными овощами.', image: 'photo-1519708227418-c8fd9a32b7a2' },
    { name: 'Индейка с гречкой', calories: 600, recipe: 'Приготовьте индейку с хорошо разваренной гречкой и тушёными овощами.', image: 'photo-1547592180-85f173990554' },
    { name: 'Суп из чечевицы', calories: 560, recipe: 'Сварите чечевицу с морковью и томатами до мягкости; добавьте зелень.', image: 'photo-1547592180-85f173990554' },
    { name: 'Курица с рисом и овощами', calories: 620, recipe: 'Запеките курицу и подайте с рисом и мягкими сезонными овощами.', image: 'photo-1504754524776-8f4f37790ca0' },
    { name: 'Лосось с овощами', calories: 700, recipe: 'Запеките лосося с лимоном и подайте с приготовленными на пару овощами.', image: 'photo-1467003909585-2f8a72700288' }
  ],
  dinner: [
    { name: 'Тефтели из индейки с пюре', calories: 520, recipe: 'Приготовьте тефтели из индейки и подайте с картофельным пюре и зеленью.', image: 'photo-1547592180-85f173990554' },
    { name: 'Треска с овощами', calories: 500, recipe: 'Запеките треску с овощами до мягкости, добавьте лимон и зелень.', image: 'photo-1519708227418-c8fd9a32b7a2' },
    { name: 'Омлет с овощами', calories: 450, recipe: 'Приготовьте омлет с мягкими овощами и подайте с ломтиком зернового хлеба.', image: 'photo-1525351484163-7529414344d8' },
    { name: 'Тёплый боул с тофу', calories: 540, recipe: 'Подавайте тофу с рисом и приготовленными на пару овощами.', image: 'photo-1512621776951-a57141f2eefd' },
    { name: 'Творожная запеканка с фруктами', calories: 480, recipe: 'Запеките творог с яйцом и фруктами до мягкой золотистой корочки.', image: 'photo-1490645935967-10de6ba17061' }
  ]
};

const ageProfiles = {
  teen: {
    label: '15–17 лет · подростковый рацион',
    note: 'Меню — только идеи блюд. Для подростков расчёт калорий особенно приблизителен; не используйте его для ограничения питания или снижения веса без специалиста.',
    meals: teenMeals,
    extraIdeas: [
      { name: 'Йогурт с ягодами', image: 'photo-1488477181946-6428a0291777' },
      { name: 'Фрукты и творог', image: 'photo-1505576399274-565b52d4ac71' },
      { name: 'Тост с яйцом', image: 'photo-1482049016688-2d3e1b311543' }
    ]
  },
  adult: {
    label: '18–64 года · рацион для взрослых',
    note: 'Варианты блюд подобраны для взрослой возрастной группы. Меняйте блюда по вкусу и сверяйте сумму меню с дневным ориентиром.',
    meals,
    extraIdeas: [
      { name: 'Овощи с хумусом', image: 'photo-1498837167922-ddd27525d352' },
      { name: 'Фруктовая тарелка', image: 'photo-1505576399274-565b52d4ac71' },
      { name: 'Боул с зеленью', image: 'photo-1512621776951-a57141f2eefd' }
    ]
  },
  senior: {
    label: '65+ лет · рацион старшего возраста',
    note: 'Идеи блюд для группы 65+. Индивидуальные потребности зависят от здоровья, аппетита и рекомендаций специалиста.',
    meals: seniorMeals,
    extraIdeas: [
      { name: 'Йогурт с мягкими ягодами', image: 'photo-1488477181946-6428a0291777' },
      { name: 'Творог с фруктами', image: 'photo-1490645935967-10de6ba17061' },
      { name: 'Овощи и зелень', image: 'photo-1498837167922-ddd27525d352' }
    ]
  }
};

const mealTitles = { breakfast: 'Завтрак', lunch: 'Обед', dinner: 'Ужин' };
const goalLabels = { lose: 'Похудение', maintain: 'Поддержание', gain: 'Набор массы' };
const form = document.getElementById('nutrition-form');
const errorBox = document.getElementById('form-error');
const results = document.getElementById('results');
const fieldIds = ['age', 'weight', 'height'];
const menuStatus = document.getElementById('menu-status');
const ageField = document.getElementById('age');
const goalSelect = document.getElementById('goal');
const goalNote = document.getElementById('goal-note');
let currentMealSelections = {};
let currentTargetCalories = 0;
let currentMealCatalog = meals;

function nearestMeal(options, targetCalories) {
  return options.reduce((best, current) =>
    Math.abs(current.calories - targetCalories) < Math.abs(best.calories - targetCalories) ? current : best
  );
}

function getFormValues() {
  const age = Number(ageField.value);
  const weight = Number(document.getElementById('weight').value);
  const height = Number(document.getElementById('height').value);
  const sex = document.getElementById('sex').value;
  const goal = goalSelect.value;
  const activity = Number(form.elements.activity.value);
  return { age, weight, height, sex, goal, activity };
}

function getAgeProfile(age) {
  if (age < 18) return ageProfiles.teen;
  if (age < 65) return ageProfiles.adult;
  return ageProfiles.senior;
}

function updateGoalAvailability() {
  const age = Number(ageField.value);
  const isTeen = ageField.value !== '' && Number.isFinite(age) && age < 18;
  Array.from(goalSelect.options).forEach((option) => {
    if (option.value !== 'maintain') option.disabled = isTeen;
  });
  if (isTeen && goalSelect.value !== 'maintain') goalSelect.value = 'maintain';
  goalNote.textContent = isTeen
    ? 'Для 15–17 лет цели похудения и набора отключены. При вопросах о весе обратитесь к специалисту.'
    : 'Цель влияет на ориентировочную калорийность.';
}

ageField.addEventListener('input', updateGoalAvailability);
ageField.addEventListener('change', updateGoalAvailability);

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
  if (age < 18 && goal !== 'maintain') return 'Для возраста до 18 лет выберите поддержание и обсудите питание со специалистом.';
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
  // Для несовершеннолетних не применяем дефицит или профицит калорий.
  const goalFactor = person.age < 18 ? 1 : { lose: 0.85, maintain: 1, gain: 1.10 }[person.goal];
  return { bmr: Math.round(bmr), target: roundToNearest50(maintenance * goalFactor) };
}

function imageUrl(photoId, width = 1000) {
  return `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=${width}&q=82`;
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
  const options = currentMealCatalog[key];
  const currentIndex = options.indexOf(currentMealSelections[key]);
  const dish = options[(currentIndex + 1) % options.length];
  currentMealSelections[key] = dish;

  const replacement = createMealCard(key, dish);
  card.replaceWith(replacement);
  replacement.querySelector('.meal-swap').focus({ preventScroll: true });
  updateMenuTotal();
  menuStatus.textContent = `${mealTitles[key]}: ${dish.name}, ${dish.calories} ккал. ${document.getElementById('menu-balance').textContent}.`;
}

function renderMeals(targetCalories, ageProfile) {
  currentTargetCalories = targetCalories;
  currentMealSelections = {};
  currentMealCatalog = ageProfile.meals;
  const mealTargets = {
    breakfast: targetCalories * 0.25,
    lunch: targetCalories * 0.40,
    dinner: targetCalories * 0.35
  };
  const mealList = document.getElementById('meal-list');
  mealList.replaceChildren();

  Object.keys(mealTitles).forEach((key) => {
    const dish = nearestMeal(currentMealCatalog[key], mealTargets[key]);
    currentMealSelections[key] = dish;
    mealList.append(createMealCard(key, dish));
  });
  updateMenuTotal();
  menuStatus.textContent = '';
}

function renderExtraIdeas(ageProfile) {
  const gallery = document.getElementById('inspiration-grid');
  gallery.replaceChildren();

  ageProfile.extraIdeas.forEach((idea) => {
    const card = document.createElement('article');
    card.className = 'inspiration-card';
    const image = document.createElement('img');
    image.className = 'inspiration-image';
    image.src = imageUrl(idea.image, 640);
    image.alt = idea.name;
    image.loading = 'lazy';
    image.decoding = 'async';
    const name = document.createElement('p');
    name.className = 'inspiration-title';
    name.textContent = idea.name;
    card.append(image, name);
    gallery.append(card);
  });
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

  const ageProfile = getAgeProfile(person.age);
  const { bmr, target } = calculateCalories(person);
  const isTeen = person.age < 18;
  document.getElementById('age-plan-label').textContent = ageProfile.label;
  document.getElementById('age-plan-note').textContent = ageProfile.note;
  document.getElementById('calorie-target').textContent = target.toLocaleString('ru-RU');
  document.getElementById('bmr-value').textContent = `${bmr.toLocaleString('ru-RU')} ккал`;
  document.getElementById('goal-badge').textContent = isTeen ? 'Подросток' : goalLabels[person.goal];
  document.getElementById('calorie-caption').textContent = isTeen ? 'ПРИМЕРНАЯ ОЦЕНКА' : 'ВАША ЦЕЛЬ НА ДЕНЬ';
  document.getElementById('calorie-footnote').textContent = isTeen
    ? 'Формула предназначена для взрослых и может быть неточной для подростков. Не используйте число как ограничение питания.'
    : person.age >= 65
      ? 'Расчёт приблизительный; после 65 лет потребности особенно зависят от здоровья и рекомендаций специалиста.'
      : 'Ориентировочная норма с учётом вашей активности и цели.';
  renderMeals(target, ageProfile);
  renderExtraIdeas(ageProfile);

  results.setAttribute('aria-hidden', 'false');
  results.classList.remove('is-visible');
  // Перезапуск анимации и прокрутка с учётом настройки уменьшения анимации.
  void results.offsetWidth;
  results.classList.add('is-visible');
  window.setTimeout(scrollResultsIntoView, 80);
});

document.getElementById('year').textContent = new Date().getFullYear();
