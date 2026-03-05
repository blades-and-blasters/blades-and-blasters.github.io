# GitHub Pages Deployment Guide

This project is configured to automatically deploy to GitHub Pages using GitHub Actions. Follow these steps to get your Blades & Blasters rulebook live on GitHub Pages.

## Quick Start

### 1. Create a GitHub Repository

1. Go to [GitHub](https://github.com) and log in
2. Click **New repository** (top-right corner)
3. Name it `blades-and-blasters` (or any name you prefer)
4. Choose **Public** (required for free GitHub Pages)
5. Click **Create repository**

### 2. Push Your Code to GitHub

In your terminal, navigate to the project folder and run:

```bash
cd ttrpg-rulebook
git init
git add .
git commit -m "Initial commit: Blades & Blasters rulebook"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/blades-and-blasters.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top-right)
3. In the left sidebar, click **Pages**
4. Under "Build and deployment", select:
   - **Source**: GitHub Actions
5. The workflow will automatically run on your next push

That's it! Your site will deploy to:
- `https://YOUR_USERNAME.github.io/blades-and-blasters/`

(Replace `blades-and-blasters` with your actual repository name)

---

## How It Works

### Automatic Deployment

Every time you push to the `main` branch, GitHub Actions automatically:

1. **Installs dependencies** using pnpm
2. **Builds the site** with `pnpm build`
3. **Deploys to GitHub Pages** in the `gh-pages` branch

The workflow file is at `.github/workflows/deploy.yml`.

### Local Development

To test locally before pushing:

```bash
pnpm install
pnpm dev
```

Then open `http://localhost:3000` in your browser.

### Building for Production

To build the production bundle:

```bash
pnpm build
```

The output is in the `dist/` folder.

---

## Deploying to a Subdirectory

If your repository name is not `blades-and-blasters`, the site will deploy to a subdirectory. The workflow automatically handles this, but you can also manually set it:

1. Go to **Settings → Pages**
2. Note the URL format: `https://YOUR_USERNAME.github.io/REPO_NAME/`
3. The workflow uses this automatically

If you need to override it, set the environment variable in `.github/workflows/deploy.yml`:

```yaml
- name: Build
  env:
    GITHUB_PAGES_BASE: /your-repo-name/
  run: pnpm build
```

---

## Updating the Rulebook

To add or update content:

1. Edit `client/src/lib/gameData.ts` to add classes, abilities, gadgets, etc.
2. Or edit any page file in `client/src/pages/`
3. Commit and push:

```bash
git add .
git commit -m "Update rulebook content"
git push
```

GitHub Actions will automatically rebuild and redeploy within 1-2 minutes.

---

## Troubleshooting

### Site not showing up after push

1. Check the **Actions** tab in your repository
2. Click the latest workflow run to see if it succeeded or failed
3. If it failed, check the logs for error messages

### Site shows old content

1. Hard refresh your browser: `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)
2. Wait a few minutes for GitHub Pages cache to clear
3. Check that the workflow completed successfully

### 404 errors on subpages

This usually means the base path is wrong. The workflow should handle this automatically, but if you're deploying to a subdirectory, ensure the URL includes the repo name:

- ✅ Correct: `https://username.github.io/blades-and-blasters/`
- ❌ Wrong: `https://username.github.io/`

---

## Custom Domain

To use a custom domain (e.g., `bladesandblasters.com`):

1. Go to **Settings → Pages**
2. Under "Custom domain", enter your domain
3. Update your domain's DNS settings to point to GitHub Pages (GitHub will show instructions)

---

## Need Help?

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- Check the workflow logs in the **Actions** tab of your repository
