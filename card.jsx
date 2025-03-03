// Card.jsx
import React from "react";

const Card = React.memo(({ title, description, imageUrl, action }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg duration-300 ease-in-out">
      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover"
          loading="lazy"
        />
      )}
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
      {action && <div className="p-4 border-t">{action}</div>}
    </div>
  );
});

export default Card;
