import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
      <nav>
        <ul className='flex flex-row grid-cols-2 gap-4 '>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>
    )
}