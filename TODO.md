# Netlify Deployment Fix Plan

## Tasks
- [x] Remove `output: 'standalone'` from next.config.js
- [x] Update netlify.toml with correct Netlify configuration

## Issues Fixed
1. ✅ Removed `output: 'standalone'` - incompatible with Netlify's default deployment
2. ✅ Updated publish path to `.next`
3. ✅ Added @netlify/nextjs plugin for proper App Router support
4. ✅ Fixed functions directory path for API routes
