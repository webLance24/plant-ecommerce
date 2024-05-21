// withLoading.tsx
import { useState, useEffect, ComponentType } from "react";
import Loading from "./Loading"; // Adjust the path to your Loading component

// Define a higher-order component type that takes a component and returns a component
const withLoading = <P extends object>(WrappedComponent: ComponentType<P>) => {
  return (props: P) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 2000); // Adjust the delay as needed

      return () => clearTimeout(timer);
    }, []);

    if (loading) {
      return <Loading />;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withLoading;
