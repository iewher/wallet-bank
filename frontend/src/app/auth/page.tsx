import React from "react";

// const [data, setData] = useState<User[]>([]);

// const aaa = {
//   name: "John Doe",
//   password: "secret123",
// };

// const url = "http://localhost:8080/";
// useEffect(() => {
//   fetch(url + "get")
//     .then((res) => {
//       if (!res.ok) {
//         throw new Error("Ошибка при получении данных");
//       }
//       return res.json();
//     })
//     .then((data) => {
//       setData(data);
//     });
// }, []);

// const post = () => {
//   fetch("http://localhost:8080/post", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(aaa),
//   })
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
//       return response.json();
//     })
//     .then((data) => {
//       console.log("POST запрос успешно выполнен:", data);
//     })
//     .catch((error) => {
//       console.error("Произошла ошибка при выполнении POST запроса:", error);
//     });
// };

const Page = () => {
  return <div>Auth</div>;
};

export default Page;
