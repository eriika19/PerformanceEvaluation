import { Component } from "react";
import Link from "next/link";

class QuestionBtn extends Component {
  prefetchQuestionPage = () => {
    Router.prefetch(`/question?id=${this.props.id}`);
  };

  render() {
    const { open } = this.props;
    return (
      <div className="has-text-centered">
        <Link as={`/question/${id}`} href={`/question?id=${id}`}>
          <button
            className="button is-info is-outlined is-rounded"
            id={`question-${id}`}
            onMouseEnter={this.prefetchQuestionPage}
          >
            {text}
          </button>
        </Link>
      </div>
    );
  }
}

export default QuestionBtn;
