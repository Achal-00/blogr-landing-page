const width = screen.width;

export default function ImageHolder() {
  return (
    <div className="section-1-holder">
      <img
        src={
          width <= 1024
            ? "illustration-editor-mobile.svg"
            : "illustration-editor-desktop.svg"
        }
        alt="editor"
      />
    </div>
  );
}
