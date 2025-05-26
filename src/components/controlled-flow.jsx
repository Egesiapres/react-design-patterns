import React from "react";

// CONTROLLED COMPONENT: everything happening inside, no control from the outside
// onDone: called whether the user reaches the last child of the component
export const ControlledFlow = ({ children, onDone, currentIndex, onNext }) => {
  const goNext = dataFromStep => {
    onNext(dataFromStep);
  };

  const currentChild = React.Children.toArray(children)[currentIndex];

  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, { goNext });
  }

  return currentChild;
};
