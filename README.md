# IEEE SB NITP Website

This repository contains the source code for the **IEEE Student Branch NIT Patna** website.  

---

##  Folder Structure
```
/src
├── /app
│ ├── /page.js # Home page (Overview of IEEE SB NITP, intro, highlights)
│ ├── /about
│ │ └── /page.js # About page (Info about IEEE, NITP chapter, mission, vision)
│ ├── /team
│ │ ├── /page.js # Team listing page
│ │ └── [year].js # Dynamic route for yearly team structure (e.g., 2024, 2025)
│ ├── /events
│ │ ├── /page.js # Events listing page
│ │ └── [eventId].js # Dynamic route for individual event details
│ ├── /projects
│ │ ├── /page.js # Projects page (student/research projects by IEEE SB NITP)
│ │ └── [projectId].js # Dynamic route for project details
│ ├── /blog
│ │ ├── /page.js # Blog/News listing page
│ │ └── [postId].js # Dynamic route for individual blog/news article
│ ├── /resources
│ │ └── /page.js # Resources page (roadmaps, study material, IEEE papers, etc.)
│ ├── /gallery
│ │ └── /page.js # Gallery page (pictures/videos from events)
│ ├── /contact
│ │ └── /page.js # Contact page (reach out to IEEE SB NITP, form, map, email)
│ ├── /people
│ │ ├── /developers/page.js # Developers page (website developers, contributors)
│ │ └── /designers/page.js # Designers page (UI/UX designers)
│
├── /components
│ ├── Navbar.js # Navbar component
│ ├── Footer.js # Footer component
│ ├── Card.js # Reusable card component
│ ├── EventCard.js # Reusable card for events
│ ├── ProjectCard.js # Reusable card for projects
│ ├── BlogCard.js # Reusable card for blog/news
│ ├── TeamCard.js # Reusable card for team members
│ ├── GalleryImage.js # Reusable gallery image component
│ ├── PeopleCard.js # Reusable card for mentors/developers/designers
│ ├── TypewriterAnimation.js # Animation component (optional for hero sections)
│
├── /forms
│ ├── EventUpdateForm.js # Form to add/update events
│ ├── ProjectUpdateForm.js # Form to add/update projects
│ ├── BlogUpdateForm.js # Form to add/update blogs
│ ├── GalleryUpdateForm.js # Form to update gallery
│ └── PeopleUpdateForm.js # Form to update mentors/developers/designers
│
├── /actions
│ └── ... # Place for server-side actions (e.g., fetching/updating data)
│
├── /utils
│ ├── api.js # API helper functions
│ ├── constants.js # Static constants (like IEEE links, socials)
│ └── helpers.js # Utility functions
```

---

## Features
- Dynamic routing for teams, events, blogs, and projects
- Reusable components for scalability
- Easy-to-update forms for admins
- Server-side actions for data fetching
- Clean modular structure for maintainability

---

## 🛠️ Tech Stack
- **Next.js** (App Router)
- **React.js** (Components & UI)
- **Tailwind CSS** (Styling)
- **Node.js/Express** (Backend)
- **MongoDB** (Database, if required)

---
## Contributors ✨
Thanks goes to these wonderful people ❤️:
<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<a href="https://github.com/Sandeepkumargond/IEEE_SB_NITP-official-site/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Sandeepkumargond/IEEE_SB_NITP-official-site"/>
</a>
<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

