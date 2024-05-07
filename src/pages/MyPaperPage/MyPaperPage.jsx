import MyPaperCardList from "./components/MyPaperCardList";

function MyPaperPage() {
  const INITIAL_ID = 6692;
  return (
    <div className="page-wrapper">
      <MyPaperCardList id={INITIAL_ID} />
    </div>
  );
}

export default MyPaperPage;
