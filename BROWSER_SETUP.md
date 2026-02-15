# Browser Setup Guide for Antigravity AI

This guide will help you configure your Windows environment so that the AI assistant can use browser automation tools to help you test and verify your website.

## Issue

The browser tool failed with this error:
```
failed to create browser context: failed to install playwright: $HOME environment variable is not set
```

## Solution: Set the HOME Environment Variable

The browser tool (Playwright) needs the `$HOME` environment variable to be set. Here's how to fix it:

### Option 1: Set Permanently (Recommended)

1. **Open System Environment Variables**:
   - Press `Win + R`
   - Type `sysdm.cpl` and press Enter
   - Click the "Advanced" tab
   - Click "Environment Variables" button

2. **Add HOME Variable**:
   - Under "User variables", click "New"
   - Variable name: `HOME`
   - Variable value: `C:\Users\vaibh` (your user directory)
   - Click "OK" on all dialogs

3. **Restart Your Terminal**:
   - Close all PowerShell/Command Prompt windows
   - Open a new terminal
   - The AI will now be able to use browser tools

### Option 2: Set Temporarily (For Current Session)

Run this in PowerShell before starting your work:

```powershell
$env:HOME = "C:\Users\vaibh"
```

**Note**: This only works for the current PowerShell session. You'll need to run it again if you close the terminal.

### Option 3: Add to PowerShell Profile (Auto-load)

1. Open PowerShell and run:
   ```powershell
   notepad $PROFILE
   ```

2. If it says the file doesn't exist, create it:
   ```powershell
   New-Item -Path $PROFILE -Type File -Force
   notepad $PROFILE
   ```

3. Add this line to the file:
   ```powershell
   $env:HOME = "C:\Users\vaibh"
   ```

4. Save and close Notepad

5. Restart PowerShell - the HOME variable will be set automatically

---

## Why This Helps the AI

Once the HOME variable is set, the AI assistant can:

✅ **Open your website in a browser** - Navigate to http://localhost:5173/  
✅ **Take screenshots** - Capture visual proof of features working  
✅ **Test interactions** - Click buttons, hover over elements, verify animations  
✅ **Record videos** - Create recordings of user flows and interactions  
✅ **Verify responsiveness** - Test different screen sizes  
✅ **Debug visual issues** - See exactly what you see and help fix it  

---

## Verify It's Working

After setting the HOME variable, restart your terminal and the AI will be able to use browser tools automatically. You can verify by asking the AI to:

- "Open the portfolio website in a browser"
- "Take a screenshot of the homepage"
- "Test the doodle animations"

---

## Additional Recommendations

### 1. Keep Dev Server Running
When working with the AI on web projects, keep the dev server running:
```bash
cd C:\Users\vaibh\.gemini\antigravity\scratch\portfolio-website
.\dev.bat
```

### 2. Set Active Workspace
In your editor/IDE, set the workspace to:
```
C:\Users\vaibh\.gemini\antigravity\scratch\portfolio-website
```

This helps the AI understand your project context better.

### 3. Node.js PATH
If you continue to have issues with npm/node commands, ensure Node.js is in your system PATH:
- Right-click "This PC" → Properties → Advanced system settings
- Environment Variables → System variables → Path → Edit
- Add: `C:\Program Files\nodejs`

---

## Troubleshooting

**Q: I set HOME but browser still doesn't work**  
A: Make sure you restarted your terminal after setting the variable. The AI needs a fresh session to pick up the change.

**Q: Do I need to install anything else?**  
A: No, Playwright will auto-install when the AI first uses the browser tool (once HOME is set).

**Q: Can I use a different browser?**  
A: The AI uses Chromium by default via Playwright. It's automatic and doesn't require Chrome to be installed.

---

**That's it!** Once HOME is set, the AI will have full browser capabilities to help you build and test your website. 🚀
