"use client";

import { useState } from "react";
import { SecondaryButton, PrimaryButton } from "@/components/buttons";
import Input from "@/components/inputs";
import SidebarProfile from "./sidebar";
import Modal from "antd/es/modal/Modal";
import { FiSave, FiPlus } from "react-icons/fi";
import styles from "./page.module.scss";

interface ListProps {
  id: number;
  postTitle: string;
  content: string;
}

interface PostForm extends HTMLFormElement {
  postTitle: HTMLInputElement;
  content: HTMLInputElement;
}

const ProfilePage = () => {
  const [list, setList] = useState<ListProps[]>([]);
  const [openModal, setOpenModal] = useState(false);

  const createPost = (newPost: ListProps) => {
    const id = list.length + 1;
    const post = { ...newPost, id };
    setList([...list, post]);
  };

  const deletePost = (id: number) => {
    setList(list.filter((el) => el.id !== id));
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const target = e.target as PostForm;

    const post: ListProps = {
      id: list.length + 1,
      postTitle: target.postTitle.value,
      content: target.content.value,
    };

    await createPost(post);

    setOpenModal(false);

    target.postTitle.value = "";
    target.content.value = "";
  };

  return (
    <div className={styles.Page}>
      <SidebarProfile />
      <div className={styles.Content}>
        <h2>Страница пользователя</h2>
        <SecondaryButton onClick={() => setOpenModal(true)} icon={<FiPlus />}>
          Добавить пост
        </SecondaryButton>
        <h3>
          {list.length === 0
            ? "На данный момент постов нет..."
            : `Всего постов написано: ${list.length}`}
        </h3>
        {list.map((el) => (
          <div className={styles.Post}>
            <h4>{`${el.id}. ${el.postTitle}`}</h4>
            <p>{el.content}</p>
            <PrimaryButton onClick={() => deletePost(el.id)}>x</PrimaryButton>
          </div>
        ))}
      </div>
      <Modal
        centered
        open={openModal}
        onCancel={() => setOpenModal(false)}
        className={styles.Modal}
        footer={null}
      >
        <h3>Добавить пост</h3>
        <form onSubmit={submit}>
          <label htmlFor="postTitle">Название</label>
          <Input name="postTitle" />
          <label htmlFor="content">Текст</label>
          <Input name="content" />
          <PrimaryButton type="submit" icon={<FiSave />}>
            Сохранить
          </PrimaryButton>
        </form>
      </Modal>
    </div>
  );
};

export default ProfilePage;
