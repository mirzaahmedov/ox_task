import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Typography, Table, Pagination, Input, Spin } from "antd";

import styles from "./products.module.css";
import { useAuth } from "../context/auth";
import { useDeferedValue } from "../utils/useDeferedValue";
import { queryProducts } from "../services/products"

const cols = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Barcode",
    dataIndex: "barcode",
    key: "barcode",
  },
  {
    title: "Count",
    dataIndex: "product",
    key: "count",
  },
  {
    title: "Supplier",
    dataIndex: "supplier",
    key: "supplier",
  },
  {
    title: "unit",
    dataIndex: "unit",
    key: "unit",
  }
]

const Products = () => {
  const [term, setTerm] = useState('');
  const [page, setPage] = useState(1);
  const [filtered, setFiltered] = useState<Awaited<ReturnType<typeof queryProducts>>["items"]>([])

  const search = useDeferedValue(term, 500);
  const { auth } = useAuth();
    
  const { data, isLoading } = useQuery({
    queryKey: ['products', page],
    queryFn: () => queryProducts({ page, token: auth?.token! }),
  });

  useEffect(() => {
    setTerm("");
  }, [page]);
  useEffect(() => {
    setFiltered(data?.items.filter(item => item.name.toLowerCase().includes(search.toLowerCase())) || [])
  }, [search, data]);

  return (
    <div>
      {isLoading ? (
        <div className={styles.Splash}>
          <Spin />
        </div>
      ) : (
        <div className={styles.Container}>
          <Typography.Title>Products</Typography.Title>
          <Input.Search value={term} onChange={e => setTerm(e.target.value)} />
          <Table pagination={false} dataSource={filtered} columns={cols} rowKey="id" />
          <Pagination
            current={page}
            total={data?.total_count}
            onChange={setPage}
            pageSize={10}
          />
        </div>
      )}
    </div>
  );
};

export default Products
