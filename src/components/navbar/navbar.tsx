import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="flex-col p-6 bg-slate-800 text-slate-200 w-1/4">
      <div>
        <Link href="/">홈</Link>
      </div>
      <div>
        <Link href="/newface">뉴페이스</Link>
      </div>
      <div>
        <Link href="/my">마이 프로필</Link>
      </div>
      <div>사운드 컴포넌트</div>
    </nav>
  )
}
