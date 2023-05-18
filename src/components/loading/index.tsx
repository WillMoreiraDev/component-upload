import { LoadingStyles } from "./styles";

export function Loading() {
  return (
    <LoadingStyles>
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </LoadingStyles>
  );
}
