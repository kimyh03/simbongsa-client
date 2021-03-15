import axios from "axios";
import React, { useState } from "react";
import { useMutation, useQuery } from "react-apollo";
import { withRouter } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "../../Components/Loader";
import ProfilePresenter from "./Profile.presenter";
import { EDIT_AVATAR, GET_PROFILE, LOCAL_LOG_OUT } from "./Profile.queries";

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

    const [editAvatar] = useMutation(EDIT_AVATAR);

    const [avatar, setAvatar] = useState<any>();
    const handleSubmit: React.FormEventHandler = async (event) => {
      event.preventDefault();
      try {
        if (!avatar) throw Error("등록할 사진 파일을 선택해 주세요.");
        if (avatar.size > 2000000) {
          toast.warning(
            "2MB 이하의 크기를 가진 이미지만 업로드 할 수 있습니다."
          );
        }
        const formData = new FormData();
        formData.append("file", avatar);
        const data = await axios({
          method: "post",
          url: "https://api.hoony-portfolio.tk/upload",
          data: formData,
          headers: { "content-type": "multipart/form-data" },
        });
        await editAvatar({ variables: { avatarKey: data.data } });
        window.location.reload();
      } catch (error) {
        toast.error(error.message);
      }
    };
    const onChange = (event: any) => {
      setAvatar(event.target.files[0]);
    };

    if (loading) return <Loader />;
    else if (data?.getProfile?.user) {
      const { isSelf, user } = data?.getProfile;
      return (
        <ProfilePresenter
          onClickLogOut={onClickLogOut}
          isSelf={isSelf}
          user={user}
          likes={user.likes}
          applications={user.applications}
          handleSubmit={handleSubmit}
          onChange={onChange}
        />
      );
    } else {
      return null;
    }
  }
);
