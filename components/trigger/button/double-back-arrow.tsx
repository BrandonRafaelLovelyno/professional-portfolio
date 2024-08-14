import BackArrow from "./back-arrow";

interface Props {
  detail: {
    onClick: () => void;
    isShow: boolean;
    caption: string;
  };
  selection: {
    onClick: () => void;
    isShow: boolean;
    caption: string;
  };
}

const DoubleBackArrow: React.FC<Props> = ({ detail, selection }) => {
  return (
    <>
      <BackArrow {...detail} />
      <BackArrow {...selection} />
    </>
  );
};

export default DoubleBackArrow;
