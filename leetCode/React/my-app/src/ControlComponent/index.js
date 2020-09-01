import React, { useState, useEffect } from 'react';

function App() {
	const [username, setUsername] = useState(0);
	const [age, setAge] = useState(0);

	useEffect(() => {
		console.log(age);
	},[])

	useEffect(() => {
		console.log(age);
	})

  return (
		<div>
			username:<input
				type="text"
				name="username"
				value={username}
				onChange={(e) => setUsername(e.target.value)}
			/><br />
			age:<input
				type="text"
				name="age"
				value={age} 
				onChange={(e) => setAge(e.target.value)}
			/>
		</div>
	)
}

export default App;
