import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // CASE 1: hash exists → scroll to section
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 150);
      }
      return;
    }

    // CASE 2: NO hash → scroll to TOP (Hero)
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname, hash]);

  return null;
}
