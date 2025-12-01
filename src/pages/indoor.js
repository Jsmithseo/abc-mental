// pages/programs/smart-first-touch-indoor.js

import React from "react";
import Head from "next/head";
import MainNavbar from "../components/MainNavBar";
import Footer from "../components/Footer";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";


export default function SmartFirstTouchIndoor() {
  const title = "Smart First Touch — Indoor Skills Training";
  const desc =
    "Indoor skills training featuring European, Asian & South American methodology. Ages 6–10 (5–6:30 pm) and 11–14 (6:30–8 pm). Tues & Thurs, Jan 8–Mar 31 — San Rafael, CA.";

  return (
    <>
      <Head>
        <title>{title} | ABC Mental Toughness</title>
        <meta name="description" content={desc} />
        <meta
          name="keywords"
          content="soccer training, first touch, indoor soccer, youth skills, San Rafael, Marin, ABC Mental Toughness"
        />
      </Head>

      <MainNavbar />

      {/* HERO */}
      <section
        style={{
          background:
            "linear-gradient(180deg, #0d0f12 0%, #0d0f12 55%, #12161b 100%)",
          color: "#fff",
          padding: "56px 0 48px",
        }}
      >
        <Container>
          <Row className="align-items-end">
            <Col lg={{ size: 10 }}>
              <h1
                className="fw-bold"
                style={{ fontSize: "2.6rem", lineHeight: 1.15, marginBottom: 8 }}
              >
                Smart First Touch — Indoor Skills Training
              </h1>
              <p style={{ opacity: 0.9, marginBottom: 6 }}>
                Featuring the latest in European, Asian &amp; South American training
                methodology.
              </p>
              <ul style={{ margin: 0, paddingLeft: "1.2rem", opacity: 0.95 }}>
                <li>
                  <strong>Dates:</strong> Tuesdays &amp; Thursdays,{" "}
                  <strong>January 8 – March 31</strong>
                </li>
                <li>
                  <strong>Location:</strong> 440 Smith Ranch Road, San Rafael, CA 94903
                </li>
                <li>
                  <strong>Cohorts & Times:</strong>
                  <ul style={{ marginTop: 6 }}>
                    <li>
                      <strong>Ages 6–10</strong>: <strong>5:00 – 6:30 pm</strong>
                    </li>
                    <li>
                      <strong>Ages 11–14</strong>: <strong>6:30 – 8:00 pm</strong>
                    </li>
                  </ul>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      {/* BODY */}
      <section style={{ background: "#fff", color: "#0f172a", padding: "40px 0 64px" }}>
        <Container style={{ maxWidth: 920 }}>
          <h2 className="mt-2" style={{ fontSize: "1.6rem", fontWeight: 800 }}>
            Program Focus
          </h2>
          <p>
            Our goal is to identify each young athlete’s <strong>technical identity</strong>,
            then nurture and cultivate it. Sessions emphasize foundational skill building and
            the most important attacking moments of the game.
          </p>

          <Row className="g-3">
            <Col md="6">
              <div
                style={{
                  border: "1px solid #e5e7eb",
                  borderRadius: 12,
                  padding: "16px 18px",
                }}
              >
                <h3 style={{ fontSize: "1.1rem", fontWeight: 800, marginBottom: 8 }}>
                  Session Themes
                </h3>
                <ul style={{ margin: 0, paddingLeft: "1.2rem", lineHeight: 1.65 }}>
                  <li>Mindset</li>
                  <li>Ignition</li>
                  <li>Deep Learning</li>
                  <li>Mastery</li>
                </ul>
              </div>
            </Col>
            <Col md="6">
              <div
                style={{
                  border: "1px solid #e5e7eb",
                  borderRadius: 12,
                  padding: "16px 18px",
                }}
              >
                <h3 style={{ fontSize: "1.1rem", fontWeight: 800, marginBottom: 8 }}>
                  What We Work On
                </h3>
                <ul style={{ margin: 0, paddingLeft: "1.2rem", lineHeight: 1.65 }}>
                  <li>Core skills development &amp; first-attacker play</li>
                  <li>Locking in elite learners’ skill sets</li>
                  <li>
                    Understanding the six pillars of CPM and gaining an advantage into
                    next season’s tryouts
                  </li>
                </ul>
              </div>
            </Col>
          </Row>

          <h2 className="mt-4" style={{ fontSize: "1.6rem", fontWeight: 800 }}>
            Why Indoor?
          </h2>
          <ul style={{ paddingLeft: "1.2rem", lineHeight: 1.75 }}>
            <li>Indoor Skills Training with <strong>No Rainouts</strong></li>
            <li>Focus, Growth, Real Learning</li>
            <li>Competitive opportunities for high-level performers</li>
          </ul>

          <blockquote
            style={{
              marginTop: 18,
              padding: "14px 18px",
              borderLeft: "4px solid #20c997",
              background: "#f8fafc",
              borderRadius: 8,
            }}
          >
            <p style={{ margin: 0 }}>
              <em>
                Players love to be challenged. The players I work with are more
                confident, have better fundamental skills, and use creativity and
                imagination to problem-solve when they play.
              </em>
            </p>
          </blockquote>

          <h2 className="mt-4" style={{ fontSize: "1.6rem", fontWeight: 800 }}>
            Tuition
          </h2>
          <Row className="g-3">
            <Col md="6">
              <div
                style={{
                  border: "1px solid #e5e7eb",
                  borderRadius: 12,
                  padding: "16px 18px",
                }}
              >
                <h4 style={{ fontSize: "1.05rem", fontWeight: 800, marginBottom: 6 }}>
                  Once per week
                </h4>
                <p style={{ margin: 0 }}><strong>$540</strong> (Jan 8 – Mar 31)</p>
              </div>
            </Col>
            <Col md="6">
              <div
                style={{
                  border: "1px solid #e5e7eb",
                  borderRadius: 12,
                  padding: "16px 18px",
                }}
              >
                <h4 style={{ fontSize: "1.05rem", fontWeight: 800, marginBottom: 6 }}>
                  Twice per week
                </h4>
                <p style={{ margin: 0 }}><strong>$850</strong> (Tuesdays &amp; Thursdays)</p>
              </div>
            </Col>
          </Row>
          <p className="mt-2" style={{ color: "#334155" }}>
            <strong>Sibling discount:</strong> 20% off the second child.
          </p>

          <h2 className="mt-4" style={{ fontSize: "1.6rem", fontWeight: 800 }}>
            Questions / Reserve a Spot
          </h2>
          <div
            className="text-center"
            style={{
              background: "#20c997",
              padding: "1.4rem",
              borderRadius: "14px",
              color: "#05261f",
            }}
          >
            <h3 style={{ marginBottom: 6 }}>Ready to build real, repeatable growth?</h3>
            <p style={{ marginBottom: 10 }}>
              Call/Text <strong>Dennis Belisle</strong> at{" "}
              <a href="tel:9418007140" style={{ textDecoration: "underline", color: "#05261f" }}>
                941-800-7140
              </a>{" "}
              or visit{" "}
              <a
                href="https://abcmentaltoughness.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "underline", color: "#05261f" }}
              >
                abcmentaltoughness.com
              </a>.
            </p>
            <Link href="/contact" className="btn btn-dark">
              Contact Us
            </Link>
          </div>
        </Container>
      </section>

      <Footer />
    </>
  );
}
