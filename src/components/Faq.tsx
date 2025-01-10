const faqData = [
  {
    id: 1,
    question: "Where do you practice?",
    answer:
      "Our practices are held on the 8th floor of the Payne Whitney Gymnasium (PWG).",
  },
  {
    id: 2,
    question: "How can I join the club?",
    answer:
      "We host tryouts at the beginning of each semester. Check our Instagram @yalebadminton for updates!",
  },
  {
    id: 3,
    question: "What tournaments do you participate in?",
    answer:
      "We participate in the Eastern Collegiate Team Badminton Championships.",
  },
  {
    id: 4,
    question: "What equipment do I need for tryouts? ",
    answer:
      "Bring a racket, sneakers or badminton shoes, and water (stay hydrated!!). We provide shuttlecocks. If you don't have your own racket, our members are usually kind enough to lend their own. If you have a member's racket, please remember to treat it with care and respect as they can cost anywhere from $120-$220 😩 💸. ",
  },
  {
    id: 5,
    question: "When are you going to post another popping instagram reel?",
    answer: "Soon...very soon 😏 stay tuned",
  },
];

export function Faq() {
  return (
    <section className="faq-container">
      <div className="faq-header">
        <h2>Frequently Asked Questions</h2>
        <p>
          Can’t find the answer you’re looking for? Reach out to us on{" "}
          <a href="https://www.instagram.com/yalebadminton/" target="__blank">
            Instagram
          </a>{" "}
          or send us an email!
        </p>
      </div>
      <div className="faq-list">
        {faqData.map((item) => (
          <div
            key={item.id}
            className="faq-item"
            data-aos="fade-up"
            data-aos-delay={`${item.id * 100}`}
          >
            <h3 className="faq-question">{item.question}</h3>
            <p className="faq-answer">{item.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
