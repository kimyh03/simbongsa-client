import React from "react";
import { useMutation, useQuery } from "react-apollo";
import { withRouter } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "../../../Components/Loader";
import { applicationStatus } from "../../../Entities/Application.entity";
import UseInput from "../../../Hooks/UseInput";
import PostDetailPresenter from "./PostDetail.presenter";
import {
  TOGGLE_APPLY,
  COMPLETE_POST,
  CREATE_QUESTION,
  DELETE_POST,
  GET_POST_DETAIL,
  HANDLE_APPLICATION,
  TOGGLE_LIKE,
  TOGGLE_OPEN_CLOSE,
  CREATE_ANSWER,
} from "./PostDetail.queries";

export default withRouter(
  ({
    match: {
      params: { id },
    },
  }) => {
    const postId = +id;

    const { data, loading } = useQuery(GET_POST_DETAIL, {
      variables: { postId },
    });
    const [deletePost] = useMutation(DELETE_POST, { variables: { postId } });
    const [toggleOpenAndClose] = useMutation(TOGGLE_OPEN_CLOSE, {
      variables: { postId },
    });
    const questionText = UseInput("");
    const [createQuestion] = useMutation(CREATE_QUESTION, {
      variables: { postId, text: questionText.value },
    });
    const answerText = UseInput("");
    const [createAnswer] = useMutation(CREATE_ANSWER, {
      variables: { postId, text: answerText.value },
    });
    const [completePost] = useMutation(COMPLETE_POST, {
      variables: { postId },
    });
    const [toggleLike] = useMutation(TOGGLE_LIKE, { variables: { postId } });
    const [toggleApply] = useMutation(TOGGLE_APPLY, {
      variables: { postId },
    });
    const [handleApply] = useMutation(HANDLE_APPLICATION);

    if (loading) return <Loader />;
    else if (!loading && data?.getPostDetail?.post) {
      const {
        getPostDetail: {
          isMine,
          isLiked,
          isApplied,
          post,
          questions,
          applications,
        },
      } = data;

      const onDeleteBtnClick = async () => {
        try {
          await deletePost();
        } catch (error) {
          toast.error(error.message);
        }
      };

      const onOpenNCloseBtnClick = async () => {
        try {
          await toggleOpenAndClose();
        } catch (error) {
          toast.error(error.message);
        }
      };

      const handleQSubmit = async () => {
        try {
          await createQuestion();
        } catch (error) {
          toast.error(error.message);
        }
      };

      const handleASubmit = async () => {
        try {
          await createAnswer();
        } catch (error) {
          toast.error(error.message);
        }
      };

      const onCompleteBtnClick = async () => {
        try {
          await completePost();
        } catch (error) {
          toast.error(error.message);
        }
      };

      const onLikeBtnClick = async () => {
        try {
          await toggleLike();
        } catch (error) {
          toast.error(error.message);
        }
      };

      const onApplyBtnClick = async () => {
        try {
          await toggleApply();
        } catch (error) {
          toast.error(error.message);
        }
      };

      const onHnadleApplyBtnClick = async (event: any) => {
        const status = event.target.value;
        try {
          if (status === applicationStatus.accepted) {
            await handleApply({
              variables: { postId, status: applicationStatus.accepted },
            });
          } else if (status === applicationStatus.rejected) {
            await handleApply({
              variables: { postId, status: applicationStatus.rejected },
            });
          }
        } catch (error) {
          toast.error(error.message);
        }
      };
      return (
        <PostDetailPresenter
          onDeleteBtnClick={onDeleteBtnClick}
          onOpenNCloseBtnClick={onOpenNCloseBtnClick}
          handleQSubmit={handleQSubmit}
          questionText={questionText}
          handleASubmit={handleASubmit}
          answerText={answerText}
          onCompleteBtnClick={onCompleteBtnClick}
          onLikeBtnClick={onLikeBtnClick}
          onApplyBtnClick={onApplyBtnClick}
          onHnadleApplyBtnClick={onHnadleApplyBtnClick}
          isMine={isMine}
          isLiked={isLiked}
          isApplied={isApplied}
          post={post}
          questions={questions}
          applications={applications}
        />
      );
    } else {
      return null;
    }
  }
);
