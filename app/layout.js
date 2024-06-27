import MainHeader from "@/components/main-header/main-header";
import "./globals.css"; // will be applied on the whole app.
import MainHeaderBackground from "@/components/main-header/main-header-background";

export const metadata = {
  title: "NextLevel Food",
  description: "Delicious meals, shared by a food-loving community.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}

// Any repeated component will be put in the lauout (not page file)
// since this is the root layout, so any component used here will appear in the whole app.
