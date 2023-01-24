import styled from "styled-components";

export const Text = styled.text`
  font-size: ${({ fontSize }: { fontSize: string }) => fontSize};
  font-weight: ${({ fontWeight }: any) => fontWeight};
  line-height: ${({ lineHeight }: any) => lineHeight};
  color: ${({ color }: any) => color};
  font-family: ${({ fontFamily }: any) =>
    fontFamily ? "Roboto" : "sans-serif"};
  font-style: ${({ fontStyle }: any) => (fontStyle ? fontStyle : "normal")};
  cursor: ${({ cursor }: any) => cursor};
  text-transform: ${({ textTransform }: any) => textTransform};
  opacity: ${({ opacity }: any) => opacity};
`;
