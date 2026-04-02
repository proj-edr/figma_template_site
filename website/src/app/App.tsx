import { useState, useEffect } from 'react';
import DesktopHome from '../imports/HomeV1/HomeV1';
import MobileHome from '../imports/HomeV1-1/HomeV1';

export default function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if screen is mobile on mount and when window resizes
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="size-full overflow-auto pt-[4px]">
      {isMobile ? <MobileHome /> : <DesktopHome />}
    </div>
  );
}
