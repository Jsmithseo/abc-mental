import React from "react";
import Head from "next/head";
import MainNavbar from "../components/MainNavBar";
import Footer from "../components/Footer";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button,
} from "reactstrap";

const posts = [
  {
    id: 1,
    title:
      "The top 10 negative self - talk barriers leading to performance plateaus and how to overcome them.",
    excerpt:
      "Discover techniques for building mental resilience and reframing negative thoughts in competitive environments.",
    slug: "/blog/blog1",
  },
  {
    id: 2,
    title:
      "The #1 Thing Holding Back Youth Soccer Players (And It's Not What You Think)",
    excerpt:
      "Learn why awareness—not more training—is the key to unlocking your young athlete’s full potential on the field.",
    slug: "/blog/blog2",
  },
  {
    id: 3,
    title: "Stress, Emotions, and Coping in Youth Sports",
    excerpt:
      "Explore how mental stress impacts young athletes and why emotional regulation and coping strategies are essential for youth sports success.",
    slug: "/blog/blog3",
  },
  {
    id: 4,
    title: "Grit Mindset: Prioritizing Process, Strength, and Achievement",
    excerpt:
      "Most people chase the trophy without truly embracing the grind—yet real growth happens when you prioritize daily effort over instant success.",
    slug: "/blog/blog4",
  },
  {
    id: 5,
    title: " Chapter 1: The Fearless Young Athlete",
    excerpt:
      "A fearless young athlete learns to surrender emotions, embrace self-reflection, and let go of fear. Use these hands-on assignments to build confidence, overcome mental barriers, and thrive both on and off the field.",
    slug: "/blog/blog5",
  },
  {
    id: 6,
    title: "Chapter 2: The Fearless Young Athlete",
    excerpt:
      "Fear isn’t the enemy—inactivity is. In this chapter, young athletes learn to understand, manage, and transform fear into fuel. Includes a powerful personal story and a guided journaling assignment to help athletes reconnect with their WHY.",
    slug: "/blog/blog6",
  },
  {
    id: 7,
    title: "Tips for Tryouts: How to Stand Out and Make the Team",
    excerpt:
      "Have you ever been in a situation where you desperately wanted to make a team, but you had to go through a grueling tryout period? In the tryout, you are accompanied by 40 or 50 players with the exact same goal.",
    slug: "/blog/blog7",
  },
  {
    id: 8,
    title: "R.A.C.E. Formula for Mental Toughness",
    excerpt:
      "Discover the R.A.C.E. Formula — a proven method for building mental toughness in athletes and performers. Learn how to overcome mental blocks, silence negative thoughts, and unlock your ideal performance state.",
    slug: "/blog/blog8",
  },
  {
    id: 9,
    title: "Chapter 3: Awareness | The Secret to Mental Toughness",
    excerpt:
      "Awareness is absolutely vital for your success as a young athlete. Its one of the pillars of sports psychology and the first step toward mastering your mental game. Lets break down why awareness matters—and how you can build it.",
    slug: "/blog/blog9",
  },
  {
    id: 10,
    title: "Top 5 Mistakes Sports Parents Make (And What To Do Instead",
    excerpt:
      "Most parents want to help, but good intentions can stall progress. This post breaks down the five most common mistakes—activity vs. progress, talent talk, skill vs. performance, interference, and state plans—and gives simple routines to fix each one. Build consistency under pressure without adding more chaos.",
    slug: "/blog/blog10",
  },
  {
    id: 11,
    title: "Three Reasons Kids Struggle in Youth Sports",
    excerpt:
      "Most youth-sports setbacks aren’t about talent—they’re about attention, emotion, and load. Here are three patterns and simple fixes coaches, parents, and players can use.",
    slug: "/blog/blog11",
  },
  {
    id: 12,
    title: "Offseason Skills Building: A Simple Plan That Actually Works",
    excerpt:
      "Use the offseason to build durable skills—technical touch, decision speed, and body/mind capacity—without burnout. A practical weekly plan, micro-drills, and checklists for coaches, parents, and players.",
    slug: "/blog/blog12",
  },
];

export default function BlogPage() {
  // Reverse by id so newest (highest id) appears first
  const postsDesc = [...posts].sort((a, b) => b.id - a.id);

  return (
    <>
      <Head>
        <title>Blog | ABC Mental Toughness</title>
      </Head>
      <MainNavbar />
      <Container className="py-5">
        <h1 className="text-center mb-4">ABC Mental Toughness Blog</h1>
        <Row>
          {postsDesc.map((post) => (
            <Col md="4" className="mb-4" key={post.id}>
              <Card className="h-100 shadow-sm">
                <CardBody>
                  <CardTitle tag="h5">{post.title}</CardTitle>
                  <CardText>{post.excerpt}</CardText>
                  <Button color="primary" href={post.slug}>
                    Read More
                  </Button>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* (Optional) remove excessive <br/>s; layout handled by spacing utilities */}
      <Footer />
    </>
  );
}
