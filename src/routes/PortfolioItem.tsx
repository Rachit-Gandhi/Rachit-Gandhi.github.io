import { useParams } from "react-router-dom";

export default function PortfolioItem() {
  const { slug } = useParams();
  return (
    <section>
      <h2>Portfolio Item</h2>
      <p>Slug: {slug}</p>
      <p>Details soon.</p>
    </section>
  );
}
