import axios from "axios";

// Load ZeroBounce API key from environment variables (set in .env file)
const ZEROBOUNCE_API_KEY = process.env.ZEROBOUNCE_API_KEY;

// Validate email address using ZeroBounce API with a fallback for missing key or API failure
export const validateEmail = async (email: string): Promise<boolean> => {
  // If API key is missing, fallback to basic regex validation
  if (!ZEROBOUNCE_API_KEY) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  try {
    const response = await axios.get(
      `https://api.zerobounce.net/v2/validate?api_key=${ZEROBOUNCE_API_KEY}&email=${email}`
    );

    // Status can be: valid, invalid, catch-all, unknown, spamtrap, abuse, do_not_mail
    // We treat "valid", "catch-all", and "unknown" as acceptable to be safe.
    const acceptableStatuses = ["valid", "catch-all", "unknown"];
    return acceptableStatuses.includes(response.data.status);
  } catch (error) {
    console.error("Email validation failed, falling back to basic validation:", error);
    // Fallback to basic regex if API is down or unauthorized
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
};
