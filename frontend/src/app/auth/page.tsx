"use client";

import { useState } from "react";
import { PrimaryButton } from "@/components/buttons";
import styles from "./page.module.scss";

const Page = () => {
  const [activeTab, setActiveTab] = useState("login" || "register");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  fetch("http://localhost:8080/getUsers", {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then((res) => res.json())
    .then((data) => console.log(data));

  const createUser = (e: React.FormEvent) => {
    e.preventDefault();

    const user = {
      Username: username,
      Email: email,
      Password: password,
    };

    fetch("http://localhost:8080/createUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("POST запрос успешно выполнен:", data);
      })
      .catch((error) => {
        console.error("Произошла ошибка при выполнении POST запроса:", error);
      });
  };

  if (activeTab === "register") {
    return (
      <div className={styles.Page}>
        <div className={styles.Actions}>
          <button onClick={() => setActiveTab("login")}>Войти</button>
          <button
            onClick={() => setActiveTab("register")}
            className={styles.Active}
          >
            Регистрация
          </button>
        </div>
        <form onSubmit={createUser}>
          <div className={styles.Inputs}>
            <input
              placeholder="Username"
              name="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              placeholder="Email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              placeholder="Password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <PrimaryButton type="submit">Создать аккаунт</PrimaryButton>
        </form>
      </div>
    );
  }

  return (
    <div className={styles.Page}>
      <div className={styles.Actions}>
        <button onClick={() => setActiveTab("login")} className={styles.Active}>
          Войти
        </button>
        <button onClick={() => setActiveTab("register")}>Регистрация</button>
      </div>
      <form>
        <div className={styles.Inputs}>
          <input placeholder="Username" name="username" type="text" />
          <input placeholder="Password" name="password" type="password" />
        </div>
        <PrimaryButton type="button">Войти</PrimaryButton>
      </form>
    </div>
  );
};

export default Page;
