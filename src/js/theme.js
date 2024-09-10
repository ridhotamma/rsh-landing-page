const Color = {
  blue: '#0000e0',
  pink: '#f749d4',
  pinkDeep: '#f11ec7',
  yellow: '#f5e400',
  green: '#18b31c',
  cyan: '#11f3f3',
};

const Theme = {
  pink: {
    primaryTitleColor: Color.blue,
    secondaryTitleColor: Color.yellow,
    primaryTextColor: Color.yellow,
    bodyBackgroundColor: Color.pink,
    footerBackgrondColor: Color.yellow,
    footerForegroundColor: Color.pink,
  },

  blue: {
    primaryTitleColor: Color.pink,
    secondaryTitleColor: Color.yellow,
    primaryTextColor: Color.yellow,
    bodyBackgroundColor: Color.blue,
    footerBackgrondColor: Color.pink,
    footerForegroundColor: Color.blue,
  },

  green: {
    primaryTitleColor: Color.cyan,
    secondaryTitleColor: Color.yellow,
    primaryTextColor: Color.yellow,
    bodyBackgroundColor: Color.green,
    footerBackgrondColor: Color.yellow,
    footerForegroundColor: Color.green,
  },
};

let currentTheme = Theme.blue;

function changeThemeColor(theme, wrapper = document.body) {
  const navbar = document.querySelector('#navbar');
  const footer = document.querySelector('#footer');
  const footerLogo = document.querySelector('#footer-logo');
  const primaryTitle = document.querySelector('#primary-title');
  const secondaryTitle = document.querySelector('#secondary-title');
  const footerNavItems = document.querySelectorAll('#footer-nav-item');
  const footerContactButton = document.querySelector('#footer-contact-button');
  const footerMenuBottom = document.querySelector('#footer-menu-bottom');
  const descriptionPopover = document.querySelectorAll('.description-popover');
  const introTitles = document.querySelectorAll('#intro-title');
  const letterIText = document.querySelector('.letter-i > .text');

  currentTheme = theme;
  wrapper.style.backgroundColor = theme.bodyBackgroundColor;

  if (introTitles.length > 0) {
    introTitles.forEach((element) => {
      if (theme.bodyBackgroundColor === Color.blue) {
        element.style.color = Color.pink;
      } else {
        element.style.color = Color.yellow;
      }
    });
  }

  if (letterIText) {
    if (theme.bodyBackgroundColor === Color.blue) {
      letterIText.style.backgroundColor = Color.pink;
    } else {
      letterIText.style.backgroundColor = Color.yellow;
    }
  }

  if (navbar) {
    navbar.style.backgroundColor = theme.bodyBackgroundColor;
  }

  if (footer) {
    footer.style.backgroundColor = theme.footerBackgrondColor;
    footer.style.boxShadow = `0 0 0 100vmax ${theme.footerBackgrondColor}`
  }

  if (footerNavItems.length > 0) {
    footerNavItems.forEach((element) => {
      element.style.color = theme.footerForegroundColor;
    });
  }

  if (footerContactButton) {
    footerContactButton.style.color = theme.footerForegroundColor;
    footerContactButton.style.borderColor = theme.footerForegroundColor;
  }

  if (footerMenuBottom) {
    footerMenuBottom.style.color = theme.footerForegroundColor;
  }

  if (footerLogo) {
    switch (theme.footerForegroundColor) {
      case Color.pink:
        footerLogo.setAttribute('src', './src/images/logo-pink.svg');
        break;
      case Color.blue:
        footerLogo.setAttribute('src', './src/images/logo-blue.svg');
        break;
      case Color.green:
        footerLogo.setAttribute('src', './src/images/logo-green.svg');
        break;
      default:
    }
  }

  if (descriptionPopover.length > 0) {
    descriptionPopover.forEach((element) => {
      if (theme.bodyBackgroundColor === Color.pink) {
        element.classList.add('popover-yellow');
      } else {
        element.classList.remove('popover-yellow');
      }
    });
  }

  if (primaryTitle) {
    primaryTitle.style.color = theme.primaryTitleColor;
  }

  if (secondaryTitle) {
    primaryTitle.style.color = theme.secondaryTitle;
  }
}
