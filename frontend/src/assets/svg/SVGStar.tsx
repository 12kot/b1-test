interface Props {
  notActive?: boolean
}

export const SVGStar = ({ notActive}: Props) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11.9999 18.26L4.94691 22.208L6.52191 14.28L0.586914 8.792L8.61391 7.84L11.9999 0.5L15.3859 7.84L23.4129 8.792L17.4779 14.28L19.0529 22.208L11.9999 18.26Z"
        fill={notActive ? "#e2edea" : "#B4D2C6"}
      />
    </svg>
  );
};
