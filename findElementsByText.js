const findElementsByText = (text, tagName) => {
  let element = false;
  const tagNameUpper = tagName.toUpperCase();

  const checkElementText = chekedElement => chekedElement.innerText.indexOf(text) !== -1;
  const iterateChildren = (children = document.body.children) => {
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

export default findElementsByText;
