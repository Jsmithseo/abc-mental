// pages/blog/offseason-skills-building.js
import React from "react";
import Head from "next/head";
import MainNavBar from "../../components/MainNavBar";
import Footer from "../../components/Footer";
import { Container, Row, Col, Button } from "reactstrap";
import Link from "next/link";

export default function OffseasonSkillsBuildingPost() {
  return (
    <>
      <Head>
        <title>
          Offseason Skills Building: A Simple Plan That Actually Works | ABC Mental Toughness
        </title>
        <meta
          name="description"
          content="Use the offseason to build durable skills—technical touch, decision speed, and body/mind capacity—without burnout. A practical weekly plan, micro-drills, and checklists for coaches, parents, and players."
        />
      </Head>

      <MainNavBar />

      <Container className="mt-5">
        <Row>
          <Col md={{ size: 10, offset: 1 }}>
            <h1 className="mb-4" style={{ fontSize: "2.5rem" }}>
              Offseason Skills Building
              <span
                style={{
                  display: "block",
                  fontSize: "1.25rem",
                  opacity: 0.9,
                  marginTop: "0.35rem",
                }}
              >
                A Simple Plan That Actually Works
              </span>
            </h1>

            <p className="fs-5">
              The offseason isn’t a vacation; it’s a <strong>pressure-free lab</strong> to build the
              three drivers of performance: <strong>technique</strong>, <strong>decision speed</strong>, and{" "}
              <strong>body/mind capacity</strong>. Here’s a clear, low-friction plan you can run at
              home or with a small group—and come back next season sharper without burning out.
            </p>

            {/* 1 */}
            <h2 className="mt-4" style={{ fontSize: "1.75rem" }}>
              1) What Matters Most in the Offseason
            </h2>

            <h3 className="mt-3" style={{ fontSize: "1.25rem" }}>
              The Big Three
            </h3>
            <ul className="fs-5">
              <li>
                <strong>Technique:</strong> clean mechanics that hold under speed and pressure
                (first touch, ball control, striking, footwork fundamentals).
              </li>
              <li>
                <strong>Decision Speed:</strong> scanning, simple reads, and 1-step intentions so
                play feels slow—even when it’s fast.
              </li>
              <li>
                <strong>Capacity:</strong> resilient body and calm nervous system—mobility, strength
                basics, breath control, and consistent sleep.
              </li>
            </ul>

            <p className="fs-5">
              Offseason wins are boring by design. Keep sessions short, focused, and repeatable.
              The goal is <em>consistency over intensity</em>.
            </p>

            {/* 2 */}
            <h2 className="mt-4" style={{ fontSize: "1.75rem" }}>
              2) Weekly Template (45–60 minutes, 3x/week)
            </h2>

            <ul className="fs-5">
              <li>
                <strong>Warm-Up (8–10 min):</strong> mobility + activation (hips, ankles, T-spine),
                light footwork, and 1–2 long exhales (4 in / 6 out).
              </li>
              <li>
                <strong>Technique Block (15–20 min):</strong> one narrow skill (first touch to space,
                wall passes, striking form, footwork ladders).
              </li>
              <li>
                <strong>Decision Block (12–15 min):</strong> scanning tasks, color/number calls,
                1-touch rules, or tight rondos.
              </li>
              <li>
                <strong>Capacity Finisher (8–10 min):</strong> strength circuits (push, hinge, squat,
                carry) and 2 calming breaths to close.
              </li>
            </ul>

            <h4 className="mt-3" style={{ fontSize: "1.1rem" }}>
              Micro-drill (5–7 min): <em>Color Scan First Touch</em>
            </h4>
            <p className="fs-5">
              Place 3 cones (red/blue/yellow). Partner calls a color as the ball travels.
              Player must <em>scan</em>, receive, and take the first touch toward that cone within
              2 seconds. Progress: add a passive defender; then require a pass after the touch.
            </p>

            {/* 3 */}
            <h2 className="mt-4" style={{ fontSize: "1.75rem" }}>
              3) Home Solo Plan (No Partner Needed)
            </h2>

            <ul className="fs-5">
              <li>
                <strong>Wall Circuit (12 min):</strong> 1-touch inside, 2-touch open, outside foot,
                thigh-to-foot, alternating feet. 30–45 sec on / 15 sec off.
              </li>
              <li>
                <strong>Footwork Ladder (8 min):</strong> in-in-out-out, icky shuffle, hop &amp; stick,
                lateral quicks. Focus on quiet upper body and soft landings.
              </li>
              <li>
                <strong>Strength Mini (8–10 min):</strong> 3 rounds—10 squats, 8 hip hinges
                (dowels/backpack weight), 20-sec side planks each side, 30-sec carry.
              </li>
              <li>
                <strong>Calm Down (2 min):</strong> 2 long exhales (4 in / 6–8 out), then write one
                line in a notebook: <em>“Today I improved…”</em>
              </li>
            </ul>

            <h4 className="mt-3" style={{ fontSize: "1.1rem" }}>
              Micro-drill (5 min): <em>Two-Touch Windows</em>
            </h4>
            <p className="fs-5">
              Chalk or tape 3 “windows” on a wall. Pass into window A, receive across your body,
              pass into window B, repeat to C. Keep knees flexed, eyes up between touches.
            </p>

            {/* 4 */}
            <h2 className="mt-4" style={{ fontSize: "1.75rem" }}>
              4) Decision &amp; Vision: Make the Game Slow
            </h2>

            <p className="fs-5">
              We don’t just want faster feet—we want faster <em>reads</em>. Train the eyes and
              breathing so the brain stays clear under speed.
            </p>

            <h3 className="mt-3" style={{ fontSize: "1.25rem" }}>
              What to train
            </h3>
            <ul className="fs-5">
              <li>
                <strong>Scan rule:</strong> 1 look before the ball arrives; 1 look as it travels.
              </li>
              <li>
                <strong>Intent rule:</strong> 1 intention per touch—<em>protect</em>, <em>progress</em>,
                or <em>punish</em>.
              </li>
              <li>
                <strong>Breath rule:</strong> one longer exhale anytime arousal spikes (“fast heart,
                slow breath”).
              </li>
            </ul>

            <h4 className="mt-3" style={{ fontSize: "1.1rem" }}>
              Micro-drill (6 min): <em>Call &amp; Go</em>
            </h4>
            <p className="fs-5">
              Coach holds color cards. Player must call the card color <em>before</em> first touch, then
              play one-touch toward that direction. Progress: add a live closeout.
            </p>

            {/* 5 */}
            <h2 className="mt-4" style={{ fontSize: "1.75rem" }}>
              5) Body &amp; Mind Capacity (Stay Durable)
            </h2>

            <ul className="fs-5">
              <li>
                <strong>Mobility x Strength:</strong> two “big rocks” per week (hips/ankles + hinge/squat).
              </li>
              <li>
                <strong>Sleep anchors:</strong> ~9–10 hours for youth; same sleep/wake window daily.
              </li>
              <li>
                <strong>Fuel &amp; hydrate:</strong> protein at meals; water before/during/after sessions.
              </li>
              <li>
                <strong>Downshift:</strong> 2-minute breath practice after hard efforts.
              </li>
            </ul>

            {/* Coach & Parent Playbook */}
            <h2 className="mt-4" style={{ fontSize: "1.75rem" }}>
              Coach &amp; Parent Playbook
            </h2>

            <h3 className="mt-3" style={{ fontSize: "1.25rem" }}>
              For coaches
            </h3>
            <ul className="fs-5">
              <li>Open with a 2-minute “focus brief” (what we’re seeing/doing today).</li>
              <li>Score sessions on <em>decisions</em> (scan, choice, execution), not just goals.</li>
              <li>Mix constraints: smaller spaces, time limits, and color calls for reads.</li>
            </ul>

            <h3 className="mt-3" style={{ fontSize: "1.25rem" }}>
              For parents
            </h3>
            <ul className="fs-5">
              <li>Keep it fun and short—praise effort, scanning, and first touch.</li>
              <li>Post-session: “What did you notice? What worked? What one thing next time?”</li>
              <li>Protect sleep and food; under-recovered brains make slower decisions.</li>
            </ul>

            <h3 className="mt-3" style={{ fontSize: "1.25rem" }}>
              For players
            </h3>
            <ul className="fs-5">
              <li>One scan before the ball; one clear intention per touch.</li>
              <li>One notebook line after each session (“Today I improved…”).</li>
              <li>Two long exhales when nerves spike, then play.</li>
            </ul>

            {/* Checklist */}
            <h2 id="checklist" className="mt-4" style={{ fontSize: "1.75rem" }}>
              Quick Offseason Checklist (print this)
            </h2>
            <ul className="fs-5">
              <li>☐ 3 short sessions per week (45–60 min)</li>
              <li>☐ One narrow technique focus each session</li>
              <li>☐ One decision/scan constraint each session</li>
              <li>☐ One capacity finisher (strength or breath)</li>
              <li>☐ Log one honest line in the notebook</li>
            </ul>

            {/* Bottom Line */}
            <h2 className="mt-4" style={{ fontSize: "1.75rem" }}>
              Bottom Line
            </h2>
            <p className="fs-5">
              Offseason gains come from <strong>boring consistency</strong>—clean reps, simple reads,
              and a calm body. Train the Big Three (technique, decision speed, capacity) and you’ll
              return to season with more confidence, cleaner mechanics, and better choices under
              pressure.
            </p>

            <div className="text-center my-5">
              <Link href="/contact" passHref legacyBehavior>
                <Button color="primary" size="lg">
                  Book a Free Parent Consult
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
