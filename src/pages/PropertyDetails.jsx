import { useParams } from "react-router-dom";

function PropertyDetails() {
  const { id } = useParams();
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-4">Property Details #{id}</h1>
      <p className="text-lg text-gray-600">Detailed info about property coming soon.</p>
    </div>
  );
}

export default PropertyDetails;
