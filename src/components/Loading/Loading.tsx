import { LoadingText, LoadingWrapper, Spinner } from "./styles";

export function Loading() {
  return (
    <LoadingWrapper>
      <Spinner />
      <LoadingText>Carregando...</LoadingText>
    </LoadingWrapper>
  );
}
