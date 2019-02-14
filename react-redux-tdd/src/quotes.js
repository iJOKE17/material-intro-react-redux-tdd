function getRandomQuotes () {
  const quotes = [
    'React is awesome',
    'MobX is a state management library',
    'Hooks is coming',
    'Redux make my life easier',
    'Software testing is ',
    'I don\'t like pop music',
  ]
  return quotes[ Math.floor( Math.random() * quotes.length ) ]
}
