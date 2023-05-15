import { useQuery } from "urql";
import { PRODUCT_QUERY } from "../lib/query";
import Products from "../components/Products";

export default function Home() {
  const [result] = useQuery({ query: PRODUCT_QUERY });
  const { data, fetching, error } = result;

  return (
    <>
      {!fetching &&
        data?.products?.data?.map((product) => (
          <Products key={product?.slug} items={product} />
        ))}
    </>
  );
}
