export default function Layout({ children }: { children: React.Node }) {
  return <div>
    <nav>
      <li>Home</li>
    </nav>
    {children}
  </div>
}