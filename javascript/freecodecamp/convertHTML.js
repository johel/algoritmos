// Convert the characters &, <, >, " (double quote), and ' (apostrophe),
//  in a string to their corresponding HTML entities.
function convertHTML(str) {

  var map = {
    '"': '&quot;',
    "'" : "&apos;",
    "<" : "&lt;",
    ">" : "&gt;",
    "&" : "&amp;"
  };

  return str.split('').map(el => map[el] ? map[el] : el ).join('');
}

convertHTML("Dolce & Gabbana");