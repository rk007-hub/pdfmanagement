// import { UploadButton } from "~/utils/uploadthing";
import {UploadButton} from "@uploadthing/react"
// import { UploadButton } from "@uploadthing/react/src/component";
// You need to import our styles for the button to look right. Best to import in the root /_app.tsx but this is fine
import "@uploadthing/react/styles.css";
 
export default function Home() {
  return (
    <main >
      <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ", res);
          alert("Upload Completed");
        }}
        onUploadError={(error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
    </main>
  );
}