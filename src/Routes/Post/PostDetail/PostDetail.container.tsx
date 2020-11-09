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
  TOGGLE_OPEN_CLOSE,
  CREATE_ANSWER,
  GET_ISLOGGEDIN,
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
    const [createAnswer] = useMutation(CREATE_ANSWER);
    const [completePost] = useMutation(COMPLETE_POST, {
      variables: { postId },
    });
    const [toggleApply] = useMutation(TOGGLE_APPLY, {
      variables: { postId },
    });
    const [handleApply] = useMutation(HANDLE_APPLICATION);
    const { data: isLoggedInData, loading: isLoggedInLoading } = useQuery(
      GET_ISLOGGEDIN
    );
    if (loading || isLoggedInLoading) return <Loader />;
    else if (!isLoggedInLoading && !loading && data?.getPostDetail?.post) {
      const isLoggedIn = isLoggedInData.isLoggedIn;
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
        if (window.confirm("모집 공고를 삭제하시겠습니까?")) {
          try {
            await deletePost();
          } catch (error) {
            toast.error(error.message);
          } finally {
            window.location.href = "/";
          }
        }
      };

      const onOpenNCloseBtnClick = async () => {
        let message;
        post.isOpened
          ? (message = "인원모집을 중단하시겠습니까?")
          : (message = "인원 모집을 시작하시겠습니까?");
        if (window.confirm(message)) {
          try {
            await toggleOpenAndClose();
          } catch (error) {
            toast.error(error.message);
          } finally {
            window.location.reload();
          }
        }
      };

      const handleQSubmit = async () => {
        if (!isLoggedIn) {
          toast.error("로그인 후 이용 할 수 있습니다.");
        } else {
          if (window.confirm("질문을 등록하시겠습니까?")) {
            try {
              await createQuestion();
            } catch (error) {
              toast.error(error.message);
            } finally {
              window.location.reload();
            }
          }
        }
      };

      const handleASubmit = async (event: any) => {
        event.preventDefault();
        const questionId = +event.target.id;
        const text = event.target.children[0].value;
        if (window.confirm("답변을 등록하시겠습니까?")) {
          try {
            await createAnswer({ variables: { questionId, text } });
          } catch (error) {
            toast.error(error.message);
          } finally {
            window.location.reload();
          }
        }
      };

      const onCompleteBtnClick = async () => {
        if (
          window.confirm(
            "활동이 성공적으로 마무리 되었습니까? 참가자에게 봉사활동 인증서가 발급됩니다."
          )
        ) {
          try {
            await completePost();
          } catch (error) {
            toast.error(error.message);
          } finally {
            window.location.reload();
          }
        }
      };

      const onApplyBtnClick = async () => {
        if (!isLoggedIn) {
          console.log(isLoggedIn);
          toast.error("로그인 후 이용 할 수 있습니다.");
        } else {
          let message;
          isApplied
            ? (message = "활동신청을 취소하시겠습니까?")
            : (message = "활동을 신청하시겠습니까?");

          if (window.confirm(message)) {
            try {
              await toggleApply();
            } catch (error) {
              toast.error(error.message);
            } finally {
              window.location.reload();
            }
          }
        }
      };

      const onHnadleApplyBtnClick = async (event: any) => {
        const status = event.target.value;
        const applicationId = +event.target.id;
        try {
          if (status === applicationStatus.accepted) {
            if (
              window.confirm("해당 사용자의 활동지원 신청을 수락하시겠습니까?")
            ) {
              await handleApply({
                variables: {
                  applicationId,
                  status: applicationStatus.accepted,
                },
              });
            }
          } else if (status === applicationStatus.rejected) {
            if (
              window.confirm("해당 사용자의 활동지원 신청을 거절하시겠습니까?")
            ) {
              await handleApply({
                variables: {
                  applicationId,
                  status: applicationStatus.rejected,
                },
              });
            }
          }
        } catch (error) {
          toast.error(error.message);
        } finally {
          window.location.reload();
        }
      };

      return (
        <PostDetailPresenter
          onDeleteBtnClick={onDeleteBtnClick}
          onOpenNCloseBtnClick={onOpenNCloseBtnClick}
          handleQSubmit={handleQSubmit}
          questionText={questionText}
          handleASubmit={handleASubmit}
          onCompleteBtnClick={onCompleteBtnClick}
          isLiked={isLiked}
          onApplyBtnClick={onApplyBtnClick}
          onHnadleApplyBtnClick={onHnadleApplyBtnClick}
          isMine={isMine}
          isApplied={isApplied}
          post={post}
          questions={questions}
          applications={applications}
          isLoggedIn={isLoggedIn}
        />
      );
    } else {
      return null;
    }
  }
);
