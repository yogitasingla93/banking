'use client'

import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


const Sidebar = ({ user }: SiderbarProps) => {
  const pathname = usePathname();

  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link href="/" className="mb-12 cursor-pointer flex items-center gap-2">
          <Image 
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="logo"
            className="size-[24px] max-xl:size-14"
          />
          <h1 className="sidebar-logo">Soar Test</h1>
        </Link>

        {sidebarLinks.map((item) => {
          const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)

          return (
            <Link href={item.route} key={item.label}
              className={cn('sidebar-link')}
            >
              <div className="relative size-6">
                <Image 
                  src={item.imgURL}
                  alt={item.label}
                  fill
                  className={cn({
                    'brightness-0 invert sepia hue-rotate-[0deg] saturate-100': isActive, // Apply color filter only when active
                  })}
                  style={isActive ? { filter: 'brightness(0) saturate(100%) invert(10%) sepia(80%) hue-rotate(0deg)', color: '#232323' } : {}}                
                />
              </div>
              <p className={cn("sidebar-label", { "!text-gray-1": isActive })}>
                {item.label}
              </p>
            </Link>
          )
        })}
        
      
      </nav>

     
    </section>
  )
}

export default Sidebar