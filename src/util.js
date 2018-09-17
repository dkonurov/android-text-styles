export function capitalize(s) {
  return s[0].toUpperCase() + s.slice(1);
}

export function snakeToCamel(s) {
  const result = s.replace(/(\_\w)/g, function(m) {
    return m[1].toUpperCase();
  });
  return capitalize(result);
}
