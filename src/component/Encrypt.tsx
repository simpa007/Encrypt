import {useState, useRef } from "react";
const Encrypt = () => {
	const [file, setFile] = useState("");
	const inputFile = useRef(null);

	const handleFileUpload = (e : any) => {
		const { files } = e.target;
		if (files && files.length) {
			const filename = files[0].name;
	  
			var parts = filename.split(".");
			const fileType = parts[parts.length - 1];
			console.log("fileType", fileType); //ex: zip, rar, jpg, svg etc.
	  
			setFile(files[0]);
	};

	const onButtonClick = () => {
		inputFile.current.click();
	};
	return (
		<section className="container w-1/2 mx-auto mt-24">
			<div>
				<h1 className="text-2xl font-bold">Encrypt files</h1>
				<p className="text-xl my-6">
					Drag and drop your files here, or click to browse.
				</p>
			</div>
			<div className="border-dashed border-2 h-64 rounded-2xl">
				<div className="text-center mt-12">
					<h1 className="text-2xl font-bold">Upload files</h1>
					<input
						type="file"
						ref={inputFile}
						onChange={handleFileUpload}
						style={{ display: "none" }}
					/>
					<button onClick={onButtonClick}>Browse {file}</button>
				</div>
			</div>
		</section>
	);
};

export default Encrypt;
