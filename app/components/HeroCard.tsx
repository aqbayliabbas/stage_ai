import EmailForm from "./EmailForm";
import SocialProof from "./SocialProof";
import Countdown from "./Countdown";

export default function HeroCard() {
    return (
        <section className="hero-card" id="hero-section">
            <div className="card">
                <h1 className="card-heading">Join the <span className="highlight">waitlist</span></h1>

                <p className="card-sub">
                    Get early access to STAGE - Your brand strategy done by AI. <br /> Built on 5 years of real methodology.
                </p>

                <EmailForm />
                <SocialProof />
                <Countdown />
            </div>
        </section>
    );
}
