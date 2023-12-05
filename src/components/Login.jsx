import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../utils/user";
import register_left from "../assets/register_left.png";
import register_right from "../assets/register_right.png";
import register_middle from "../assets/register_middle.png";
import bb_logo_face from "../assets/bb_logo_face.png";

const Login = ({
  username,
  setUsername,
  email,
  setEmail,
  password,
  setPassword,
}) => {
  const user = useUser();
  const navigate = useNavigate();

  function handleLogin(email, password) {
    user.login(email, password);
    setUsername("");
    setEmail("");
    setPassword("");
    navigate("/");
  }

  return (
    <main className="bg-[#d0e5ee] w-screen h-screen">
      <div className="w-screen h-32"></div>
      <section className="bg-[#9bc8db] width-screen-minus-640 height-screen-minus-192 rounded-3xl mt-8 mx-80 grid grid-cols-[1fr_3fr_1fr]">
        {/* Col 1 */}
        <div className="w-full h-full flex justify-center">
          <img
            src={register_left}
            alt="register_left"
            className="self-center rounded-xl h-[95%]"
          />
        </div>
        {/* Col 2 */}
        <div className="w-full h-full grid grid-rows-[2.5%_1fr_2.5fr_0.5fr_2.5%]">
          <div className="w-full h-full"></div>
          {/* Row 1 Box 1 */}
          <div className="bg-white w-full h-full rounded-t-xl flex flex-row">
            <div className="w-1/3 h-full flex flex-row justify-center">
              <img
                src={bb_logo_face}
                alt="bb_logo_face"
                className="self-center h-44"
              />
            </div>
            <div className="w-2/3 h-full flex flex-col">
              <img
                src={register_middle}
                alt="register_middle"
                className="self-center h-44"
              />
            </div>
          </div>
          {/* Row 1 Box 2 */}
          <div className="bg-[#224768] rounded-b-xl">
            <h1 className="text-5xl text-white font-bold ml-16 mt-4">
              Login Form
            </h1>
            <form className="w-full h-96 mt-8 flex flex-col items-center">
              <div className="bg-[#d0e5ee] rounded-xl w-5/6 h-12 flex mb-8">
                <div className="bg-white w-2/5 h-full rounded-xl flex justify-start">
                  <h2 className="self-center text-center text-2xl pl-6">
                    Email
                  </h2>
                </div>
                <input
                  type="email"
                  placeholder="Type Here"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                  className="bg-[#d0e5ee] w-3/5 h-full rounded-xl text-2xl pl-6"
                />
              </div>
              <div className="bg-[#d0e5ee] rounded-xl w-5/6 h-12 flex mb-36">
                <div className="bg-white w-2/5 h-full rounded-xl flex justify-start">
                  <h2 className="self-center text-center text-2xl pl-6">
                    Password
                  </h2>
                </div>
                <input
                  type="password"
                  placeholder="Type Here"
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                  className="bg-[#d0e5ee] w-3/5 h-full rounded-xl text-2xl pl-6"
                />
              </div>
              <div className="w-5/6 h-20 flex">
                <div className="w-1/2 border-r-2 border-dashed border-r-[#d0e5ee] h-full flex justify-center">
                  <button
                    className="w-full mr-8 h-16 self-center rounded-full bg-white hover:bg-[#d0e5ee] text-3xl font-bold text-[#5685a1] hover:text-[#224768]"
                    type="button"
                    onClick={() => handleLogin(email, password)}
                  >
                    Login
                  </button>
                </div>
                <div className="w-1/2 h-full flex justify-center">
                  <Link
                    to="/register"
                    className="w-full ml-8 h-16 self-center rounded-full"
                  >
                    <button className="w-full h-16 self-center rounded-full bg-white hover:bg-[#d0e5ee] text-3xl font-bold text-[#5685a1] hover:text-[#224768]">
                      Register Form
                    </button>
                  </Link>
                </div>
              </div>
            </form>
          </div>
          {/* Row 1 Box 3 */}
          <div className="w-full h-full"></div>
          <div className="w-full h-full"></div>
        </div>
        {/* Col 3 */}
        <div className="w-full h-full flex justify-center">
          <img
            src={register_right}
            alt="register_right"
            className="self-center rounded-xl h-[95%]"
          />
        </div>
      </section>
    </main>
  );
};

export default Login;
