import axios from "axios";

export const fetchRandomGreeting = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("/api/v1/random_greeting");
      const greeting = response.data.greeting;
      dispatch({ type: "FETCH_RANDOM_GREETING_SUCCESS", payload: greeting });
    } catch (error) {
      console.error("Error fetching random greeting:", error);
    }
  };
};
