import React, { useState, useEffect } from "react";

const FactsList = () => {
  const [facts, setFacts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchFacts = () => {
    setIsLoading(true);
    fetch("https://cat-fact.herokuapp.com/facts")
      .then((response) => response.json())
      .then((json) =>
        setTimeout(() => {
          setFacts(json);
          setIsLoading(false);
        }, 1000)
      );
  };

  useEffect(() => {
    fetchFacts();
  }, []);

  const deleteFact = (id) => {
    setFacts(facts.filter((f) => f._id !== id));
  };
  return isLoading ? (
    <div className="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  ) : (
    <div>
      {facts.map((fact) => (
        <div className="fact-wrap" key={fact._id}>
          <div style={{ maxWidth: "70%" }}>
            <div style={{ textAlign: "start" }}> {fact.text}</div>
            <div style={{ textAlign: "start" }}> {fact.createdAt}</div>
          </div>
          <button className="fact-btn" onClick={() => deleteFact(fact._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default FactsList;
