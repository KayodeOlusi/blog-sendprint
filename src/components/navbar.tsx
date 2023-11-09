import { useNavigate } from "react-router-dom";

type Props = {};

const Navbar = (props: Props) => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-orange-100 p-3">
      <h1
        className="font-bold text-2xl cursor-pointer"
        onClick={() => navigate("/")}
      >
        S-<i>Blog</i>
      </h1>
    </div>
  );
};

export default Navbar;
