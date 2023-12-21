import Image from 'next/image'
import Navbar from './components/Navbar'
import Main from './Main'
import SomeVotes from './SomeVotes'
import MoreVotes from './MoreVotes'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-4">
      <Navbar />
      <div className='flex sm:flex-row gap-3 flex-col justify-between items-center'>
        <Main />
        <SomeVotes />
        <MoreVotes />
      </div>
    </main>
  )
}
