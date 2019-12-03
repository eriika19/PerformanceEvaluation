const User = props => {
  const { user, thumbnail } = props;

  return (
    <article className="media">
      <figure className="media-left">
        <p className="image is-96x96 is-rounded">
          <img className="is-rounded" src={thumbnail} />
        </p>
      </figure>
      <div className="media-content">
        <div className="content">
          <p>
            <strong>{user}</strong> <small>@johnsmith</small> <small>31m</small>
          </p>
        </div>
      </div>
    </article>
  );
};

export default User;
