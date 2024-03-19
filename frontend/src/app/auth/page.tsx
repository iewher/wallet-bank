"use client";

import React, { useState } from "react";
import { PrimaryButton } from "@/components/buttons";
import styles from "./page.module.scss";

const Page = () => {
  const [activeTab, setActiveTab] = useState("login" || "register");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const getUsers = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      console.log("Delayed for 3 second.");
    }, 3000);

    fetch("http://localhost:8080/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Username: username,
        Password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));

    setLoading(false);
  };

  const createUser = (e: React.FormEvent) => {
    e.preventDefault();

    fetch("http://localhost:8080/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Username: username,
        Email: email,
        password: password,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
      })
      .then((data) => {
        console.log("POST запрос успешно выполнен");
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
      <form onSubmit={getUsers}>
        <div className={styles.Inputs}>
          <input
            placeholder="Username"
            name="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            placeholder="Password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <PrimaryButton type="submit" loading={loading}>
          Войти
        </PrimaryButton>
      </form>
    </div>
  );
};

export default Page;
