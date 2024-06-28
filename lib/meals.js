import sql from "better-sqlite3";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve, reject) => setTimeout(resolve, 2000)); // We dellay the response for 2 seconds each time, {{{Only for educational purposes}}} {{Don't do that in real apps }}
  return db.prepare("SELECT * FROM meals").all();
}
