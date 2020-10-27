import React from "react";
import ReactDOM from "react-dom";

import CommentDetail from "./CommentDetail";
import faker from "faker";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard />
      <CommentDetail
        author="Sam"
        date="18/10/2020"
        text="Nice Blog!"
        imageSrc={faker.image.avatar()}
      />
      <CommentDetail
        author="Thomas"
        date="13/10/2020"
        text="I do not like it!"
        imageSrc={faker.image.avatar()}
      />
      <CommentDetail
        author="Daniel"
        date="11/08/2020"
        text="That is cool"
        imageSrc={faker.image.avatar()}
      />
      <CommentDetail
        author="Jack"
        date="04/07/10/2020"
        text="Try something different"
        imageSrc={faker.image.avatar()}
      />
      <CommentDetail
        author="Peter"
        date="04/06/10/2020"
        text="Go ahead with that"
        imageSrc={faker.image.avatar()}
      />
      <CommentDetail
        author="Robert"
        date="12/05/2020"
        text="Oh Arek I love you"
        imageSrc={faker.image.avatar()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
