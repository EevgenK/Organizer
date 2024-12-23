import s from "./MainTitle.module.css";

const MainTitle = ({ text }) => {
  const renderWords = (str) => {
    if (!str.includes(" ")) return str;
    const words = str
      .split(" ")
      .map((word, idx) =>
        idx % 2 !== 0 ? <span key={idx}> {word} </span> : word
      );

    return words;
  };

  return <h1 className={s.title}>{renderWords(text)}</h1>;
};

export default MainTitle;
