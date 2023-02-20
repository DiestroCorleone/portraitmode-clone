import Button from "react-bootstrap/Button";

export default function Newsbar(params) {
  return (
    <div className="col text-bg-dark text-center p-2">
      <strong>New!</strong> The PortraitMode Android app is finally here! 🎉{" "}
      <Button>Download now</Button>
    </div>
  );
}
