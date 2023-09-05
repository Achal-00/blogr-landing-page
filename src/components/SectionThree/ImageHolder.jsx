const width = screen.width;

export default function ImageHolder() {
  return (
    <div className="section-3-holder">
      <img
        src={
          width <= 1024
            ? "illustration-laptop-mobile.svg"
            : "illustration-laptop-desktop.svg"
        }
        alt=""
      />
    </div>
  );
}
