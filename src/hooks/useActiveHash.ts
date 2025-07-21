import { useEffect, useState } from "react";

const useActiveHash = () => {
  const [activeHash, setActiveHash] = useState(window.location.hash);

  useEffect(() => {
    const onHashChange = () => setActiveHash(window.location.hash);
    window.addEventListener("hashchange", onHashChange);

    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return activeHash;
};

export default useActiveHash;
