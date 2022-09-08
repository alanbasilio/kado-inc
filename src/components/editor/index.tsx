import { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";

const EditorComponent = ({ size = 400, control, name, required, setValue }) => {
  const API_KEY = process.env.NEXT_PUBLIC_TINY_CLOUD_KEY;
  const editorRef = useRef(null);
  const onChange = () => {
    if (editorRef.current) {
      setValue(name, editorRef.current.getContent());
    }
  };

  return (
    <Controller
      control={control}
      name={name}
      rules={{ required: required }}
      render={({ field }) => (
        <Editor
          apiKey={API_KEY}
          onInit={(evt, editor) => (editorRef.current = editor)}
          onChange={onChange}
          init={{
            height: size,
            menubar: false,
            plugins: [
              "advlist",
              "autolink",
              "lists",
              "link",
              "image",
              "charmap",
              "preview",
              "anchor",
              "searchreplace",
              "visualblocks",
              "code",
              "fullscreen",
              "insertdatetime",
              "media",
              "table",
              "code",
              "help",
              "wordcount",
            ],
            toolbar: `undo redo | blocks | 
                    bold italic | alignleft aligncenter 
                    alignright alignjustify | bullist numlist outdent indent | 
                    removeformat`,
            content_style:
              "body { font-family:Inter,Helvetica,Arial,sans-serif; font-size:14px }",
          }}
        />
      )}
    />
  );
};

export default EditorComponent;
