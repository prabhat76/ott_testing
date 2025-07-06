// LandingPage.tsx
import { useState } from "react";
import { IonContent } from '@ionic/react';
import { ChevronRight } from "lucide-react";
import NetflixNavbar from "../components/Navbar";
import NetflixFooter from "../components/Footer";
import "./Home.css";

export default function LandingPage() {
  const [email, setEmail] = useState("");

  return (
    <IonContent className="ion-padding" scrollY={true}>
      <div className="landing-container">
        <div
          className="hero-section"
          style={{
            backgroundImage:
              "linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%), url('/placeholder.svg?height=1080&width=1920')",
          }}
        >
          <NetflixNavbar showBrowseButton={true} />
          <div className="hero-content">
            <h1>Unlimited movies, TV shows, and more</h1>
            <p className="subtitle">Watch anywhere. Cancel anytime.</p>
            <p className="cta-text">
              Ready to watch? Enter your email to create or restart your membership.
            </p>
            <div className="cta-form">
              <input
                type="email"
                placeholder="Email address"
                className="email-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="cta-button">
                Get Started
                <ChevronRight className="ml-2" />
              </button>
            </div>
          </div>
        </div>

        <section className="feature-section">
          <div className="feature-container">
            <div className="feature-text">
              <h2>Enjoy on your TV</h2>
              <p>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
            </div>
            <div className="feature-image-container">
              <img src="/placeholder.svg?height=400&width=600" alt="TV" className="feature-image" />
              <div className="video-overlay">
                <video autoPlay playsInline muted loop className="feature-video">
                  <source src="#" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </section>

        <section className="feature-section reverse">
          <div className="feature-container">
            <div className="feature-text">
              <h2>Download your shows to watch offline</h2>
              <p>Save your favorites easily and always have something to watch.</p>
            </div>
            <div className="feature-image-container">
              <img src="/placeholder.svg?height=400&width=600" alt="Mobile device" className="feature-image" />
              <div className="download-box">
                <img src="/placeholder.svg?height=80&width=60" alt="Boxshot" className="boxshot" />
                <div className="download-text">
                  <div className="font-bold">Stranger Things</div>
                  <div className="download-status">Downloading...</div>
                </div>
                <div className="download-icon"></div>
              </div>
            </div>
          </div>
        </section>

        <section className="feature-section">
          <div className="feature-container">
            <div className="feature-text">
              <h2>Watch everywhere</h2>
              <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
            </div>
            <div className="feature-image-container">
              <img src="/placeholder.svg?height=400&width=600" alt="Devices" className="feature-image" />
            </div>
          </div>
        </section>

        <section className="feature-section reverse">
          <div className="feature-container">
            <div className="feature-text">
              <h2>Create profiles for kids</h2>
              <p>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</p>
            </div>
            <div className="feature-image-container">
              <img src="/placeholder.svg?height=400&width=600" alt="Kids profile" className="feature-image" />
            </div>
          </div>
        </section>

        <section className="faq-section">
          <div className="faq-container">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-accordion">
              {[
                {
                  question: "What is Netflix?",
                  answer: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price.",
                },
                {
                  question: "How much does Netflix cost?",
                  answer: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from $6.99 to $19.99 a month. No extra costs, no contracts.",
                },
                {
                  question: "Where can I watch?",
                  answer: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.",
                },
                {
                  question: "How do I cancel?",
                  answer: "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
                },
                {
                  question: "What can I watch on Netflix?",
                  answer: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
                },
                {
                  question: "Is Netflix good for kids?",
                  answer: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don't want kids to see.",
                },
              ].map((faq, index) => (
                <div key={index} className="faq-item">
                  <button className="faq-trigger">
                    {faq.question}
                    <span className="faq-toggle-icon">+</span>
                  </button>
                  <div className="faq-content" style={{ display: "none" }}>
                    {faq.answer}
                  </div>
                </div>
              ))}
            </div>
            <p className="cta-text">
              Ready to watch? Enter your email to create or restart your membership.
            </p>
            <div className="cta-form">
              <input
                type="email"
                placeholder="Email address"
                className="email-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="cta-button">
                Get Started
                <ChevronRight className="ml-2" />
              </button>
            </div>
          </div>
        </section>
        <NetflixFooter />
      </div>
    </IonContent>

  );
}
