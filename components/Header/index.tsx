import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center w-screen p-4 weight font-black">
      <div>
        <Link href="/">
          <b>Pablo Bombonato</b>
        </Link>
      </div>
      <div className="grid grid-cols-3 text-slate-600">
        <Link href="/about">Soluções</Link>
        <Link href="/blog">Projetos</Link>
        <Link href="/projects" className="text-black">Vamos conversar <span>{">"}</span></Link>
      </div>
    </header>
  );
}
