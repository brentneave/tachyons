import React from 'react'

import { version } from '../package.json'
import Header from './Header'
import Footer from './Footer'

export default ({
  title = 'TACHYONS - Css Toolkit',
  className = '',
  skipHeader,
  skipFooter,
  children
}) => {
  console.log(`
 ________            ______
 ___  __/_____ _________  /______  ______________________
 __  /  _  __ \`/  ___/_  __ \\_  / / /  __ \\_  __ \\_  ___/
 _  /   / /_/ // /__ _  / / /  /_/ // /_/ /  / / /(__  )
 /_/    \\__,_/ \\___/ /_/ /_/_\__, / \\____//_/ /_//____/
                            /____/

---------------------------------------------------------
👩‍💻 https://github.com/tachyons-css/tachyons
🚀 v${version}
`)

  return (
    <div className="w-100 sans-serif">
      <title>{title}</title>

      {skipHeader ? null : <Header version={version} />}
      <main className={className} children={children} />
      {skipFooter ? null : <Footer />}
    </div>
  )
}
