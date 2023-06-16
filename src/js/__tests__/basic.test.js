import data from '../app';


test.each([
  [{ name: 'Маг', health: 90 }, 'healthy'],
  [{ name: 'Маг', health: 40 }, 'wounded'],
  [{ name: 'Маг', health: 10 }, 'critical'],
])('testHealth %i health - %s status', (health, expected) => {
  const result = data(health);
  expect(result).toBe(expected);
});
