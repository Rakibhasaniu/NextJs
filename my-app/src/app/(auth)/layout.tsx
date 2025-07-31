"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import "./styles.css"
import { useState } from "react"

const navLinks = [
  { href: '/register', name: 'Register' },
  { href: '/login', name: 'Login' },
  { href: '/forgot', name: 'Forget Password' },
]

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [inputValue, setInputValue] = useState("");
  const pathName = usePathname();  
  return (
   <div>
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Search..."
        className="border p-2 rounded mb-4"
      />
    </div>
    {navLinks.map((link) => {
      const isActive = pathName === link.href || (pathName.startsWith(link.href) &&   link.href !== '/');
      return (
        <Link className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"} href={link.href} key={link.href}>
        {link.name}
        </Link>
      )
    })}
    {children}
   </div>
  )
}
