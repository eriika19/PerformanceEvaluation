  
import { Component } from "react";
import Router from "next/router";
import Link from "next/link";

class QuestionBtn extends Component {
  prefetchQuestionPage = () => {
    Router.prefetch(`/question?id=${this.props.id}`);
  };

  render() {
    const { id, text } = this.props;
    return (
      <div className="has-text-centered">
        <Link as={`/question/${id}`} href={`/question?id=${id}`}>
          <button
            className="button is-orange is-rounded"
            id={`question-${id}`}
            onMouseEnter={this.prefetchQuestionPage}
          >
            {text}
          </button>
        </Link>
        <style jsx global>
          {`
            .button.is-orange {
              background: #f5a623;
              color: #fff;
              border: solid 1px #f5a623;
            }
            .button.is-orange:hover {
              background: transparent;
              color: #7a6ff0;
              border: solid 1px #7a6ff0;
            }
          `}
        </style>
      </div>
    );
  }
}

export default QuestionBtn;
