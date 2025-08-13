export type TAvaliableLanguages = "en" | "pt-BR" | "es";

export interface IAnchorComponentProps {
  disabled?: boolean;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
}
