import express from "express";
import { fileURLToPath } from "url";
import path from "path";

const app = express();

app.set("view engine", "ejs");

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// serving static file 

const __fileName = fileURLToPath(import.meta.url);

const __dirName = path.dirname(__fileName);

console.log("filename", __fileName);
console.log("folder", __dirName);

app.use(express.static(path.join(__dirName,"public")))

let itemList = [
  {
    id: 1,
    name: "Book",
  },
  {
    id: 2,
    name: "Pen",
  },
];

app.get("/", (req, res) => {
  res.render("index", { itemList });
});

app.get("/add", (req, res) => {
  res.render("add");
});

app.post("/add", (req, res) => {
  const { name } = req.body;

  const newitem = {
    id: new Date().getTime(),
    name,
  };

  itemList.push(newitem);

  res.redirect("/");
});

app.get("/edit/:id", (req, res) => {
  const id = Number(req.params.id);

  const item = itemList.find((s) => s.id === id);

  if (!item) {
    return res.status(404).json("item not found");
  }

  res.render("edit", { item });
});

app.post("/edit/:id", (req, res) => {
  const id = Number(req.params.id);

  const item = itemList.find((s) => s.id === id);

  if (!item) {
    return res.status(404).json("item not found");
  }

  const { name } = req.body;

  item.name = name;

  res.redirect("/");
});

app.get("/delete/:id", (req, res) => {
  const id = Number(req.params.id);

  const item = itemList.find((s) => s.id === id);

  if (!item) {
    return res.status(404).json("item not found");
  }

  itemList = itemList.filter((s) => s.id !== id);

  res.redirect("/");
});

const port = 5000;

app.listen(port, () => {
  console.log("server running on ", port);
});