"use client";
import "./main.modules.scss";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const { isLoading, data } = useQuery({
    queryKey: ["products"],
    queryFn: () => {
      const axios = require("axios"); // Importe o axios localmente
      return axios.get(
        "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=5&sortBy=id&orderBy=DESC"
      );
    },
    select(data) {
      return {
        data: data.data,
      };
    },
  });

  console.log();

  return <section className="main-page">Teste</section>;
}
