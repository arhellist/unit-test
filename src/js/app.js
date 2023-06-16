// TODO: write your code here
export default function health(obj) {
  if (obj.health >= 50) {
    return 'healthy';
  }
  if (obj.health < 50 && obj.health >= 15) {
    return 'wounded';
  }
  return 'critical';
}
