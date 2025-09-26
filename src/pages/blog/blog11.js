// pages/blog/blog-youth-sports-struggles.js
import React from "react";
import Head from "next/head";
import MainNavBar from "../../components/MainNavBar";
import Footer from "../../components/Footer";
import { Container, Row, Col, Button } from "reactstrap";
import Link from "next/link";

export default function YouthSportsStrugglesPost() {
  return (
    <>
      <Head>
        <title>
          Three Reasons Kids Struggle in Youth Sports | ABC Mental Toughness
        </title>
        <meta
          name="description"
          content="Most youth-sports setbacks aren’t about talent—they’re about attention, emotion, and load. Here are three patterns and simple fixes coaches, parents, and players can use."
        />
      </Head>

      <MainNavBar />

      <Container className="mt-5">
        <Row>
          <Col md={{ size: 10, offset: 1 }}>
            <h1 className="mb-4" style={{ fontSize: "2.5rem" }}>
              Three Reasons Kids Struggle in Youth Sports
              <span
                style={{
                  display: "block",
                  fontSize: "1.25rem",
                  opacity: 0.9,
                  marginTop: "0.35rem",
                }}
              >
                (and How to Fix Each One)
              </span>
            </h1>

            <p className="fs-5">
              Most youth-sports “failures” aren’t about talent. They’re about{" "}
              <strong>attention</strong>, <strong>emotion</strong>, and{" "}
              <strong>load</strong>. Here are three patterns we see over and
              over—and simple ways coaches, parents, and players can turn them
              around.
            </p>

            {/* 1 */}
            <h2 className="mt-4" style={{ fontSize: "1.75rem" }}>
              1) Fooled by What They See
            </h2>

            <p className="fs-5">
              <strong>The problem:</strong> Kids (and adults) overreact to what’s
              most visible—scoreboards, highlight reels, the biggest kid on the
              field. They confuse <em>visibility</em> with <em>reality</em> and
              abandon good habits for quick fixes.
            </p>

            <h3 className="mt-3" style={{ fontSize: "1.25rem" }}>
              How it shows up
            </h3>
            <ul className="fs-5">
              <li>Chasing the ball instead of playing shape/spacing</li>
              <li>Forcing hero plays after an opponent’s big moment</li>
              <li>Comparing themselves to a star and shutting down</li>
            </ul>

            <h3 className="mt-3" style={{ fontSize: "1.25rem" }}>
              What to teach
            </h3>
            <ul className="fs-5">
              <li>
                <strong>Zoom-out rule:</strong> After any big play (yours or
                theirs), take one breath and ask: <em>What’s our job in this
                moment?</em> (e.g., “Recover shape,” “Find the outlet,” “Next
                best pass.”)
              </li>
              <li>
                <strong>Process scoreboard:</strong> Track controllables during
                games—first touch, decisions in 2 seconds, defensive shape—so
                kids see the <em>right</em> things.
              </li>
              <li>
                <strong>Clip the quiet wins:</strong> In film or post-game
                review, highlight off-ball positioning, communication, and
                recovery runs. Make the invisible visible.
              </li>
            </ul>

            <h4 className="mt-3" style={{ fontSize: "1.1rem" }}>
              Micro-drill (5 min): <em>Shadow Shape</em>
            </h4>
            <p className="fs-5">
              6–8 players walk through team shape without a ball while a coach
              calls “press,” “switch,” “drop.” Goal: respond within 2 seconds,
              eyes up, body organized. Add a ball later.
            </p>

            {/* 2 */}
            <h2 className="mt-4" style={{ fontSize: "1.75rem" }}>
              2) Is That Panic?
            </h2>

            <p className="fs-5">
              <strong>The problem:</strong> A surging heart rate + chaos =
              rushed decisions. Kids mislabel arousal (“I’m excited”) as panic
              (“I’m choking”), then their thinking collapses.
            </p>

            <h3 className="mt-3" style={{ fontSize: "1.25rem" }}>
              How it shows up
            </h3>
            <ul className="fs-5">
              <li>Heavy first touch under pressure</li>
              <li>“Hot-potato” passes and turnovers</li>
              <li>Freezes on set pieces or open chances</li>
            </ul>

            <h3 className="mt-3" style={{ fontSize: "1.25rem" }}>
              What to teach
            </h3>
            <ul className="fs-5">
              <li>
                <strong>Name it, tame it:</strong> “Fast heart, slow breath.”
                Exhale longer than you inhale (4 in, 6 out) once or twice,{" "}
                then receive.
              </li>
              <li>
                <strong>Two-step reset:</strong> <em>Spot → Breath → Play.</em>{" "}
                Identify the next pass or space while you breathe—don’t go
                blank.
              </li>
              <li>
                <strong>Pressure rehearsal:</strong> Practice with noise,
                countdowns, and mild chaos so game arousal feels familiar, not
                frightening.
              </li>
            </ul>

            <h4 className="mt-3" style={{ fontSize: "1.1rem" }}>
              Micro-drill (5 min): <em>Countdown Receiving</em>
            </h4>
            <p className="fs-5">
              Partner serves a ball as a coach counts down from 3. Player must
              settle and complete a pass before “0.” Start slow, add a live
              defender, then layer a required scan (“call the color cone before
              your touch”).
            </p>

            {/* 3 */}
            <h2 className="mt-4" style={{ fontSize: "1.75rem" }}>
              3) They’re Trying to Do Too Much
            </h2>

            <p className="fs-5">
              <strong>The problem:</strong> Overload kills execution. Kids stack
              five goals into one moment—score, impress coach, beat three
              defenders—and mechanics fall apart.
            </p>

            <h3 className="mt-3" style={{ fontSize: "1.25rem" }}>
              How it shows up
            </h3>
            <ul className="fs-5">
              <li>Dribbling into traffic instead of taking the simple lane</li>
              <li>
                Over-coaching themselves mid-play (“elbow, plant, hips, touch…”)
              </li>
              <li>Energy crashes by halftime</li>
            </ul>

            <h3 className="mt-3" style={{ fontSize: "1.25rem" }}>
              What to teach
            </h3>
            <ul className="fs-5">
              <li>
                <strong>Rule of One:</strong> One clear intention per touch or
                phase—<em>protect</em>, <em>progress</em>, or <em>punish</em>.
                (Keep it, move it, or finish.)
              </li>
              <li>
                <strong>Chunk the game:</strong> 5-minute blocks with one focus
                (e.g., “first touch forward,” “quick outlets,” “protect the
                middle”). Reset at each block.
              </li>
              <li>
                <strong>Energy budget:</strong> Normalize smart off-ball rest
                (jog, scan, breathe) instead of sprint-sprint-sprint.
              </li>
            </ul>

            <h4 className="mt-3" style={{ fontSize: "1.1rem" }}>
              Micro-drill (5–7 min): <em>Three-Gate Possession</em>
            </h4>
            <p className="fs-5">
              4v2 in a grid with three small gates. Team must pass through{" "}
              <em>one</em> gate to score. After a score, they immediately call
              the next single focus (“protect” = shield + support triangles).
              Forces clarity and reduces “do-everything” chaos.
            </p>

            {/* Coach & Parent Playbook */}
            <h2 className="mt-4" style={{ fontSize: "1.75rem" }}>
              Coach &amp; Parent Playbook
            </h2>

            <h3 className="mt-3" style={{ fontSize: "1.25rem" }}>
              For coaches
            </h3>
            <ul className="fs-5">
              <li>
                Start sessions with a 2-minute “focus brief”: What are we
                seeing/feeling/doing today?
              </li>
              <li>Score training on decisions as much as outcomes.</li>
              <li>Bake pressure: noise, countdowns, small fields, quick restarts.</li>
            </ul>

            <h3 className="mt-3" style={{ fontSize: "1.25rem" }}>
              For parents
            </h3>
            <ul className="fs-5">
              <li>
                Post-game: ask three process questions—“What did you notice?
                What worked? What’s one thing you’ll try next time?”
              </li>
              <li>
                Praise behaviors (effort, scanning, recovery run), not just
                stats.
              </li>
              <li>
                Protect sleep, food, hydration. Under-recovered brains = more
                panic, worse decisions.
              </li>
            </ul>

            <h3 className="mt-3" style={{ fontSize: "1.25rem" }}>
              For players
            </h3>
            <ul className="fs-5">
              <li>One breath before restarts.</li>
              <li>One intention per touch.</li>
              <li>One honest debrief after games/practice.</li>
            </ul>

            {/* Checklist */}
            <h2 id="checklist" className="mt-4" style={{ fontSize: "1.75rem" }}>
              Quick Checklist (print this)
            </h2>
            <ul className="fs-5">
              <li>
                ☐ Did we make the invisible visible? (shape, scanning, support)
              </li>
              <li>
                ☐ Did we practice arousal control? (long exhale, two-step reset)
              </li>
              <li>
                ☐ Did we simplify? (Rule of One: protect/progress/punish)
              </li>
              <li>☐ Did we chunk time and reset every 5 minutes?</li>
              <li>
                ☐ Did coaches/parents reinforce process over hype?
              </li>
            </ul>

            {/* Bottom Line */}
            <h2 className="mt-4" style={{ fontSize: "1.75rem" }}>
              Bottom Line
            </h2>
            <p className="fs-5">
              Kids don’t fail because they’re not “talented.” They struggle when
              vision gets hijacked (fooled by what they see), when arousal gets
              mislabeled (panic), and when intention gets overloaded (trying to
              do too much). Train vision, calm the body, simplify the job—and
              watch performance climb.
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
