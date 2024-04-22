"use client";

import { useState } from "react";
import { PrimaryButton } from "@/components/buttons";
import { login } from "@/lib/backend/user";
import axios from "axios";
import styles from "./page.module.scss";

const Page = () => {
  const [activeTab, setActiveTab] = useState("login" || "register");
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const getUsers = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

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
      .then((data) => data === true && login());

    setLoading(false);
  };

  const createUser = (e: React.FormEvent) => {
    e.preventDefault();

    fetch("http://localhost:8000/auth/sign-up", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        username: username,
        password: password,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
      })
      .then((data) => {
        console.log("POST запрос успешно выполнен", data);
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
              placeholder="Name"
              name="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              placeholder="Username"
              name="username"
              type="username"
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
