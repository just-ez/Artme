
import { Link } from 'react-router-dom';
import './style.css'


const singnup =()=>{
    return (
      <div className="signup">
        <form action="http://localhost:3000/admin" method="post">
          <h2>Join our community</h2>
          <input typeof="text" name="name" placeholder="input your name.." />
          <input typeof="email" name="email" placeholder="input your email.." />
          <input
            typeof="password"
            name="password"
            placeholder="input your password.."
          />
          <input
            typeof="password"
            name="repreat pass"
            placeholder="repeat your password.."
          />
          <Link to='/login' className='lg'>already have an account?</Link>
          <button>submit</button>
        </form>
      </div>
    );
}
export default singnup;