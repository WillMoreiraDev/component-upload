import { UploadComponent } from "./components/UploadComponent";

import GlobalStyle from "./styles/global";

function App() {
  const saveDocuments = () => {
    console.log("Proxima etapa");
  };
  return (
    <>
      <GlobalStyle />
      <UploadComponent
        typeDoc="address"
        limitUpload={5}
        onReturn={saveDocuments}
        onSkip={() => console.log("Pular etapa")}
      />
    </>
  );
}

export default App;
