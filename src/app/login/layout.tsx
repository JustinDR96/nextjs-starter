export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log("🔐 Login Layout Loaded");

  return (
    <section style={{ border: "2px solid red", padding: "2rem" }}>
      <h2>Login Layout actif</h2>
      {children}
    </section>
  );
}
