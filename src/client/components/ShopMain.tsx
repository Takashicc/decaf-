import { useEffect, useState } from "react";
import modelType from "../model.type";
import { findShopAndMenuById } from "../api";
import Photoheader from "./PhotoHeader";
import Shopinfo from "./ShopInfo";
import Map from "./Map";
import Menu from "./Menu";
import { useParams } from "react-router-dom";
import isNumeric from "validator/lib/isNumeric";

const ShopMain: React.FC = () => {
  let { id } = useParams();
  const [shopDetail, setShopDetail] = useState<modelType.ShopAndMenu>();
  const [notFound, setNotFound] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      if (!id || !isNumeric(id)) {
        setNotFound(true);
        setShopDetail(undefined);
        return;
      }
      const numId: number = +id;
      const shop: modelType.ShopAndMenu = await findShopAndMenuById(numId);
      console.log(shop);
      setShopDetail(shop);
      if (shop === undefined) {
        setNotFound(true);
      } else {
        setNotFound(false);
      }
    })();
  }, [id]);

  return (
    <div className="Shopmain">
      <Photoheader />

      <div className="shopDetail">
        <Shopinfo shopDetail={shopDetail} />
      </div>
      <Map shopDetail={shopDetail} />

      <Menu shopDetail={shopDetail} />
    </div>
  );
};

export default ShopMain;
