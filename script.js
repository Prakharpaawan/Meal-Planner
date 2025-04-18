// Meal Data with images
const mealData = {
    indian: [
      {
        id: 'indian-1',
        name: 'Masala Dosa',
        type: 'breakfast',
        img: 'https://source.unsplash.com/300x200/?masala-dosa',
        ingredients: ['Dosa batter', 'Potatoes', 'Onion', 'Mustard seeds', 'Curry leaves', 'Turmeric', 'Oil', 'Salt']
      },
      {
        id: 'indian-2',
        name: 'Chole Bhature',
        type: 'lunch',
        img: 'https://source.unsplash.com/300x200/?chole-bhature',
        ingredients: ['Chickpeas', 'Tea bag', 'Onion', 'Tomatoes', 'Ginger-garlic paste', 'Chole masala', 'Flour', 'Yogurt']
      },
      {
        id: 'indian-3',
        name: 'Butter Chicken',
        type: 'dinner',
        img: 'https://source.unsplash.com/300x200/?butter-chicken',
        ingredients: ['Chicken', 'Yogurt', 'Tomato puree', 'Butter', 'Cream', 'Garam masala', 'Kasuri methi']
      }
    ],
    chinese: [
      {
        id: 'chinese-1',
        name: 'Dim Sum',
        type: 'breakfast',
        img: 'https://source.unsplash.com/300x200/?dim-sum',
        ingredients: ['Flour', 'Pork/shrimp', 'Bamboo shoots', 'Soy sauce', 'Sesame oil', 'Ginger']
      },
      {
        id: 'chinese-2',
        name: 'Kung Pao Chicken',
        type: 'lunch',
        img: 'https://source.unsplash.com/300x200/?kung-pao-chicken',
        ingredients: ['Chicken', 'Dry chilies', 'Peanuts', 'Soy sauce', 'Vinegar', 'Hoisin sauce', 'Garlic']
      },
      {
        id: 'chinese-3',
        name: 'Fried Rice',
        type: 'dinner',
        img: 'https://source.unsplash.com/300x200/?fried-rice',
        ingredients: ['Cooked rice', 'Mixed vegetables', 'Eggs', 'Spring onions', 'Soy sauce', 'Sesame oil']
      }
    ],
    italian: [
      {
        id: 'italian-1',
        name: 'Frittata',
        type: 'breakfast',
        img: 'https://source.unsplash.com/300x200/?frittata',
        ingredients: ['Eggs', 'Milk', 'Spinach', 'Cherry tomatoes', 'Mozzarella', 'Parmesan']
      },
      {
        id: 'italian-2',
        name: 'Margherita Pizza',
        type: 'lunch',
        img: 'https://source.unsplash.com/300x200/?margherita-pizza',
        ingredients: ['Pizza dough', 'Tomato sauce', 'Mozzarella', 'Basil', 'Olive oil']
      },
      {
        id: 'italian-3',
        name: 'Spaghetti Carbonara',
        type: 'dinner',
        img: 'https://source.unsplash.com/300x200/?spaghetti-carbonara',
        ingredients: ['Spaghetti', 'Pancetta', 'Eggs', 'Parmesan', 'Black pepper', 'Garlic']
      }
    ],
    mexican: [
      {
        id: 'mexican-1',
        name: 'Huevos Rancheros',
        type: 'breakfast',
        img: 'https://source.unsplash.com/300x200/?huevos-rancheros',
        ingredients: ['Corn tortillas', 'Eggs', 'Black beans', 'Tomato salsa', 'Avocado', 'Queso fresco']
      },
      {
        id: 'mexican-2',
        name: 'Chicken Tacos',
        type: 'lunch',
        img: 'https://source.unsplash.com/300x200/?chicken-tacos',
        ingredients: ['Chicken breast', 'Taco seasoning', 'Corn tortillas', 'Lettuce', 'Tomato', 'Avocado']
      },
      {
        id: 'mexican-3',
        name: 'Vegetable Enchiladas',
        type: 'dinner',
        img: 'https://source.unsplash.com/300x200/?enchiladas',
        ingredients: ['Flour tortillas', 'Bell peppers', 'Onion', 'Black beans', 'Corn', 'Enchilada sauce']
      }
    ],
    american: [
      {
        id: 'american-1',
        name: 'Pancakes',
        type: 'breakfast',
        img: 'https://source.unsplash.com/300x200/?pancakes',
        ingredients: ['Flour', 'Milk', 'Egg', 'Baking powder', 'Sugar', 'Butter']
      },
      {
        id: 'american-2',
        name: 'Cheeseburger',
        type: 'lunch',
        img: 'https://source.unsplash.com/300x200/?cheeseburger',
        ingredients: ['Ground beef', 'Buns', 'Cheddar', 'Lettuce', 'Tomato', 'Onion', 'Pickles']
      },
      {
        id: 'american-3',
        name: 'BBQ Ribs',
        type: 'dinner',
        img: 'https://source.unsplash.com/300x200/?bbq-ribs',
        ingredients: ['Pork ribs', 'BBQ sauce', 'Brown sugar', 'Paprika', 'Garlic powder']
      }
    ]
  };
  
  let mealPlan = JSON.parse(localStorage.getItem('mealPlan')) || {};
  let shoppingList = JSON.parse(localStorage.getItem('shoppingList')) || [];
  
  // Initialize based on current page
  document.addEventListener('DOMContentLoaded', function() {
    initDarkMode();
    
    const path = window.location.pathname.split('/').pop();
    if (path === 'planner.html') initMealPlanner();
    else if (path === 'meals.html') initMealOptions();
    else if (path === 'shopping.html') initShoppingList();
  });
  
  function initDarkMode() {
    const toggle = document.getElementById('dark-mode-toggle');
    if (!toggle) return;
    
    toggle.addEventListener('change', function() {
      document.body.classList.toggle('dark-mode');
      localStorage.setItem('darkMode', this.checked ? 'enabled' : 'disabled');
    });
    
    if (localStorage.getItem('darkMode') === 'enabled') {
      document.body.classList.add('dark-mode');
      toggle.checked = true;
    }
  }
  
  function showStatusMessage(message) {
    const msgEl = document.createElement('div');
    msgEl.className = 'status-message';
    msgEl.textContent = message;
    document.body.appendChild(msgEl);
    
    setTimeout(() => msgEl.classList.add('show'), 10);
    setTimeout(() => {
      msgEl.classList.remove('show');
      setTimeout(() => msgEl.remove(), 300);
    }, 3000);
  }
  
  // Meal Planner Functions
  function initMealPlanner() {
    populateMealSelects();
    
    document.getElementById('save-plan-btn')?.addEventListener('click', saveMealPlan);
    document.getElementById('generate-shopping-btn')?.addEventListener('click', generateShoppingList);
    
    // Check for meal to add from meals page
    const urlParams = new URLSearchParams(window.location.search);
    const mealToAdd = urlParams.get('addMeal');
    if (mealToAdd) addMealToPlan(mealToAdd);
  }
  
  function populateMealSelects() {
    document.querySelectorAll('.meal-select').forEach(select => {
      while (select.options.length > 1) select.remove(1);
      
      const mealType = select.dataset.meal;
      Object.keys(mealData).forEach(cuisine => {
        mealData[cuisine].forEach(meal => {
          if (meal.type === mealType) {
            const option = new Option(`${meal.name} (${cuisine})`, meal.id);
            select.add(option);
          }
        });
      });
      
      // Set saved selection
      const day = select.dataset.day;
      const type = select.dataset.meal;
      if (mealPlan[day]?.[type]) {
        select.value = mealPlan[day][type];
      }
    });
  }
  
  function addMealToPlan(mealId) {
    const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    const mealTypes = ['breakfast', 'lunch', 'dinner'];
    
    for (const day of days) {
      for (const type of mealTypes) {
        const select = document.querySelector(`.meal-select[data-day="${day}"][data-meal="${type}"]`);
        if (select && !select.value) {
          select.value = mealId;
          showStatusMessage('Meal added to your plan!');
          
          // Clean URL
          const newUrl = window.location.pathname;
          window.history.replaceState({}, '', newUrl);
          return;
        }
      }
    }
    
    showStatusMessage('No empty slots found. Replace a meal manually.');
  }
  
  function saveMealPlan() {
    const plan = {};
    
    document.querySelectorAll('.meal-select').forEach(select => {
      const day = select.dataset.day;
      const mealType = select.dataset.meal;
      const mealId = select.value;
      
      if (!plan[day]) plan[day] = {};
      plan[day][mealType] = mealId || null;
    });
    
    mealPlan = plan;
    localStorage.setItem('mealPlan', JSON.stringify(mealPlan));
    showStatusMessage('Meal plan saved!');
  }
  
  function generateShoppingList() {
    saveMealPlan();
    
    // Get all selected meals
    const selectedMeals = [];
    Object.values(mealPlan).forEach(day => {
      Object.values(day).forEach(mealId => {
        if (mealId) selectedMeals.push(mealId);
      });
    });
    
    // Process ingredients
    const ingredientCounts = {};
    selectedMeals.forEach(mealId => {
      const [cuisine] = mealId.split('-');
      const meal = mealData[cuisine].find(m => m.id === mealId);
      if (!meal) return;
      
      meal.ingredients.forEach(ing => {
        const normalized = ing.toLowerCase().replace(/\([^)]*\)/g, '').trim();
        if (ingredientCounts[normalized]) {
          ingredientCounts[normalized].count++;
          ingredientCounts[normalized].originalNames.add(ing);
        } else {
          ingredientCounts[normalized] = {
            count: 1,
            originalNames: new Set([ing]),
            category: categorizeIngredient(normalized)
          };
        }
      });
    });
    
    // Create shopping list
    shoppingList = Object.entries(ingredientCounts).map(([norm, data]) => ({
      name: Array.from(data.originalNames)[0],
      quantity: data.count > 1 ? `${data.count}x` : '',
      category: data.category,
      checked: false
    }));
    
    localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
    showStatusMessage('Shopping list generated!');
    
    if (window.location.pathname.endsWith('shopping.html')) {
      displayShoppingList();
    } else {
      window.location.href = 'shopping.html';
    }
  }
  
  function categorizeIngredient(ingredient) {
    const lower = ingredient.toLowerCase();
    
    if (/apple|banana|orange|grape|berry|mango|peach|pear|kiwi|melon|pineapple|avocado/.test(lower)) {
      return 'produce';
    } else if (/tomato|potato|onion|garlic|spinach|lettuce|carrot|cucumber|pepper|broccoli|cauliflower|zucchini|mushroom/.test(lower)) {
      return 'produce';
    } else if (/chicken|beef|pork|fish|shrimp|egg|bacon|sausage|ribs|turkey|salmon|tuna/.test(lower)) {
      return 'protein';
    } else if (/milk|cheese|yogurt|cream|butter|parmesan|mozzarella|cheddar/.test(lower)) {
      return 'dairy';
    } else if (/rice|pasta|bread|flour|tortilla|dough|noodle|quinoa|couscous|oat|pancake/.test(lower)) {
      return 'grains';
    } else if (/salt|pepper|oil|vinegar|soy sauce|spice|herb|mustard|ketchup|mayo|sugar|honey|vanilla|cinnamon/.test(lower)) {
      return 'spices';
    } else {
      return 'other';
    }
  }
  
  // Meal Options Functions
  function initMealOptions() {
    document.querySelectorAll('.cuisine-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.cuisine-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        filterMeals();
      });
    });
    
    document.querySelectorAll('.meal-type-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.meal-type-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        filterMeals();
      });
    });
    
    filterMeals();
  }
  
  function filterMeals() {
    const activeCuisine = document.querySelector('.cuisine-tab.active').dataset.cuisine;
    const activeType = document.querySelector('.meal-type-btn.active').dataset.type;
    
    const mealsToShow = (activeCuisine === 'all' 
      ? Object.values(mealData).flat() 
      : mealData[activeCuisine]).filter(meal => 
        activeType === 'all' || meal.type === activeType
      );
    
    document.getElementById('meal-options').innerHTML = '';
    mealsToShow.forEach(meal => {
      document.getElementById('meal-options').appendChild(createMealCard(meal));
    });
  }
  
  function createMealCard(meal) {
    const [cuisine] = meal.id.split('-');
    const card = document.createElement('div');
    card.className = 'meal-card fade-in';
    card.innerHTML = `
      <div class="meal-img" style="background-image: url('${meal.img}')"></div>
      <div class="meal-content">
        <h3 class="meal-title">${meal.name}</h3>
        <span class="meal-cuisine">${cuisine.charAt(0).toUpperCase() + cuisine.slice(1)}</span>
        <span class="meal-type">${meal.type}</span>
        <div class="meal-ingredients">
          <h4>Ingredients:</h4>
          <ul>${meal.ingredients.map(i => `<li>${i}</li>`).join('')}</ul>
        </div>
        <button class="add-meal-btn" data-meal-id="${meal.id}">
          <i class="fas fa-plus"></i> Add to Plan
        </button>
      </div>
    `;
    
    card.querySelector('.add-meal-btn').addEventListener('click', () => {
      window.location.href = `planner.html?addMeal=${meal.id}`;
    });
    
    return card;
  }
  
  // Shopping List Functions
  function initShoppingList() {
    document.getElementById('shopping-form')?.addEventListener('submit', e => {
      e.preventDefault();
      addManualItem();
    });
    
    document.getElementById('auto-generate-btn')?.addEventListener('click', generateShoppingListFromPlan);
    document.getElementById('clear-all-btn')?.addEventListener('click', clearShoppingList);
    document.getElementById('download-list-btn')?.addEventListener('click', downloadShoppingList);
    
    displayShoppingList();
  }
  
  function generateShoppingListFromPlan() {
    if (Object.keys(mealPlan).length === 0) {
      showStatusMessage('No meal plan found!');
      return;
    }
    generateShoppingList();
  }
  
  function addManualItem() {
    const input = document.getElementById('new-item');
    const item = input.value.trim();
    
    if (item) {
      shoppingList.push({
        name: item,
        quantity: '',
        category: categorizeIngredient(item),
        checked: false
      });
      
      localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
      displayShoppingList();
      input.value = '';
      showStatusMessage('Item added!');
    }
  }
  
  function displayShoppingList() {
    const categories = ['produce', 'protein', 'dairy', 'grains', 'spices', 'other'];
    
    categories.forEach(cat => {
      const container = document.querySelector(`.category-items[data-category="${cat}"]`);
      if (!container) return;
      
      container.innerHTML = '';
      shoppingList
        .filter(item => item.category === cat)
        .forEach((item, index) => {
          const li = document.createElement('li');
          li.innerHTML = `
            <span>${item.quantity ? `${item.quantity} ` : ''}${item.name}</span>
            <button class="delete-item" data-index="${index}">
              <i class="fas fa-trash-alt"></i>
            </button>
          `;
          
          li.querySelector('.delete-item').addEventListener('click', () => {
            shoppingList.splice(index, 1);
            localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
            displayShoppingList();
          });
          
          container.appendChild(li);
        });
    });
  }
  
  function clearShoppingList() {
    if (confirm('Clear entire shopping list?')) {
      shoppingList = [];
      localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
      displayShoppingList();
      showStatusMessage('List cleared!');
    }
  }
  
  function downloadShoppingList() {
    if (shoppingList.length === 0) {
      showStatusMessage('List is empty!');
      return;
    }
    
    let content = '=== SHOPPING LIST ===\n\n';
    const byCategory = {};
    
    shoppingList.forEach(item => {
      if (!byCategory[item.category]) byCategory[item.category] = [];
      byCategory[item.category].push(item);
    });
    
    Object.entries(byCategory).forEach(([cat, items]) => {
      content += `--- ${cat.toUpperCase()} ---\n`;
      items.forEach(item => content += `${item.quantity ? `${item.quantity} ` : ''}${item.name}\n`);
      content += '\n';
    });
    
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.create
}