<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/7f7c9dc3-b6f0-4963-89cb-95ae74a80143

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
4. Run the app:
   `npm run dev`

## GitHub Deployment

1. Create a GitHub repository for this project.
2. Initialize git locally if needed:
   `git init`
3. Add and commit your files:
   `git add . && git commit -m "Initial commit"`
4. Add your GitHub remote and push:
   `git remote add origin https://github.com/<your-username>/<repo-name>.git`
   `git branch -M main`
   `git push -u origin main`
5. Enable GitHub Pages in the repository settings and use the `gh-pages` branch as the source.

Once pushed, the workflow will build and deploy automatically on each `main` push.
