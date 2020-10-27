import React from "react";
import { useMutation, useQuery } from "react-apollo";
import Loader from "../../Components/Loader";
import ProfilePresenter from "./Profile.presenter";
import { GET_PROFILE, LOCAL_LOG_OUT } from "./Profile.queries";

export default () => {
  const [localLogOut] = useMutation(LOCAL_LOG_OUT);
  const onClickLogOut = () => {
    localLogOut();
  };
  const { data, loading } = useQuery(GET_PROFILE, { variables: { userId: 3 } });
  if (loading) return <Loader />;
  else {
    const { isSelf, user, likes, applications } = data?.getProfile;
    //console.log(isSelf, user, likes, applications);
    return (
      <ProfilePresenter
        onClickLogOut={onClickLogOut}
        isSelf={isSelf}
        user={user}
        likes={likes}
        applications={applications}
      />
    );
  }
};
