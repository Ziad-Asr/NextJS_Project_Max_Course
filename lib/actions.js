"use server";
// Here we willput all (server side) logic we want to happen inside the (client side)
// We couldn't use (server side logic) inside the (client side)

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

export async function shareMeal(formData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  await saveMeal(meal);
  revalidatePath("/meals");
  // Due to the caching in nextjs (cach all page before run on browser),
  // any page depends on dynamic content when the content change in the DB it does not change on the production version of the app (It updates on dev mode only)
  // So we need to tell next.js to revalidate these paths again on changing there content
  // revalidatePath('/meals', 'layout), means to revalidate meals and its (sub routs), revalidatePath('/', 'layout) => Revalidate all the pages.
  redirect("/meals");
}
