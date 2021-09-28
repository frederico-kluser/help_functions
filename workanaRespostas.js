document.getElementsByClassName('icon icon-attach-file-select')[1].click();
document.getElementsByClassName('form-file-checkbox')[1].getElementsByTagName('label')[0].click();
document.getElementsByClassName('btn btn-primary btn-xs-block')[2].click();

const findElementsByText = (text, tagName, fatherElement = document.body) => {
  let element = false;
  const tagNameUpper = tagName.toUpperCase();

  const checkElementText = chekedElement => chekedElement.innerText.indexOf(text) !== -1;
  const iterateChildren = (children = fatherElement.children) => {
    for (let index = 0; index < children.length; index += 1) {
      const childElement = children[index];

      if (checkElementText(childElement) && childElement.tagName === tagNameUpper) {
        element = childElement;
      } else {
        iterateChildren(childElement.children);
      }
    }
  };

  iterateChildren();

  return element;
};

const workanaAnswers = {
  'Quando você tem disponibilidade para começar?':
    'Disponibilidade imediata em função do escopo do projeto',
  'Em aproximadamente quanto tempo você teria o projeto pronto?':
    'Preciso definir o projeto em uma conversa de video na plataforma do Workana para micro definições, apos isso conseguimos definir a data com exatidão, (adianto que não me parece um projeto demorado) ',
  'Qual é a sua experiência neste tipo de projeto?':
    'No desenvolvimento de ‘software’, sempre criei soluções elaboradas para as mais diferentes situações, provavelmente todas as tecnologias que vou empregar no projeto, tenho conhecimento prático',
  'Que informações você precisa para iniciar o trabalho?':
    'Visões do requerente, expectativas e tecnologias que terei liberdade para usar',
  'Você tem algum exemplo de projeto similar que já tenha realizado?': 'Não',
  'Quantos anos possui de experiência com node.js?': '3 anos',
  'Quantos anos possui de experiência com react native?': '3 anos',
};

const column9 = findElementsByText('Pergunta', 'h2').parentElement;
let origin = findElementsByText('Quando você tem disponibilidade para começar?', 'label', column9);
origin = origin.parentElement.parentElement;

setTimeout(() => {
  for (let index = 0; index < origin.children.length; index += 1) {
    const element = origin.children[index];

    if (workanaAnswers[element.children[0].innerText]) {
      element.children[1].children[0].value = workanaAnswers[element.children[0].innerText];
    }
  }

  document
    .getElementsByClassName('btn btn-primary btn-lg btn-xs-block js-send-budget-normal')[1]
    .removeAttribute('disabled');
  document
    .getElementsByClassName('btn btn-primary btn-lg btn-xs-block js-send-budget-normal')[1]
    .click();
}, 500);
