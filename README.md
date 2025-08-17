# Greybeard Scripting PowerShell Documentation

A comprehensive PowerShell documentation site featuring tips, tricks, and utility functions for PowerShell developers.

🌐 **Live Site**: [greybeard-scripting.github.io](https://greybeard-scripting.github.io)

## What's Inside

- **PowerShell Tips & Tricks**: Best practices and useful techniques
- **PSU Apps**: PowerShell Universal dashboard components and utilities
- **Code Examples**: Ready-to-use PowerShell functions and scripts

## Quick Start for Contributors

### Prerequisites

- [Ruby](https://rubyinstaller.org/downloads/) (for Windows)
- [Jekyll](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/testing-your-github-pages-site-locally-with-jekyll)
- [Git](https://git-scm.com/)
- [VS Code](https://code.visualstudio.com/) (recommended)

### Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/Greybeard-Scripting/greybeard-scripting.github.io.git
   cd greybeard-scripting.github.io
   ```

2. **Install dependencies**
   ```bash
   bundle install
   ```

3. **Start the development server**
   ```bash
   bundle exec jekyll serve --watch --livereload --open-url
   ```
   
   This will:
   - Start a local server at `http://localhost:4000`
   - Watch for file changes and auto-reload
   - Automatically open your browser

## Development Workflow

### Using VS Code Tasks (Recommended)

1. Open the project in VS Code
2. Press `F1` to open the command palette
3. Type `Tasks: Run Task` and press Enter
4. Select one of these tasks:
   - **Bundle Install**: Install/update Ruby dependencies
   - **Serve**: Start development server with live reload
   - **Build**: Generate static site files

### Manual Commands

| Task | Command | Description |
|------|---------|-------------|
| **Serve** | `bundle exec jekyll serve --watch --livereload --open-url` | Start dev server with live reload |
| **Build** | `bundle exec jekyll build` | Generate static site files |
| **Install** | `bundle install` | Install Ruby dependencies |

## Project Structure

```
├── docs/                    # Documentation content
│   ├── powershell-tips-and-tricks/
│   └── psu-apps/
├── _config.yml             # Jekyll configuration
├── Gemfile                 # Ruby dependencies
└── index.md               # Homepage content
```

## Adding Content

1. **Create new pages** in the `docs/` directory
2. **Use Markdown** with YAML front matter:
   ```yaml
   ---
   title: "Your Page Title"
   parent: "Parent Section"
   nav_order: 1
   ---
   
   # Your content here
   ```
3. **Test locally** before committing changes

## Technology Stack

- **[Jekyll](https://jekyllrb.com/)**: Static site generator
- **[Just the Docs](https://just-the-docs.com/)**: Documentation theme
- **[GitHub Pages](https://pages.github.com/)**: Hosting platform
- **Markdown**: Content format

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally using the development server
5. Submit a pull request

## Useful Links

- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [Just the Docs Theme Guide](https://just-the-docs.com/)
- [GitHub Pages Setup](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/testing-your-github-pages-site-locally-with-jekyll)
- [Markdown Guide](https://www.markdownguide.org/)

---

**Questions?** Open an issue or reach out to the Greybeard Scripting team!
