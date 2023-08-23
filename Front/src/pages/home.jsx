import React from "react";
import Card from "../components/card";
import Chat from "../assets/icon-chat.png";
import Money from "../assets/icon-money.png";
import Security from "../assets/icon-security.png";
import Banner from "../components/banner";

const Home = () => {
  const cardsData = [
    {
      title: "You are our #1 priority",
      content: `Need to talk to a representative? You can get in touch through our
        24/7 chat or through a phone call in less than 5 minutes.`,
      image: Chat,
    },
    {
      title: "More savings means higher rates",
      content: `The more you save with us, the higher your interest rate will be!`,
      image: Money,
    },
    {
      title: "Security you can trust",
      content: `We use top of the line encryption to make sure your data and money
        is always safe.`,
      image: Security,
    },
  ];
  return (
    <main>
      <Banner />
      <section className="features">
        {cardsData.map(({ title, content, image }) => (
          <Card key={title} title={title} content={content} image={image} />
        ))}
      </section>
    </main>
  );
};

export default Home;
