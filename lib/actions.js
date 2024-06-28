"use server";
// Here we willput all (server side) logic we want to happen inside the (client side)
// We couldn't use (server side logic) inside the (client side)

export async function shareMeal(formData) {
  "use server";

  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  console.log(meal);
}
