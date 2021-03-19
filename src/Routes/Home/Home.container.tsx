import React, { useState } from "react";
import { useQuery } from "react-apollo";
import Loader from "../../Components/Loader";
import UseInput from "../../Hooks/UseInput";
import List from "./components/List";
import Filter from "./components/Filter";
import { GET_POSTS } from "./Home.queries";
import { GET_ISLOGGEDIN } from "../Post/PostDetail/PostDetail.queries";

export default () => {
  const [categories, setCategories] = useState<{ list: string[] }>({
    list: [],
  });
  const [rigions, setRigions] = useState<{ list: string[] }>({
    list: [],
  });
  const [page, setPage] = useState(1);
  const [openOnly, setOpenOnly] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const { data, loading } = useQuery(GET_POSTS, {
    variables: {
      categories: categories.list,
      rigions: rigions.list,
      page,
      openOnly,
      searchTerm,
    },
  });

  const SearchTermInput = UseInput("");
  const onSearch = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    setPage(1);
    setSearchTerm(String(SearchTermInput.value));
  };

  const onClickCategory = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setPage(1);
    setSearchTerm(String(SearchTermInput.value));
    const selectedCategory = event.currentTarget.value;
    const exist = categories.list.includes(selectedCategory);
    let array;
    if (exist) {
      array = categories.list;
      array = array.filter((item) => item !== selectedCategory);
      setCategories({ list: array });
    } else {
      array = [...categories.list, selectedCategory];
      setCategories({ list: array });
    }
  };

  const onClickRigion = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setPage(1);
    setSearchTerm(String(SearchTermInput.value));
    const selectedRigion = event.currentTarget.value;
    const exist = rigions.list.includes(selectedRigion);
    let array;
    if (exist) {
      array = rigions.list;
      array = array.filter((item) => item !== selectedRigion);
      setRigions({ list: array });
    } else {
      array = [...rigions.list, selectedRigion];
      setRigions({ list: array });
    }
  };

  const onClickPage = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setSearchTerm(String(SearchTermInput.value));
    const selectedPage = event.currentTarget.value;
    setPage(+selectedPage);
    window.scrollTo(0, 150);
  };

  const onCheckIsOpen = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.preventDefault();
    setSearchTerm(String(SearchTermInput.value));
    setPage(1);
    setOpenOnly(!openOnly);
  };
  const { data: isLoggedInData, loading: isLoggedInLoading } = useQuery(
    GET_ISLOGGEDIN
  );
  if (!isLoggedInLoading) {
    const isLoggedIn = isLoggedInData.isLoggedIn;
    return (
      <>
        <Filter
          onSearch={onSearch}
          onClickCategory={onClickCategory}
          onClickRigion={onClickRigion}
          onCheckIsOpen={onCheckIsOpen}
          categories={categories.list}
          rigions={rigions.list}
          SearchTermInput={SearchTermInput}
          openOnly={openOnly}
          isLoggedIn={isLoggedIn}
        />
        {!loading && data?.getPosts ? (
          <List
            onClickPage={onClickPage}
            data={data.getPosts}
            currentPage={page}
          />
        ) : (
          <Loader height="40vh" />
        )}
      </>
    );
  } else {
    return null;
  }
};
