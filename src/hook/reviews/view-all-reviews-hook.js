import {
  //  useState,
  useEffect,
} from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllReviews } from "../../Redux/actions/reviewActions";

const ViewAllReviewHook = (prodId) => {
  const dispatch = useDispatch();

  const limit = 7;

  // const [loading, setLoading] = useState(true);

  const allReview = useSelector((state) => state.review.reviews);
  // const error = useSelector((state) => state.review.error);

  useEffect(() => {
    // setLoading(true);
    dispatch(getAllReviews(prodId, 1, limit));
    // setLoading(false);
  }, []);

  let data = [];

  if (allReview) data = allReview;

  const onPress = async (page) => {
    await dispatch(getAllReviews(prodId, page, limit));
  };

  return [data, onPress];
};

export default ViewAllReviewHook;
