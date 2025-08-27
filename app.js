import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// ----- In-memory "database" -----
let posts = []; // { id: number, title: string, body: string, createdAt: Date }
let nextId = 1;

// ----- Middleware -----
app.use(express.urlencoded({ extended: true })); // parse form data
app.use(express.static(path.join(__dirname, "public"))); // serve /public

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// ----- Routes -----
// Home: list + create form
app.get("/", (req, res) => {
  // newest first
  const sorted = [...posts].sort((a, b) => b.id - a.id);
  res.render("index", { posts: sorted });
});

// Create
app.post("/posts", (req, res) => {
  const { title, body } = req.body;
  if (!title?.trim() || !body?.trim()) {
    // simple validation; you could render with an error
    return res.redirect("/");
  }
  posts.push({ id: nextId++, title: title.trim(), body: body.trim(), createdAt: new Date() });
  res.redirect("/");
});

// Edit form
app.get("/posts/:id/edit", (req, res) => {
  const id = Number(req.params.id);
  const post = posts.find(p => p.id === id);
  if (!post) return res.status(404).send("Post not found");
  res.render("edit", { post });
});

// Update (using POST to keep deps minimal)
app.post("/posts/:id/update", (req, res) => {
  const id = Number(req.params.id);
  const post = posts.find(p => p.id === id);
  if (!post) return res.status(404).send("Post not found");

  const { title, body } = req.body;
  post.title = (title ?? "").trim();
  post.body = (body ?? "").trim();
  res.redirect("/");
});

// Delete (using POST to keep deps minimal)
app.post("/posts/:id/delete", (req, res) => {
  const id = Number(req.params.id);
  posts = posts.filter(p => p.id !== id);
  res.redirect("/");
});

// ----- Start Server -----
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
