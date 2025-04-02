function createContactContent() {
  const content = document.getElementById('content');
  content.textContent = '';

  const contactContainer = document.createElement('div');
  contactContainer.className = 'contact-container';

  const title = document.createElement('h1');
  title.textContent = 'Contact Us';
  contactContainer.appendChild(title);

  const contactDetails = [{
    name: 'Mama Bear',
    position: 'Chef',
    phone: '555-555-5554',
    email: 'totallyRealEmail@notFake.com',
  }, {
    name: 'Papa Bear',
    position: 'Manager',
    phone: '555-555-5555',
    email: 'perfectlyRealEmail.notFake.com'
  }, {
    name: 'Baby Bear',
    position: 'Waiter',
    phone: '555-555-5556',
    email: 'totallyRealEmail@notFake.com'
  }];

  const contactCards = document.createElement('div');
  contactCards.className = 'contact-cards';

  contactDetails.forEach(person => {
    const card = document.createElement('div');
    card.className = 'contact-card';

    const personName = document.createElement('h2');
    personName.textContent = person.name;

    const position = document.createElement('p');
    position.className = 'position';
    position.textContent = person.position;

    const phone = document.createElement('p');
    phone.className = 'phone';
    phone.textContent = `Phone: ${person.phone}`;

    const email = document.createElement('p');
    email.className = 'email';
    email.textContent = `Email: ${person.email}`;

    card.appendChild(personName)
    card.appendChild(position);
    card.appendChild(phone);
    card.appendChild(email);

    contactCards.appendChild(card);
  });

  contactContainer.appendChild(contactCards);

  content.appendChild(contactContainer);

}

export default createContactContent;
