import WindowsBase from "./WindowsBase";

const Vscode = () => {
  return (
    <WindowsBase name="Visual Studio Code">
      <iframe
        src="https://vscode.dev/"
        allowfullscreen
        className="w-full h-full"
      ></iframe>
    </WindowsBase>
  );
};

export default Vscode;
