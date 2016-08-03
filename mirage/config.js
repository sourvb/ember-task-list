export default function() {
  this.get('tasks');
  this.get('tasks/:id');
  this.post('tasks');
  this.patch('tasks/:id');
}
