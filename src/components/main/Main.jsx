import Counter from "../counter/Counter"

const Main = (props) => {
  const { classWrapper, classMain, wrapMain } = props;
  return (
    <>
      <main className={classMain}>
        <div className={{ classWrapper } + { wrapMain }}>
          {console.log('classWrapper, wrapMain', classWrapper, wrapMain)}
          <Counter />
        </div>
      </main>
    </>
  )
}

export default Main