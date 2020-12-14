import Button from "./Button";

const ButtonGroup = () => {
  return (
    <div className="btn-group">
      <Button text="Hotel" size="btn-sm" />
      <Button text="Motel" size="btn-sm" color="btn-milky" />
      <Button text="Hostel" size="btn-sm" color="btn-milky" />
    </div>
  );
};

export default ButtonGroup;
