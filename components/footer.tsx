import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'
import { UilArrowUp } from '@iconscout/react-unicons'

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            <a href='https://github.com/Theboiboi8/' className='underline hover:text-red-600 duration-200 transition-all' >Kamela</a> | Made with Next.js.
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href="https://github.com/Theboiboi8/" target="_blank"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              Find me on GitHub
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
