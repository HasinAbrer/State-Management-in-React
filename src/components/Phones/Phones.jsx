import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis } from "recharts";
// import { RechartsDevtools } from "recharts/devtools";

const Phones = () => {
  const [phones, setPhones] = useState([]);
  useEffect(() => {
    // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    // .then(res=>res.json())
    // .then(data=>setPhones(data))

    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((data) => {
        const phoneData = data.data.data;
        const phonesWithFakeData = phoneData.map((phone) => {
          const obj = {
            name: phone.phone_name,
            price: parseInt(phone.slug.split("-")[1]),
          };
          return obj;
        });
        console.log(phonesWithFakeData);
        setPhones(phonesWithFakeData);
      });
  }, []);
  return (
    <div>
      <h2 className="text-3xl">{phones.length}</h2>
      <BarChart
        width={1200}
        height={400}
        data={phones}
      >
        <Bar dataKey="price" fill="#8884d8" />
        {/* <XAxis dataKey={name}></XAxis> */}
        <YAxis></YAxis>
      </BarChart>
    </div>
  );
};

export default Phones;
