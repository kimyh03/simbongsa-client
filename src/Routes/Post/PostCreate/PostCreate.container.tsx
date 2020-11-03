import React, { FormEvent, useState } from "react";
import { useMutation } from "react-apollo";
import { toast } from "react-toastify";
import {
  postCategoryEnum,
  postRigionEnum,
} from "../../../Entities/Post.entity";
import UseInput from "../../../Hooks/UseInput";
import PostCreatePresenter from "./PostCreate.presenter";
import { CREAT_POST } from "./PostCreate.queries";

export default () => {
  const title = UseInput("");
  const description = UseInput("");
  const adress = UseInput("");
  const host = UseInput("");
  const date = UseInput("");
  const numOfRecruitment = UseInput("");
  const recognizedHours = UseInput("");
  const [category, setCategory] = useState(postCategoryEnum);
  const [rigion, setRigion] = useState(postRigionEnum);

  const [createPost] = useMutation(CREAT_POST, {
    variables: {
      title: title.value,
      description: description.value,
      adress: adress.value,
      host: host.value,
      date: date.value,
      numOfRecruitment: +numOfRecruitment.value,
      recognizedHours: +recognizedHours.value,
      category,
      rigion,
    },
  });

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      if (category === postCategoryEnum || rigion === postRigionEnum) {
        toast.error("모든 항목을 입력해 주세요.");
      } else if (window.confirm("모집공고를 생성하시겠습니까?")) {
        await createPost();
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      window.location.href = "/";
    }
  };

  return (
    <PostCreatePresenter
      title={title}
      description={description}
      adress={adress}
      host={host}
      date={date}
      category={category}
      setCategory={setCategory}
      rigion={rigion}
      setRigion={setRigion}
      numOfRecruitment={numOfRecruitment}
      recognizedHours={recognizedHours}
      onSubmit={onSubmit}
    />
  );
};
