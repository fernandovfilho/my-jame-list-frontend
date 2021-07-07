import styles from "./styles.module.scss";

export function ModalComment({ comment }) {
  return (
    <div className={styles.container}>
      <p className={styles.comment}>{comment}</p>
    </div>
  );
}
