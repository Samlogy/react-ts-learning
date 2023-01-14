import React from "react";

function HOCcpt(Component: any) {
  return function EnhancedComponent({ isLoading, ...props }: any) {
    if (!isLoading) return <Component {...props} />;
    return <div>The component is loading</div>;
  };
}

export default HOCcpt;
