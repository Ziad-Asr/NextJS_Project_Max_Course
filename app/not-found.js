"use client"; // Tthis is amust here, because we handle error that happens in the client also (After data was cashed from the server side)

export default function Error({ error }) {
  return (
    <main className="not-found">
      <h1>Not found</h1>
      <p>Unfortunately, we could not find the requested page or resource.</p>
    </main>
  );
}
