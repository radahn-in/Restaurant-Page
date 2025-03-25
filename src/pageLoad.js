function createHomeContent() {
  const content = document.getElementById('content');

  const heroSection = document.createElement('section');
  heroSection.className = 'hero';

  const heroHeading = document.createElement('h2');
  heroHeading.textContent = "Welcome to Bella Cuisine";

  const heroText = document.createElement('p');
  heroText.textContent = 'Experience the authentic taste of Italian cooking';

  const ctaButton = document.createElement('button');
  ctaButton.className = 'cta-button';
  ctaButton.textContent = 'Reserve a Table';

  heroSection.appendChild(heroHeading);
  heroSection.appendChild(heroText);
  heroSection.appendChild(ctaButton);

  //About
  const aboutSection = document.createElement('section');
  aboutSection.className = 'about';

  const aboutHeading = document.createElement('h2');
  aboutHeading.textContent = 'Our Story';

  const aboutText = document.createElement('p');
  aboutText.textContent = 'Founded in 1995, Bella Couisine has been serving delicious Italian dishes made from traditional family recipes for over 25 years. Our ingredients are locally sourced and our dishes are prepared fresh daily.';
  const aboutImage = document.createElement('img');
  aboutImage.src = './images/celebration-1852926_960_720.jpg'
  aboutImage.alt = 'Interior of bella Cuisine restaurant';

  aboutSection.appendChild(aboutHeading);
  aboutSection.appendChild(aboutText);
  aboutSection.appendChild(aboutImage);

  // sections to content
  content.appendChild(heroSection);
  content.appendChild(aboutSection);
}

export default createHomeContent;
