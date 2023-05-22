import { useState } from "react";
import { useDropzone } from "react-dropzone";
import {
  AreaSuccessFiles,
  BoxPreview,
  BoxUpload,
  CardPreviewDoc,
  ContainerUpload,
} from "./styles";

import IconUpload from "../../assets/icon-upload.svg";
import IconRemove from "../../assets/delete.svg";
import { Loading } from "../loading";

import uuid from "react-uuid";

interface UploadProps {
  typeDoc: string;
  limitUpload: number;
  onReturn: () => void;
}

export const UploadComponent = ({
  typeDoc,
  limitUpload,
  onReturn,
}: UploadProps) => {
  const [files, setFiles] = useState<File[]>([]);
  const [loadingFiles, setLoadingFiles] = useState<string[]>([]);
  const [sizeErrorMessage, setSizeErrorMessage] = useState<string>("");
  const [formatErrorMessage, setFormatErrorMessage] = useState<string>("");
  const [uploadComplete, setUploadComplete] = useState<boolean>(false);
  const [isDragActive, setIsDragActive] = useState<boolean>(false);

  const [isSuccess, setIsSuccess] = useState(false);

  const onDrop = async (acceptedFiles: File[]) => {
    if (files.length + acceptedFiles.length > limitUpload) {
      setFormatErrorMessage(`Maximum limit of ${limitUpload} files exceeded.`);
      return;
    }

    setSizeErrorMessage("");
    setFormatErrorMessage("");
    setUploadComplete(false);

    const updatedFiles: File[] = [];

    for (const file of acceptedFiles) {
      setLoadingFiles((prevLoadingFiles) => [...prevLoadingFiles, file.name]);

      // Simular tempo de carregamento
      await new Promise((resolve) => setTimeout(resolve, 2000));

      updatedFiles.push(file);
      setLoadingFiles((prevLoadingFiles) =>
        prevLoadingFiles.filter((fileName) => fileName !== file.name)
      );
    }

    let hasSizeError = false;
    let hasFormatError = false;

    // Verificar o tamanho dos arquivos (5MB) e os formatos permitidos
    const maxSize = 5 * 1024 * 1024; // 5MB em bytes
    for (const file of updatedFiles) {
      if (file.size > maxSize) {
        hasSizeError = true;
        setSizeErrorMessage("File size exceeds 5MB, please upload again.");
      } else if (
        !(
          file.type === "application/pdf" ||
          file.type === "image/png" ||
          file.type === "image/jpeg"
        )
      ) {
        hasFormatError = true;
        setFormatErrorMessage("Invalid file format, please try again.");
      }
    }

    if (!hasSizeError && !hasFormatError) {
      setFiles([...files, ...updatedFiles]);
      setUploadComplete(true);
    }

    setUploadComplete(true);
    setIsDragActive(false);
  };

  const removeFile = (file: File) => {
    const updatedFiles = files.filter((f) => f !== file);
    setFiles(updatedFiles);
    setFormatErrorMessage("");
  };

  const handleSendFiles = async (): Promise<void> => {
    try {
      const base64Array: string[] = await Promise.all(
        files.map((file: File) => {
          return new Promise<string>((resolve) => {
            const reader = new FileReader();
            reader.onload = () => {
              const base64 = reader.result as string;
              resolve(base64);
            };
            reader.readAsDataURL(file);
          });
        })
      );

      const fileInfo: {
        name: string;
        file: string;
        mime: string;
        size: number;
        ref: string;
        type: string;
      }[] = files.map((file: File) => {
        const slug = (str: string): string => {
          return str
            .toLowerCase()
            .replace(/ /g, "-")
            .replace(/[^\w-]+/g, "");
        };

        const fileExtension = file.name.split(".").pop();

        const fileType =
          typeDoc === "education"
            ? "Education Document"
            : typeDoc === "professional"
            ? "Letter Document"
            : typeDoc === "visa"
            ? "Visa Document"
            : typeDoc === "photo"
            ? "Passport"
            : "Proof of Address";

        const formattedFile = `${slug(
          `Name user check ${fileType}`
        )}.${fileExtension}`;

        return {
          name: `Name user check - ${fileType}`,
          file: formattedFile,
          mime: file.type,
          size: file.size,
          ref: uuid(),
          type: typeDoc,
        };
      });

      const contentFileData: {
        content: string;
        ref: string;
      }[] = files.map((file: File, index: number) => {
        return {
          name: file.name,
          content: base64Array[index],
          ref: fileInfo[index].ref,
        };
      });

      console.log(fileInfo);
      console.log(contentFileData);

      setIsSuccess(true);
    } catch (error) {
      console.error(error);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    onDragEnter: () => setIsDragActive(true),
    onDragLeave: () => setIsDragActive(false),
  });

  return (
    <ContainerUpload>
      <div className="content">
        {!isSuccess ? (
          <div>
            <BoxUpload
              {...getRootProps()}
              className={`${isDragActive ? "drag-active" : ""}${
                files.length === limitUpload ? "disabled" : ""
              }`}
            >
              <input {...getInputProps()} />
              <div className="icon">
                <img src={IconUpload} alt="" />
              </div>
              <p>
                Drag and drop the files here in this area or click to upload.
              </p>
            </BoxUpload>
            {!uploadComplete &&
              loadingFiles.map((fileName) => (
                <div key={fileName}>
                  <Loading />
                </div>
              ))}
            {files.length > 0 && (
              <BoxPreview>
                <div className="list">
                  {files.map((file) => (
                    <CardPreviewDoc key={file.name}>
                      {file.type === "application/pdf" ? (
                        <div>
                          <iframe
                            src={URL.createObjectURL(file)}
                            title={file.name}
                          ></iframe>
                          <span>{file.name}</span>
                        </div>
                      ) : (
                        <div>
                          <img
                            src={URL.createObjectURL(file)}
                            alt={file.name}
                          />
                          <span>{file.name}</span>
                        </div>
                      )}
                      <button
                        onClick={() => removeFile(file)}
                        className="btn-remove"
                      >
                        <img src={IconRemove} />
                      </button>
                    </CardPreviewDoc>
                  ))}
                </div>
              </BoxPreview>
            )}
            {sizeErrorMessage && (
              <div className="error">{sizeErrorMessage}</div>
            )}
            {formatErrorMessage && (
              <div className="error">{formatErrorMessage}</div>
            )}
            {uploadComplete && (
              <div className="actions">
                {files.length > 0 && (
                  <button className="btn-confirm" onClick={handleSendFiles}>
                    Confirm documents
                  </button>
                )}
              </div>
            )}
          </div>
        ) : (
          <AreaSuccessFiles>
            <h5>Supporting document</h5>
            <p>Your documents have been successfully uploaded</p>
            <div className="all-docs">
              {files.map((file) => (
                <div key={file.name}>
                  <CardPreviewDoc>
                    {file.type === "application/pdf" ? (
                      <div>
                        <iframe
                          src={URL.createObjectURL(file)}
                          title={file.name}
                        ></iframe>
                        <span>{file.name}</span>
                      </div>
                    ) : (
                      <div>
                        <img src={URL.createObjectURL(file)} alt={file.name} />
                        <span>{file.name}</span>
                      </div>
                    )}
                  </CardPreviewDoc>
                  <div className="msg-preview">
                    <div className="icon"></div>
                    <span>Preview</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="actions">
              <button
                className="btn-add-another"
                onClick={() => setIsSuccess(false)}
              >
                Review documents
              </button>

              <button className="btn-next" onClick={onReturn}>
                Next
              </button>
            </div>
          </AreaSuccessFiles>
        )}
      </div>
    </ContainerUpload>
  );
};
