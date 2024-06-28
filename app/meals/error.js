"use client"; // Tthis is amust here, because we handle error that happens in the client also (After data was cashed from the server side)

export default function Error({ error }) {
  return (
    <main className="error">
      <h1>An error occured!</h1>
      <p>Faild to fetch meals data, please try again later.</p>
    </main>
  );
}
