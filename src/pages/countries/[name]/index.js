/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (...args) =>
  fetch(...args).then(async (res) => {
    let rs = await res.json();
    return rs.at(0);
  });

function useCountry(code) {
  let url = `https://restcountries.com/v3.1/alpha/${code}?`;
  const { data, error, isLoading } = useSWR(url, fetcher);
  return { country: data, isError: error, isLoading };
}

export default function CountriesSearch() {
  const router = useRouter();
  const { country, isError, isLoading } = useCountry(router.query.name);

  return (
    <>
      <div className="container mx-auto p-4">
        {/* goback */}
        <button onClick={() => router.back()}>Go Back</button>
      </div>
      <div className="container mx-auto p-4">
        <p>Pais: {router.query.name}</p>
        {isLoading && <p>Loading...</p>}
        {isError && <p>Failed to load</p>}
        {isError && <p>{isError.toString()}</p>}
        {country && (
          <>
            <p>Capital: {country.capital?.at(0)}</p>
            <p>Region: {country.region}</p>
            <p>Subregion: {country.subregion}</p>
            <p>Area: {country.area} mt2</p>
            <p>Population: {country.population}</p>
            <p>
              Currencies:{" "}
              {country.currencies && Object.values(country.currencies)[0]?.name}
            </p>
            <p>
              Languages:{" "}
              {country.languages && Object.values(country.languages)?.at(0)}
            </p>


            <img src={country.flags.png} alt={country.name.common} />

            <p>Independent: {country.independent}</p>
            <p>UnMember: {country.unMember}</p>
          </>
        )}
      </div>
    </>
  );
}
