import PrimaryButton from "../../../components/UI/PrimaryButton";
import styles from "./PaperPostForm.module.scss";

function PaperPostForm() {
  return (
    <div>
      <form>
        <PrimaryButton disable={isDisabled}>생성하기</PrimaryButton>
      </form>
    </div>
  );
}

export default PaperPostForm;
