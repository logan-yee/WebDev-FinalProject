
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>Naan Stop Wok</h1>
        <h2>About the restaurant</h2>
          <p>blah blah blah</p>
      </main>
      <footer className="row-start-3 flex flex-wrap gap-20 items-center justify-center">
        <div className="flex flex-col items-center gap-2">
          <h1>Location</h1>
          <p>2000 Simcoe St N, Oshawa, ON L1G 0C5</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <h1>Hours</h1>
          <p>
            Monday to Thursday 2pm - 3pm
            <br />
            Thursday to Sunday 1am - 6am
          </p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <h1>Contact Us</h1>
          <p>info@naanstopwok.com</p>
          <p>416-123-4567</p>
        </div>
      </footer>

    </div>
  );
}
