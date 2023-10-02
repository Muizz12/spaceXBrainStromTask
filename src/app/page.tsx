"use client";

import Image from "next/image";
import Header from "./components/header";
import Banner from "./components/Banner";
import SearchForm from "./components/SearchForm";
import CustomDataGrid from "./components/CapsuleGrid";
import { useEffect, useState } from "react";
import axios from "axios";
import { getData, getOneCapsule } from "@/services/api";
import CapsuleForm from "./components/CapsuleForm";

export default function Home() {
  const [rows, setRows] = useState<any[]>([]);
  const [capsule, setCapsule] = useState<any>();
  const [loading, setLoading] = useState<boolean>();
  const [value, setVale] = useState<string>("");
  const getCapsule = async () => {
    let data = await getOneCapsule(value);
    setCapsule(data);
  };
  useEffect(() => {
    let tempRow: any = [];
    const fetchData = async () => {
      setLoading(true);
      const data = await getData();
      if (data) {
        data?.data?.map((item: any) => {
          tempRow?.push({
            id: item?.capsule_id,
            capsule_serial: item?.capsule_serial,
            status: item?.status,
            original_launch: item?.original_launch,
            mission: item?.missions[0]?.name,
            landings: item?.landings,
            type: item?.type,
            reuse_count: item?.reuse_count,
          });
        });
      }
      setRows(tempRow);
      setLoading(false);
    };
    fetchData();
  }, []);
  if (loading) {
    <div className="min-h-screen bg-white item-center">
      <p>Loading</p>
    </div>;
  }
  return (
    <main className="min-h-screen bg-white ">
      <Header />
      <Banner />
      <SearchForm setVale={setVale} getCapsule={getCapsule} />
      {capsule && <CapsuleForm capsule={capsule?.data} />}
      <CustomDataGrid rows={rows} />
    </main>
  );
}
