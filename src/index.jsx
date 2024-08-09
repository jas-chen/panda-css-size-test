import { css } from "../styled-system/css/css";

const styles = css({
  display: "flex",
  justifyContent: "center",
  color: "primary",
});

export function App() {
  return (
    <div className={styles}>
      <p>Hello World</p>
    </div>
  );
}
