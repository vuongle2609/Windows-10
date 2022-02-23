import WindowsBase from "./WindowsBase";
import useStore from "../../store";

const Vscode = () => {
  const { setVscode } = useStore();

  return (
    <WindowsBase name="Visual Studio Code" resizer="vscode" appClose={setVscode}>
      <iframe
        src="https://vscode.dev/"
        allowfullscreen
        className="w-full h-full"
      ></iframe>
    </WindowsBase>
  );
};

export default Vscode;
