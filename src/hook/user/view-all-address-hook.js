import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllAddresses } from "../../Redux/actions/addressAction";

const ViewAllAddressHook = () => {
  const res = useSelector((state) => state.address.allAddresses);
  const dispatch = useDispatch();

  useEffect(() => {
    const runCode = async () => {
      await dispatch(getAllAddresses());
    };
    runCode();
  }, []);

  let data = [];
  if (res && res.data) data = res.data;

  return { data };
};

export default ViewAllAddressHook;
