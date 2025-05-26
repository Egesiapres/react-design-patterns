// HOC props
// different naming convention
// useful to insert a middle layer that inserts some extra functions
export const logProps = Component => {
	return (props) => {
		console.log(props);
		return <Component {...props} />
	}
}