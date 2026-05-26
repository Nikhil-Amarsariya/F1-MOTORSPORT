import { useEffect } from "react";

function useTitle(title) {
  useEffect(() => {
    document.title = `F1 Motorsport - ${title}`;
  }, [title]);
}

export default useTitle;
