import { useState, useEffect } from "react";

const FetchData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const dataFetch = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        if (!response.ok) {
          throw new Error("Unable to fetch data because Link is not found");
        }
        const data = await response.json();

        setData(data);
      } catch (errors) {
        setError(errors);
      } finally {
        setLoading(false);
      }
    };

    dataFetch();
  }, []);

  console.log(error);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <div>
      <ul>
        {data.map((value) => (
          <li key={value.id}>{value.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default FetchData;
