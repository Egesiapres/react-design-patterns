import { useEffect, useState } from "react"

// CONTROLLED COMPONENT: values the user is inputting in the form are accessible
export const ControlledForm = () => {
	const [error, setError] = useState("");
	const [name, setName] = useState("");
	const [age, setAge] = useState();

	useEffect(() => {
		if (name.length < 1) {
			setError("name can not be empty!")
		} else {
			setError("")
		}
	}, [name])

	return (
		<form>
			{error && <p>{error}</p>}

			<input name="name" type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
			<input name="age" type="number" placeholder="Age" value={age} onChange={e => setAge(e.target.value)} />

			<button>Submit</button>
		</form>
	)
}