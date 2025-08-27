Blog
=================

A simple CRUD blog application built with Node.js, Express.js, and EJS.
Users can create, view, edit, and delete posts. The app also includes responsive styling for both desktop and mobile devices.

-----------------
Features
-----------------
- Post Creation: Add new blog posts with a title and body.
- Post Viewing: View all posts on the homepage.
- Post Editing: Update an existing post.
- Post Deletion: Remove unwanted posts.
- Styling & Responsive Design: Custom CSS for a clean, mobile-friendly UI.

-----------------
Tech Stack
-----------------
- Node.js
- Express.js
- EJS (Embedded JavaScript templates)
- CSS3

-----------------
Project Structure
-----------------
my-blog/
├── app.js              # Main server
├── package.json        # Dependencies and scripts
├── public/             # Static assets
│   └── css/
│       └── styles.css
└── views/              # EJS templates
    ├── index.ejs
    ├── edit.ejs
    └── partials/
        ├── head.ejs
        ├── header.ejs
        └── footer.ejs


-----------------
Usage
-----------------
1. Use the create form at the top of the homepage to add a new post.
2. Posts appear below the form in reverse chronological order.
3. Use the Edit button to modify a post.
4. Use the Delete button to remove a post.

