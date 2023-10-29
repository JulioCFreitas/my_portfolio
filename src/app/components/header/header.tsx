import Image from 'next/image'

import "./header.scss"

export function Header(){
    return(
        <div className="header">
          <div>
            <h1>Hi, i´m Julio Freitas! 👋</h1>
            <h2>Backend Software Developer</h2>
          </div>
          <Image
            src="./julioFreitas.jpg"
            alt="Vercel Logo"
            width={290}
            height={310}
            priority
          />
        </div>
    )
}