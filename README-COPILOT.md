# Copilot Setup for this workspace

This project recommends GitHub Copilot. Follow these steps to enable the "generate code / tab to accept" inline suggestion behavior.

1) Install recommended extensions
- Open the workspace in VS Code. You should see a recommendation to install GitHub Copilot and Copilot Labs (or install from the Extensions view).
- Alternatively install from the Marketplace:
  - GitHub Copilot: https://marketplace.visualstudio.com/items?itemName=GitHub.copilot
  - GitHub Copilot Labs: https://marketplace.visualstudio.com/items?itemName=GitHub.copilot-labs

2) Sign in
- After installation, sign in with your GitHub account using the prompt that appears. Copilot requires authentication.

3) Workspace settings
- This workspace includes `.vscode/settings.json` with the following helpful settings:
  - `editor.inlineSuggest.enabled = true`
  - `editor.tabCompletion = "on"`
  - `github.copilot.inlineSuggest.enable = true`

4) Test inline suggestions
- Create a new file `test.js`.
- Type a comment like:
  // generate code: function to add two numbers
- Wait for inline suggestion to appear. Press `Tab` to accept.

5) Troubleshooting
- If suggestions don't appear:
  - Reload Window (Command Palette -> Reload Window).
  - Ensure Copilot extension is enabled and you are signed in.
  - Check Output panel (select "GitHub Copilot") for errors.
  - Disable other AI extensions that may conflict.

6) Notes
- Extensions may be disabled on restart if your VS Code settings or environment policies restrict auto-start. If Copilot is repeatedly disabled, enable it manually in Extensions view.
- This README is intentionally small; if you want I can add a `.env.example` or a more detailed developer setup guide.
