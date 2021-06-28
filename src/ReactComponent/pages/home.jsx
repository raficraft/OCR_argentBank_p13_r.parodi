import HomeHero from "../components/homeHero";
import Features from "../components/features";

const Home = () => {
  const stickerInfo = [
    {
      img: "./img/icon-chat.png",
      alt: "chat icon",
      title: "Your are our #1 priority",
      text: "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
    },
    {
      img: "./img/icon-money.png",
      alt: "money icon",
      title: "More savings means higher rates",
      text: "The more you save with us, the higher your interest rate will be!",
    },
    {
      img: "./img/icon-security.png",
      alt: "security icon",
      title: "Security you can trust",
      text: "We use top of the line encryption to make sure your data and money is always safe.",
    },
  ];

  return (
    <main>
      <HomeHero />
      <section class="features">
        {stickerInfo.map((item, key) => (
          <Features
            key={key}
            img={item.img}
            alt={item.alt}
            title={item.title}
            text={item.text}
          />
        ))}
      </section>
    </main>
  );
};

export default Home;
