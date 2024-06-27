import Link from "next/link";
import Header from "@/components/header";

export default function Home() {
  console.log("Next.js is here"); //This will appear in the terminal. (Not in the browser console.)

  return (
    <main>
      <Header />
      <p>🔥 Let&apos;s get started! 🔥</p>
      <p>
        <Link href="/about">About US</Link>
      </p>
    </main>
  );
}

// We name this file (Page). that ia {{a must}} because the file that named page will be the root file of this project.
// (the name of the compaonent inside it {like here name (home) does not matter if it is different})

// *******
// *** Important *** ANY THING RELATED TO NAMING, IT IS ONLY APPLIES INSIED THE ((APP)) FOLDER, OUTSIDE IT THEY BECOME ONLY FOR MY PREFER. *****
// *******

// This is called a (Server component) in Next.js
// When I type (Console.log('...')), this will appear in the terminal her not in the browser console => that is beacuse it's a server component
// The (about) folder will hold the routes of our app.
