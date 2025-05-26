import { useEffect, useState } from "react";

// PRO: cleaner than React.Children etc.
// just a variant they are interchangable and both are perfectly fine
export const DataSourceWithRender = ({ getData = () => {}, render }) => {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    (async () => {
      const data = await getData();

      setResource(data);
    })();
  }, [getData]);

  return render(resource);
};

// - come ho accesso nel componente genitore allo stato interno al componente figlio (quando nel componente padre passo alla prop render (resource)...)?
