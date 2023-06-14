import React, { useEffect, useState } from "react";
import axios from "axios";

const Greeting = () => {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const fetchRandomGreeting = async () => {
      try {
        const response = await axios.get("/api/v1/random_greeting");
        const greeting = response.data.greeting;
        setGreeting(greeting);
      } catch (error) {
        console.error("Error fetching random greeting:", error);
      }
    };

    fetchRandomGreeting();
  }, []);

  return (
    <div>
      <h1>Random Greeting:</h1>
      <p>{greeting}</p>
    </div>
  );
};

export default Greeting;
