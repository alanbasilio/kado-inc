import Image from "next/image";
import { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";

const FileUploader = ({ required, setValue, name }) => {
  const hiddenFileInput = useRef(null);
  const [base64, setBase64] = useState(null);

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleChange = async (event) => {
    const fileUploaded = event.target.files[0];
    if (!fileUploaded) return;
    const base64File = await convertBase64(fileUploaded);
    setBase64(base64File);
    setValue(name, base64File);
  };

  return (
    <div className="d-flex align-items-center">
      {base64 && <Image src={base64} width={47} height={47} alt={name} />}
      <div>
        <Button
          onClick={handleClick}
          className={base64 && "ms-7"}
          variant="outline-primary"
          size="sm"
        >
          {base64 ? "Change" : "Upload"}
        </Button>
        <input
          type="file"
          ref={hiddenFileInput}
          onChange={handleChange}
          style={{ width: 0, opacity: 0 }}
          // required={required}
          name="icon"
          accept="image/jpeg, image/png"
        />
      </div>
    </div>
  );
};
export default FileUploader;