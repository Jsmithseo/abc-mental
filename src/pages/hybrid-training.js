// pages/programs/hybrid-first-touch-smart-training.js
import React from "react";
import Head from "next/head";
import MainNavbar from "../components/MainNavBar";
import Footer from "../components/Footer";
import { Container } from "reactstrap";
import Link from "next/link";

export default function HybridFirstTouchSmartTraining() {
  return (
    <>
      <Head>
        <title>Hybrid First-Touch Smart Training | ABC Mental Toughness</title>
        <meta
          name="description"
          content="The comprehensive soccer development program for young athletes—based in Sonoma, CA with hybrid coaching that accelerates skill, confidence, and mental toughness."
        />
        <meta
          name="keywords"
          content="soccer training, hybrid coaching, youth soccer, first touch, ball mastery, mental toughness, Sonoma soccer training"
        />
      </Head>

      <MainNavbar />

      <Container className="py-5" style={{ backgroundColor: "#fff" }}>
        <h1
          className="text-center fw-bold mb-4"
          style={{ color: "#000", fontSize: "2.5rem" }}
        >
          Hybrid First-Touch Smart Training
        </h1>
        <p
          className="lead text-center"
          style={{ color: "#333", maxWidth: "850px", margin: "0 auto" }}
        >
          The comprehensive soccer development program for young athletes — based in
          beautiful Sonoma, Napa, and Marin California (with remote support anywhere)
        </p>

        <article
          style={{
            maxWidth: "850px",
            margin: "0 auto",
            color: "#000",
            lineHeight: "1.8",
            fontSize: "1.1rem",
          }}
        >
          <p>
            <strong>More attention. More energy. More time — directly from Coach Dennis.</strong>{" "}
            This hybrid program blends short, focused in-person sessions (or live virtual calls)
            with a powerful remote coaching system so your athlete improves every day—not just on
            practice days.
          </p>

          <h2 className="mt-5">Who It’s For</h2>
          <ul>
            <li>Players ages 8–18 who want real skill gains and game confidence</li>
            <li>Families seeking structure, feedback, and accountability</li>
            <li>Ambitious athletes who want college-prep habits early</li>
          </ul>

          <h2 className="mt-5">What You Get</h2>
          <ul>
            <li>
              <strong>3-Month Guided Curriculum:</strong> A progressive plan built around first
              touch, ball mastery, decision-making, and game IQ.
            </li>
            <li>
              <strong>Daily Structure:</strong> Clear weekly goals + at-home micro-sessions (10–20
              minutes) to build consistency.
            </li>
            <li>
              <strong>Constant Feedback:</strong> 24/7 messaging for questions, clips, and quick
              course-corrections.
            </li>
            <li>
              <strong>Video Analysis by Coach Dennis:</strong> Personalized breakdowns so athletes
              see what to fix—and how.
            </li>
            <li>
              <strong>Monthly Progress Report:</strong> Skills assessed, benchmarks updated, next
              steps mapped.
            </li>
            <li>
              <strong>Flexible Hybrid Format:</strong> In-person (Sonoma area) + remote coaching so
              training never stops.
            </li>
            <li>
              <strong>More Affordable than All In-Person:</strong> Elite coaching access without
              elite-only pricing.
            </li>
          </ul>

          <h2 className="mt-5">Athlete Outcomes</h2>
          <ul>
            <li>
              <strong>Ball Mastery:</strong> Clean first touch, tighter control in tight spaces.
            </li>
            <li>
              <strong>Accelerated Learning:</strong> Faster skill acquisition through daily
              micro-reps + immediate feedback.
            </li>
            <li>
              <strong>True Transformation:</strong> Visible improvement in confidence and
              decision-making.
            </li>
            <li>
              <strong>Mental Toughness:</strong> Focus, resilience, and play-through-pressure tools.
            </li>
            <li>
              <strong>Competitive Mindset:</strong> Habits that translate to tryouts, showcases, and
              real game moments.
            </li>
          </ul>

          <h2 className="mt-5">Why Hybrid Works</h2>
          <p>
            Most training ends when the session ends. Hybrid doesn’t. By combining short,
            high-quality sessions with daily remote coaching, athletes get the reps + feedback loop
            required for accelerated development. More touch points = faster, steadier progress.
          </p>

          <h2 className="mt-5">Program Structure (Sample Week)</h2>
          <ul>
            <li>Mon: At-home micro-session + message check-in</li>
            <li>Tue: Technique block (first touch &amp; ball protection) + video review</li>
            <li>Wed: Decision-making drill set (2v1 patterns) + clip submission</li>
            <li>Thu: Speed of play &amp; passing patterns + coach notes</li>
            <li>Fri: Finishing mechanics or position-specific work</li>
            <li>Sat/Sun: Game or scrimmage → send highlights for analysis</li>
          </ul>

          <h2 className="mt-5">Accountability That Sticks</h2>
          <p>
            Athlete-driven goals, tracked weekly. Parents receive clear, simple reports every month
            so everyone sees the growth.
          </p>

          <h2 className="mt-5">Coach</h2>
          <p>
            <strong>Coach Dennis B</strong> — Player-first, detail-driven, and obsessed with first
            touch, movement, and match IQ.  
            <br />
            <strong>Phone:</strong> 941-800-7140
          </p>

          <h2 className="mt-5">Getting Started</h2>
          <ol>
            <li>Book a quick consult call.</li>
            <li>Complete a skills baseline + receive your custom 3-month plan.</li>
            <li>Start hybrid training and see progress in Week 1.</li>
          </ol>

          <div
            className="text-center mt-4"
            style={{
              background: "#20c997",
              padding: "1.5rem",
              borderRadius: "1rem",
              color: "#000",
            }}
          >
            <h3>Ready to build real, repeatable growth?</h3>
            <p>
              Call/Text <strong>941-800-7140</strong> or message{" "}
              <strong>“FIRST TOUCH”</strong> to get the curriculum overview and openings this month.
            </p>
          </div>
        </article>
      </Container>

      <Footer />
    </>
  );
}
