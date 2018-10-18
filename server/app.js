const WebSocket = require('ws');
const PORT = 8989;
// Initialise wss as a new Websocket Server running in port 8989
const wss = new WebSocket.Server({ port: PORT });

// Array of users currently logged in. Serves as the Database.
var users = [];

const broadcast = (data, ws) => {
	wss.clients.forEach((client) => {
		if (client.readyState === WebSocket.OPEN && client !== ws ) {
			client.send(JSON.stringify(data))
		}
	})
}

wss.on('connection', (ws) => {
	let index
	ws.on('message', (message) => {
		const data = JSON.parse(message)
		switch (data.type) {
			case 'ADD_USER': {
				index = users.length
				users.push({ name: data.name, id: index + 1})
				ws.send(JSON.stringify({
					type: 'USERS_LIST',
					users
				}))
				broadcast({
					type: 'USERS_LIST',
					users
				}, ws)
				break
			}
			case 'ADD_MESSAGE':
				broadcast({
					type: 'ADD_MESSAGE',
					message: data.message,
					author: data.author
				}, ws)
				break
			default:
				break
		}
	})

	ws.on('close', () => {
		users.splice(index, 1)
		broadcast({
			type: 'USERS_LIST',
			users
		}, ws)
	})
});

// TODO: implement safer alternative:
// Define WebSocket using ws library
// const WebSocket = require('ws');

// // This is the code that will run on the server when a new client is connected to
// // the web socket server.
// wss.on('connection', (ws) => {

//   // Random number
//   let userId = Math.floor(Math.random() * 10**10);

//   // ....
//   // rest of the code here
//   // ....

//     // When we add the new user to the array of users, use userId
//     users.push({
//       name: data.name,
//       id:   userId
//     });

//   // ...

//   // When the connection is closed, remove the user with userId
// 	ws.on('close', () => {

// 		// Remove User from 'database'
// 		users = users.filter( (u) => {
// 			return u.id !== userId
// 		});

// 		// Send updated user list to all the connected users
// 		broadcast({
// 			type: 'USERS_LIST',
// 			users
// 		}, ws);
// 	})

// });

console.log("Server running on port:", PORT)
