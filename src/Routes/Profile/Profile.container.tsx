import axios from "axios";
import React, { useState } from "react";
import { useMutation, useQuery } from "react-apollo";
import { withRouter } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "../../Components/Loader";
import ProfilePresenter from "./Profile.presenter";
import { GET_PROFILE, LOCAL_LOG_OUT } from "./Profile.queries";

export default withRouter(
  ({
    match: {
      params: { id },
    },
  }) => {
    const [localLogOut] = useMutation(LOCAL_LOG_OUT);
    const onClickLogOut = async () => {
      await localLogOut();
      window.location.href = "/";
    };
    const { data, loading } = useQuery(GET_PROFILE, {
      variables: { userId: +id },
    });

    const [avatar, setAvatar] = useState("");
    const handleSubmit: React.FormEventHandler = async (event) => {
      event.preventDefault();
      try {
        if (!avatar) throw Error("등록할 사진 파일을 선택해 주세요.");
        const formData = new FormData();
        formData.append("avatar", avatar);

        const data = await axios({
          method: "post",
          url: "http://localhost:3000/upload",
          data: formData,
          headers: { "content-type": "multipart/form-data" },
        });
        console.log(data);
      } catch (error) {
        toast.error(error.message);
      }
      return null;
    };
    const onChange = (event: any) => {
      setAvatar(event.target.files[0]);
    };

    if (loading) return <Loader />;
    else if (data?.getProfile?.user) {
      const { isSelf, user, likes, applications } = data?.getProfile;
      return (
        <ProfilePresenter
          onClickLogOut={onClickLogOut}
          isSelf={isSelf}
          user={user}
          likes={likes}
          applications={applications}
          handleSubmit={handleSubmit}
          onChange={onChange}
        />
      );
    } else {
      return null;
    }
  }
);
