import React, { useState } from "react"

// UNCONTROLLED COMPONENT: everything happening inside, no control from the outside
// onDone: called whether the user reaches the last child of the component
export const UncontrolledFlow = ({ children, onDone }) => {
	const [data, setData] = useState({});
	const [currentStepIndex, setCurrentStepIndex] = useState(0);

	const goNext = () => {
		setCurrentStepIndex(currentStepIndex + 1)
	}

	const currentChild = React.Children.toArray(children)[currentStepIndex]

	if (React.isValidElement(currentChild)) {
		return React.cloneElement(currentChild, { goNext })
	}

	return currentChild;
}

// - perché React.Childen.toArray...