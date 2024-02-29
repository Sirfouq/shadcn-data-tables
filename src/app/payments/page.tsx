// Import necessary hooks and components
import React, { useState, useEffect } from 'react';
import { Payment, columns } from "./columns"; // Adjust the import path as necessary
import { DataTable } from "./data-table"; 
// Adjust the import path as necessary

async function getData(): Promise<Payment[]> {
  // Your existing data fetching logic
  return [
    {
        id: "728ed52f",
        amount: 100,
        status: "pending",
        email: "m@example.com",
      },
      {
        id: "489e1d42",
        amount: 125,
        status: "processing",
        email: "example@gmail.com",
      },
      {
        id: "489e1d42",
        amount: 125,
        status: "processing",
        email: "example@gmail.com",
      },
      {
        id: "489e1d42",
        amount: 125,
        status: "processing",
        email: "example@gmail.com",
      },
      {
        id: "489e1d42",
        amount: 125,
        status: "processing",
        email: "example@gmail.com",
      },
      {
        id: "489e1d42",
        amount: 125,
        status: "processing",
        email: "example@gmail.com",
      },
      {
        id: "489e1d42",
        amount: 125,
        status: "processing",
        email: "example@gmail.com",
      },
      {
        id: "489e1d42",
        amount: 125,
        status: "processing",
        email: "example@gmail.com",
      },
      {
        id: "489e1d42",
        amount: 125,
        status: "processing",
        email: "example@gmail.com",
      },
      {
        id: "489e1d42",
        amount: 125,
        status: "processing",
        email: "example@gmail.com",
      },
      {
        id: "728ed52f",
        amount: 100,
        status: "pending",
        email: "m@example.com",
      },
      {
        id: "489e1d42",
        amount: 125,
        status: "processing",
        email: "example@gmail.com",
      },
      {
        id: "489e1d42",
        amount: 125,
        status: "processing",
        email: "example@gmail.com",
      },
      {
        id: "489e1d42",
        amount: 125,
        status: "processing",
        email: "example@gmail.com",
      },
      {
        id: "489e1d42",
        amount: 125,
        status: "processing",
        email: "example@gmail.com",
      },
      {
        id: "489e1d42",
        amount: 125,
        status: "processing",
        email: "example@gmail.com",
      },
      {
        id: "489e1d42",
        amount: 125,
        status: "processing",
        email: "example@gmail.com",
      },
      {
        id: "489e1d42",
        amount: 125,
        status: "processing",
        email: "example@gmail.com",
      },
      {
        id: "489e1d42",
        amount: 125,
        status: "processing",
        email: "example@gmail.com",
      },
      {
        id: "7373gh",
        amount: 125,
        status: "processing",
        email: "fouk@gmail.com",
      }
    // Your data
  ];
}

function DemoPage() {
  const [data, setData] = useState<Payment[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData();
      setData(result);
    };

    fetchData().catch(console.error);
  }, []);

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}

export default DemoPage;
