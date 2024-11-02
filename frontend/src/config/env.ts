const apiUrl = import.meta.env.VITE_API_URL as string;

// Throw an error if the environment variables are not set (only for required variables)
if (!apiUrl) {
  throw new Error("VITE_API_URL env is required");
}

export const env = {
  apiUrl,
};
