import HeroCard from "./components/HeroCard";
import { getWaitlistCount } from "./actions";
import Image from "next/image";

export default async function Home() {
  const initialCount = await getWaitlistCount();

  return (
    <div className="page-wrapper">
      <nav className="nav-bar">
        <div className="nav-logo">
          <Image 
            src="/stage-logo.svg" 
            alt="Stage Logo" 
            width={90} 
            height={28} 
            priority
          />
        </div>
      </nav>
      <HeroCard initialCount={initialCount} />
    </div>
  );
}
