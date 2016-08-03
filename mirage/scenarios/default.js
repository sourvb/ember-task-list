// Scenario to initialize fake tasks generation in development build

export default function( server ) {
  	server.createList('tasks', 15);
}
