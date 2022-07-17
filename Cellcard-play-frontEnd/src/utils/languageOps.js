const toLocal = (translatedString, replaceObject) =>
  Object.entries(replaceObject).reduce((acc, [key, val]) => {
    if (typeof val === 'string' || typeof val === 'number') {
      return acc.replace(`$\{${key}}`, val);
    }
    return acc;
  }, translatedString);
export default toLocal;
