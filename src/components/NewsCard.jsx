import "../styles/NewsCard.css";

import { motion } from "framer-motion";

function NewsCard(props) {
  return (
    <motion.div
      className="news-card"
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <img
        src={
          props.image ||
          "https://images.unsplash.com/photo-1541888946425-d81bb19240f5"
        }
        alt={props.title}
      />

      <div className="news-content">
        <div className="news-meta">
          <span>{props.source}</span>

          <span>
            {new Date(
              props.date
            ).toLocaleDateString()}
          </span>
        </div>

        <h2>{props.title}</h2>

        <p>{props.description}</p>

        <a
          href={props.url}
          target="_blank"
          rel="noreferrer"
        >
          <button>Read More</button>
        </a>
      </div>
    </motion.div>
  );
}

export default NewsCard;