import axios from "axios";
import { useEffect, useState } from "react"

// from "user" to "User"
const toCapital = str => str.charAt(0).toUpperCase() + str.slice(1);

// HOC es 2: include-updatable-user more generic
export const includeUpdatableResource = (Component, resourceUrl, resourceName) => {
  return props => {
    // user befor edits
    const [initialResource, setInitialResource] = useState(null);

    // user we're editing using the form
    const [resource, setResource] = useState(null);

    useEffect(() => {
      (async () => {
        const response = await axios.get(resourceUrl);
        setInitialResource(response.data);
        setResource(response.data);
      })()
    }, [])

    const onChange = updates => {
      setResource({ ...resource, ...updates });
    }

    const onPost = async () => {
      const response = await axios.post(resourceUrl, { [resourceName]: resource });
      setInitialResource(response.data);
      setResource(response.data);
    }

    const onReset = () => {
      setResource(initialResource);
    }

    const resourceProps = {
      [resourceName]: resource, // user
      [`onChange${toCapital(resourceName)}`]: onChange, // onChangeUser
      [`onPost${toCapital(resourceName)}`]: onPost, // onPostUser
      [`onReset${toCapital(resourceName)}`]: onReset // onResetUser
    }

    // no generic names for props because
    // this may generate conflicts with other generic HOCs
    return <Component {...props} {...resourceProps} />
  }
}