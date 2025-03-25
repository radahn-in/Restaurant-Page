function createMenuContent() {
  const content = document.getElementById('content');

  const menuContainer = document.createElement('div');
  menuContainer.className = 'menu-container';

  const menuTitle = document.createElement('h2');
  menuTitle.textContent = 'Our Menu';
  menuContainer.appendChild(menuTitle);


  const menuCategories = [
    {
      name: 'All Day Breakfast',
      items: [
        {
          name: 'Bean Sprout and Roasted Beetroot Poha',
          description: 'Beaten rice, mixed sprouts, sriracha peanuts, spices. 344 gms | 850.71 kcal',
          price: 950,
        },
        {
          name: 'Aloo Paratha, Chonka Mutter',
          description: 'White Butter, set curd, panchranga pickle. 336 gms | 626.30 kcal',
          price: 950,
        },
        {
          name: 'Mascarpone Pancackes',
          description: 'Mascarpone whipped cream, maple syrup. 306 gms | 585.07 kcal',
          price: 850
        }

      ]
    },
    {
      name: 'via BOMBAY',
      items: [
        {
          name: 'Masala ni Dar',
          description: 'Parsi style masala dal. 342 gms | 519.50 kcal',
          price: 750,
        },
        {
          name: 'Patra ma Paneer',
          description: 'Steamed cottage cheese, wrapped in banana leaves, mint coriander chutney. 367 gms | 736.57 kcal',
          price: 850,
        },
        {
          name: 'Lagansara Vegetable Stew',
          description: 'Sweet, srouce dry vegetable stew. 328 gms | 596.63 kcal',
          price: 850,
        }
      ]
    },
    {
      name: 'COMFORT MAINS',
      items: [
        {
          name: 'Chonka Mutter Palak',
          description: 'Tempered spinach, green peas. 612 gms | 852.52 kcal',
          price: 850,
        },
        {
          name: 'Millet Khichdi',
          description: 'Mung bean, pearl millet khichdi, set cured. 457 gms | 1709.18 kcal',
          price: 1150,
        },
        {
          name: 'Lumachine',
          description: 'Shell pasta, lamb ragout, tomato confit, parmesan. 339 gms | 1190,91 kcal',
          price: 1250,
        }
      ]
    }
  ];
  menuCategories.forEach(category => {
    const categorySection = document.createElement('section');
    categorySection.className = 'menu-category';

    const categoryTitle = document.createElement('h3');
    categoryTitle.textContent = category.name;
    categorySection.appendChild(categoryTitle);

    const itemList = document.createElement('div');
    itemList.className = 'menu-items';

    category.items.forEach(item => {
      const itemDiv = document.createElement('div');
      itemDiv.className = 'menu-item';

      const itemHeader = document.createElement('div');
      itemHeader.className = 'menu-item-header';

      const itemName = document.createElement('h4');
      itemName.textContent = item.name;

      const itemPrice = document.createElement('span');
      itemPrice.textContent = item.price;

      itemHeader.appendChild(itemName);
      itemHeader.appendChild(itemPrice);

      const itemDescripttion = document.createElement('p');
      itemDescripttion.textContent = item.description;

      itemDiv.appendChild(itemHeader);
      itemDiv.appendChild(itemDescripttion);

      itemList.appendChild(itemDiv);
    });

    categorySection.appendChild(itemList);
    menuContainer.appendChild(categorySection);
  });

  content.appendChild(menuContainer)


}

export default createMenuContent;
