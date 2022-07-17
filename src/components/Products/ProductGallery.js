import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import style from "./Product.module.css";
import LeftButton from "./LeftButton";
import RightButton from "./RightButton";
import { useParams } from "react-router-dom";
import ViewProductsDetailsHook from "./../../hook/products/view-products-details-hook";

const ProductGallery = () => {
  const { id } = useParams();

  const [item, images] = ViewProductsDetailsHook(id);

  return (
    <div className={`${style["product-gallary-card"]} d-flex justfiy-content-center align-items-centerpt-2`}>
      <ImageGallery
        //
        items={images}
        showFullscreenButton={false}
        isRTL={true}
        originalAlt={{ original: "Prod phot" }}
        showPlayButton={false}
        showThumbnails={false}
        renderRightNav={RightButton}
        renderLeftNav={LeftButton}
      />
    </div>
  );
};

export default ProductGallery;
