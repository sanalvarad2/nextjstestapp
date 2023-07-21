import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import Head from "next/head";

const fetcher = (...args) =>
  fetch(...args).then(async (res) => {
    let dt = await res.json();
    return dt.sort((a, b) => a.name.common.localeCompare(b.name.common));
  });

function Pais({ pais }) {
  const router = useRouter();
  return (
    <>
      <tr onClick={() => router.push(`/countries/${pais.ccn3}`)}>
        <td scope="row">{pais.ccn3}</td>
        <td>{pais.name.common}</td>
        <td>{pais.region}</td>
        <td>
          <Image
            src={pais.flags.png}
            alt={pais.name.common}
            height="50"
            width="80"
          />
        </td>
      </tr>
    </>
  );
}

function useCountries() {
  const { data, error, isLoading } = useSWR(
    "https://restcountries.com/v3.1/all",
    fetcher
  );

  return { countries: data, isError: error, isLoading };
}

export default function Countries() {
  const { countries, isError, isLoading } = useCountries();
  const [paises, setPaises] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    if (value === "") {
      if (!isLoading) setPaises(countries);
    } else {
      setPaises(
        countries.filter((pais) =>
          pais.name.common.toLowerCase().includes(value.toLowerCase())
        )
      );
    }
  }, [value, countries, isLoading]);

  if (isError) return <div>failed to load: {isError.toString()}</div>;

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <Head>
        <title>Paises</title>
      </Head>
      <div className="container pv-4 mb-4">
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Buscar paises"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <div className="container">
        <h3>Lista de Paises</h3>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Continente</th>
              <th scope="col">Bandera</th>
            </tr>
          </thead>
          <tbody>
            {paises.map((pais) => (
              <Pais key={pais.ccn3} pais={pais} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
