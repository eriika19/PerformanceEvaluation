const Oops = () => (
  <div className='tile is-parent'>
    <article className='tile is-child notification is-danger'>
      <p className='title'>Oops!</p>
      <p className='subtitle'>There is an error...</p>
      <div className='content'>
        Looks like you're offline and this page is not cached either. Try again
        when you're online.
      </div>
    </article>
  </div>
);

export default Oops;
