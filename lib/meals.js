import sql from "better-sqlite3";

const db = sql("meals.db");

export async function getMeals() {
  //   await new Promise((resolve, reject) => setTimeout(resolve, 2000)); // We dellay the response for 2 seconds each time, {{{Only for educational purposes}}} {{Don't do that in real apps }}
  //   throw new Error("Loading Meals failed!");
  return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug); // Didn't type (+slug), but type (?, get()) => That is more secure (No SQL injection could happen)
}
