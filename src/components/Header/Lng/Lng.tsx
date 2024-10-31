import { Button } from "components";

const HeaderLng = () => {
  return (
    <Button buttonType="transparent" aria-label="Switch to Russian">
      <img src="https://flagsapi.com/US/flat/64.png" alt="en" loading="lazy" />
      <p>EN</p>
    </Button>
  );
};

export default HeaderLng;
