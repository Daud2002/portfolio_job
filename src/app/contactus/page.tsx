export default function ContactPage() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>
      <form className="grid gap-4 max-w-xl">
        <input className="rounded-md bg-[color:var(--color-muted)]/60 border border-[color:var(--color-border)] px-3 py-2 outline-none focus:ring-2 focus:ring-cyan-600/40 focus:border-cyan-600/50" placeholder="Name" />
        <input className="rounded-md bg-[color:var(--color-muted)]/60 border border-[color:var(--color-border)] px-3 py-2 outline-none focus:ring-2 focus:ring-cyan-600/40 focus:border-cyan-600/50" placeholder="Email" type="email" />
        <textarea className="rounded-md bg-[color:var(--color-muted)]/60 border border-[color:var(--color-border)] px-3 py-2 outline-none focus:ring-2 focus:ring-cyan-600/40 focus:border-cyan-600/50" placeholder="Message" rows={5} />
        <button type="button" className="self-start px-4 py-2 rounded-md bg-cyan-600 text-white border border-cyan-500 hover:bg-cyan-500">Send</button>
      </form>
    </section>
  );
} 