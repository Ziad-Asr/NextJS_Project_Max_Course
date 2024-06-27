import "./globals.css"; // This will beapplied on the entire project.

export const metadata = {
  title: "NextJS Course App",
  description: "Your first NextJS app!",
}; // This is instead of (<header></header>) in the normal HTML skeleton.

export default function RootLayout({ children }) {
  // {{ children  }} here is the content of the (page) file of this component.
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

// This (Layout) page is the layout which the (page) render in.
// (This is because we must render the (children prop) which is the content of the (page) file.)
// Every nextjs project need at least a (layout) file in it.
