import { useNavigate } from "react-router-dom";

type Props = {};

const Navbar = (props: Props) => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-orange-100 p-3" role="banner">
      <h1
        onClick={() => navigate("/")}
        className="font-bold text-2xl cursor-pointer"
      >
        S-Blog
      </h1>
    </div>
  );
};

export default Navbar;
