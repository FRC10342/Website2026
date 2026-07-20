// Build script to inject Speed Insights
import { injectSpeedInsights } from '@vercel/speed-insights';

// This file is used during build to ensure Speed Insights is available
// For static sites, the actual injection happens via the script tag in HTML
console.log('Speed Insights configuration ready');

// The injectSpeedInsights function will be called at runtime from the browser
if (typeof window !== 'undefined') {
  injectSpeedInsights();
}
