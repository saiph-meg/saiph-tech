const convertHexToRGB = hex => {
  hex = hex.replace(/^\s*#|\s*$/g, "");
  if (hex.length == 3) {
    hex = hex.replace(/(.)/g, "$1$1");
  }

  return [
    parseInt(hex.substring(0, 2), 16),
    parseInt(hex.substring(2, 4), 16),
    parseInt(hex.substring(4, 6), 16)
  ];
};

const convertRgbToHex = rgb => {
  const hex = rgb
    .map(value => {
      let str = value.toString(16);
      if (str.length == 1) {
        str = "0" + str;
      }
      return str;
    })
    .join("");
  return "#" + hex;
};

const lighten = (hex, percent) => {
  return convertRgbToHex(
    convertHexToRGB(hex).map(v => Math.round(v + ((255 - v) * percent) / 100))
  );
};

const darken = (hex, percent) => {
  return convertRgbToHex(
    convertHexToRGB(hex).map(v => Math.round(v - (v * percent) / 100))
  );
};

const enhanceTemplates = (suggestions, suffix) => {
  const templates = [];
  suggestions.forEach(template => {
    templates.push(template);
    if (Array.isArray(suffix)) {
      suffix.forEach(str => templates.push(`${template}--${str}`));
    } else {
      templates.push(`${template}--${suffix}`);
    }
  });
  return templates;
};

module.exports = {
  convertHexToRGB,
  convertRgbToHex,
  darken,
  lighten,
  enhanceTemplates
};
