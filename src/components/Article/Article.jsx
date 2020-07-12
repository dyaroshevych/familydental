import React from "react";
import PropTypes from "prop-types";

import "./Article.scss";

const Article = ({
  className,
  heading,
  subheading = null,
  additionalInfo = null,
  borderColor = "grey",
  withLine = false,
  content,
  price = null,
  img,
  reversed = false,
}) => {
  const classes = ["Article"];
  if (className) classes.push(className);

  const line = withLine ? <div className="Article_line"></div> : null;

  return (
    <article
      className={classes.join(" ")}
      data-color={borderColor}
      data-reversed={reversed}
    >
      <div>
        <h2>{heading}</h2>
        {subheading && <h3>{subheading}</h3>}
        {additionalInfo && <h4>{additionalInfo}</h4>}
        {line}
        <p>{content}</p>
        {price && <strong className="Article_price">{price}</strong>}
      </div>
      <div className="Article_imageContainer">
        {img.map((imageSrc, idx) => (
          <img
            key={idx}
            src={imageSrc}
            alt={heading}
            className="Article_image"
          />
        ))}
      </div>
    </article>
  );
};

Article.propTypes = {
  lineColor: PropTypes.oneOf(["grey", "green"]),
};

export default Article;
