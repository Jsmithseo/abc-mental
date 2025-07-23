import React from "react";
import Head from "next/head";
import MainNavBar from "../../components/MainNavBar";
import Footer from "../../components/Footer";
import { Container, Row, Col, Button } from "reactstrap";
import Link from "next/link";

export default function AwarenessBlogPost() {
  return (
    <>
      <Head>
        <title>Chapter 3: Awareness | ABC Mental Toughness</title>
        <meta
          name="description"
          content="Chapter 3 explores why awareness is crucial for young athletes. Learn how to build self-awareness, situational awareness, and social awareness for peak performance."
        />
      </Head>
      <MainNavBar />
      <Container className="mt-5">
        <Row>
          <Col md={{ size: 10, offset: 1 }}>
            <h1 className="mb-4" style={{ fontSize: "2.5rem" }}>
              Chapter 3: Awareness – The Secret to Mental Toughness
            </h1>
            <p className="fs-5">
              Awareness is absolutely vital for your success as a young athlete.
              It’s one of the pillars of sports psychology and the first step
              toward mastering your mental game. Let’s break down why awareness
              matters—and how you can build it.
            </p>

            <h2 className="mt-4" style={{ fontSize: "1.75rem" }}>
              Self-Awareness: Understanding the Inner Game
            </h2>
            <p className="fs-5">
              Elite athletes know themselves. If you’re self-aware, you can
              recognize how you react to stress, pressure, and setbacks. You
              understand how anxiety or frustration impacts your performance.
              This awareness lets you identify your strengths and areas for
              improvement without ego or emotion.
            </p>
            <p className="fs-5">
              <em>
                For example: A player who notices they panic when receiving a
                pass can start working on composure, controlling their thoughts
                and movements, and staying locked in the present. The most
                self-aware athletes don’t get rattled by mistakes or the
                scoreboard—they reset, refocus, and keep competing.
              </em>
            </p>

            <h2 className="mt-4" style={{ fontSize: "1.75rem" }}>
              Situational Awareness: Reading the Game
            </h2>
            <p className="fs-5">
              It’s not just about knowing yourself—it’s about reading the game.
              A mentally tough athlete is aware of their own positioning, their
              teammates, and the opposition. They pick up on momentum shifts,
              opponents’ tells, and subtle tactical clues.
            </p>
            <ul className="fs-5">
              <li>See the play before it happens</li>
              <li>React faster and smarter</li>
              <li>Slow the game down in high-pressure moments</li>
            </ul>
            <p className="fs-5">
              The more aware you are, the more you can stay present. That’s
              where the magic happens.
            </p>

            <h2 className="mt-4" style={{ fontSize: "1.75rem" }}>
              Social Awareness: Being a Great Teammate
            </h2>
            <p className="fs-5">
              Athletes who are socially aware can sense team dynamics, read the
              energy of a room, and adapt to feedback—without getting defensive.
              You understand how your behavior affects others, and you look for
              ways to lift up your teammates. When you can support a teammate
              after a miss, or take coaching without ego, you’re showing real
              mental strength.
            </p>
            <ul className="fs-5">
              <li>Adapt to your team environment</li>
              <li>Communicate effectively</li>
              <li>Grow faster by embracing feedback</li>
            </ul>

            <h2 className="mt-4" style={{ fontSize: "1.75rem" }}>
              Why Awareness Matters
            </h2>
            <p className="fs-5">
              Awareness is the path to growth. Without it, you’ll repeat the
              same patterns and struggle to break bad habits. With it, you can
              learn, adapt, and improve at lightning speed. It’s the bridge from
              experience to wisdom.
            </p>
            <p className="fs-5">
              <strong>
                Most importantly, awareness is the key to entering your flow
                state—where everything feels effortless and your skills are at
                their best.
              </strong>
            </p>

            <h2 className="mt-4" style={{ fontSize: "1.75rem" }}>
              3 Practical Ways to Build Awareness
            </h2>

            <h3 className="mt-3" style={{ fontSize: "1.25rem" }}>
              1. Reflective Journaling
            </h3>
            <p className="fs-5">
              After practices and games, take five minutes to write down:
            </p>
            <ul className="fs-5">
              <li>2 or 3 things you did well (no matter how small)</li>
              <li>What you learned</li>
              <li>One thing you want to improve next time</li>
            </ul>
            <p className="fs-5">
              This process helps you focus on growth and positivity.
            </p>

            <h3 className="mt-3" style={{ fontSize: "1.25rem" }}>
              2. Mindfulness
            </h3>
            <p className="fs-5">
              Try a simple meditation: Find a quiet place, sit comfortably, and
              focus on your breathing for 5–10 minutes. Let thoughts drift away,
              always coming back to your breath. Or use a silent mantra
              (“Mmmmm...”) to clear your mind. Do this daily, and you’ll see
              your awareness (and your game) improve.
            </p>

            <h3 className="mt-3" style={{ fontSize: "1.25rem" }}>
              3. Pre-Training and Pre-Game Routine
            </h3>
            <ol className="fs-5">
              <li>
                <strong>Box Breathing:</strong> 4 in, 4 hold, 4 out, 4 hold (2–4
                cycles)
              </li>
              <li>
                <strong>Anchor to Now:</strong> Name 3 things you see, 2 things
                you feel, 1 thing you hear
              </li>
              <li>
                <strong>Mental Rehearsal:</strong> Visualize your success—first
                touch, positioning, body language
              </li>
              <li>
                <strong>Identity Statement:</strong> Choose a statement (“I’m
                calm. I’m ready.”) and say it out loud
              </li>
              <li>
                <strong>Channel the Nerves:</strong> Power breaths, controlled
                aggression, turn nerves into fuel
              </li>
            </ol>
            <p className="fs-5">
              This isn’t magic, but when you stick with it, your focus and
              confidence will soar.
            </p>

            <h2 className="mt-4" style={{ fontSize: "1.75rem" }}>
              Bottom Line
            </h2>
            <p className="fs-5">
              Awareness is the ultimate tool for young athletes looking to level
              up. Without it, you’ll get stuck in the same old patterns. With
              it, you unlock faster growth, bigger confidence, and consistent
              peak performance.
            </p>
            <p className="fs-5 fw-bold text-primary">
              Now is your time to master awareness, build mental toughness, and
              take your game to the next level.
            </p>

            <div className="text-center my-5">
              <Link href="/contact" passHref legacyBehavior>
                <Button color="primary" size="lg">
                  Contact Us to Learn More
                </Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
