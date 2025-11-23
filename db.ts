import { JSONFilePreset } from "lowdb/node";

interface Post  {
  id: string;
  title: string;
  content: string;
}

interface DataBase{
    posts:Post[]
}

const defaultData :DataBase={
    posts:[]
}
const db = await JSONFilePreset("db.json", defaultData);

export default db;