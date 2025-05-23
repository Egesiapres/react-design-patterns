import React from "react"

// UNCONTROLLED COMPONENTS: the states of the form component are not accessible
// they're not the best choice
// not very flexible
export const UncontrolledForm = () => {
  const nameInputRef = React.createRef();
  const ageInputRef = React.createRef();

  const submitHandler = (e) => {
    console.log(nameInputRef.current.value)
    console.log(ageInputRef.current.value)

    e.preventDefault();
  }

  return (
    <form onSubmit={submitHandler}>
      <input name="name" type="text" placeholder="Name" ref={nameInputRef} />
      <input name="age" type="number" placeholder="Age" ref={ageInputRef} />
      <input type="submit" placeholder="Submit" />
    </form>
  )
}