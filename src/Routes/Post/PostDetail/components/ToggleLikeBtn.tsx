import React, { useState } from "react";
import { useMutation } from "react-apollo";
import { toast } from "react-toastify";
import styled from "styled-components";
import { HeartEmpty, HeartFull } from "../../../../Utils/Icons";
import { TOGGLE_LIKE } from "../PostDetail.queries";

interface IProps {
  isLiked: boolean;
  postId: number;
  isLoggedIn: boolean;
}

const Button = styled.button`
  background: none;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-self: flex-end;
  align-self: flex-end;
  height: 7%;
  border-top: ${(props) => props.theme.border};
`;

const ToggleLikeBtn: React.FunctionComponent<IProps> = ({
  isLiked,
  postId,
  isLoggedIn,
}) => {
  const [isLikeS, setIsLike] = useState(isLiked);
  const [toggleLike] = useMutation(TOGGLE_LIKE, {
    variables: { postId: +postId },
  });
  const onClick = async () => {
    if (!isLoggedIn) {
      toast.error("로그인 후 이용 할 수 있습니다.");
    } else {
      try {
        if (isLikeS === true) {
          setIsLike(false);
          toast.warning("관심 목록에서 제거 되었습니다.");
        } else {
          setIsLike(true);
          toast.success("관심 목록에 추가 되었습니다.");
        }
        await toggleLike();
      } catch (error) {
        toast.error(error);
      }
    }
  };
  return (
    <Button onClick={onClick}>
      {isLikeS ? <HeartFull /> : <HeartEmpty />}
    </Button>
  );
};
export default ToggleLikeBtn;
