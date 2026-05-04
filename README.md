# VC & Accelerator Calendar 2026

A clean, premium, Google Calendar-style web application designed for early-stage SaaS founders. This tool tracks application deadlines, program start dates, and demo days for the top US accelerators and VC-backed startup programs in 2026.

## 🚀 Features

- **Comprehensive Tracking:** Tracks 25+ top-tier programs and 40+ specific calendar events.
- **Dynamic Filtering:** Filter events by type (Application Open, Deadline, Program Start, Program End).
- **Priority Categorization:** Events are tagged by priority (`High`, `Medium`, `Niche`) specifically for early-stage B2B SaaS founders.
- **Live Search:** Instantly search programs by name or organization.
- **Sleek UI:** Premium dark mode aesthetic with glassmorphism effects, gradient typography, and micro-animations.
- **Zero Dependencies:** Pure HTML, CSS, and Vanilla JavaScript. No build steps or heavy frameworks required.

## 📅 Programs Included

- **Top Accelerators:** Y Combinator (YC), Techstars, 500 Global, Antler US, Forum Ventures, Boost VC
- **VC-Backed Programs:** a16z Speedrun, Sequoia Arc, PearX, HF0 Residency, Neo Residency, First Round Fast Track, LSVP Ignition, Soma Capital
- **Big Tech Programs:** Google for Startups Accelerator, Microsoft Founders Hub, AWS Activate
- **Other Networks:** Pioneer Tournament, Entrepreneur First US

## 💻 How to Run Locally

Because this project is built entirely with static files, there is no installation required. 

1. Clone the repository:
   ```bash
   git clone https://github.com/Raaghavcodes/vc-fundraising-calendar.git
   cd vc-fundraising-calendar
   ```

2. Run a local development server (recommended to avoid browser strict CORS policies on local files):
   - **Using Node.js:** `npx serve`
   - **Using Python:** `python3 -m http.server 8080`
   
3. Open your browser and navigate to `http://localhost:8080`.

## 🌐 How to Deploy (GitHub Pages)

Since this is a static website, you can easily host it for free using GitHub Pages.

1. Go to your repository settings on GitHub.
2. Navigate to **Pages** on the left sidebar.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Choose the `main` branch and `/ (root)` folder, then click **Save**.
5. Within a few minutes, your site will be live and accessible via your GitHub Pages URL!

## 📂 Project Structure

```text
vc-fundraising-calendar/
├── index.html   # Main structure and layout
├── style.css    # Premium dark-mode styling and animations
├── app.js       # Event data payload, search/filter logic, and DOM rendering
└── README.md    # Project documentation
```

## 📝 Data Disclaimer

Dates marked as *Estimated* are based on historical batch cadences and industry patterns. While this calendar aims to be as accurate as possible, founders should always verify exact dates on the official program websites before applying.
