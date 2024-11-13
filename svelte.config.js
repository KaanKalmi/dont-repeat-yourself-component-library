// svelte.config.js
import adapter from '@sveltejs/adapter-static';

export default {
  kit: {
    adapter: adapter(),
    prerender: {
      handleHttpError: ({ path, referrer, message }) => {
        // Suppress the error for the specific path
        if (path === '/static-web/the-client') {
          console.warn(`Error suppressed for path: ${path}`);
          return;
        }

        // Log the error details for debugging
        console.error(`Error occurred while prerendering ${path} (linked from ${referrer}): ${message}`);

        // Check if the URL is valid
        try {
          new URL(path);
        } catch (err) {
          console.error(`Invalid URL: ${path}`);
          return;
        }
      }
    }
  }
};