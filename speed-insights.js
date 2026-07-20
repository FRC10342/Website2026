// Speed Insights initialization for static HTML site
// This script loads and initializes Vercel Speed Insights

(function() {
  'use strict';
  
  // Speed Insights injection script
  // This uses the Vercel-hosted script which is automatically configured
  // when Speed Insights is enabled in the Vercel Dashboard
  
  window.si = window.si || function () { 
    (window.siq = window.siq || []).push(arguments); 
  };
  
  // The actual script URL will be provided by Vercel after enabling Speed Insights
  // in the dashboard. The URL follows the pattern: /_vercel/speed-insights/script.js
  // This is automatically injected by Vercel for deployed sites.
  
  // For manual integration, you can also use the npm package approach:
  // import { injectSpeedInsights } from '@vercel/speed-insights';
  // injectSpeedInsights();
  
  // Load the Speed Insights script
  var script = document.createElement('script');
  script.src = '/_vercel/speed-insights/script.js';
  script.defer = true;
  
  // Only load if not already present
  if (!document.querySelector('script[src*="speed-insights"]')) {
    document.head.appendChild(script);
  }
})();
