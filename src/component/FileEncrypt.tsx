const FileEncrypt = () => {
	return (
		<section className="flex flex-col mt-8">
			<div className="w-[40%] mx-auto">
				<h1 className="text-3xl font-bold ">Encrypt your files </h1>
				<p className="text-xl mt-4">
					Choose an encryption strength and set a password for your file The
					stronger the encryption the longer it takes to encrypt and decrypt.
				</p>
			</div>
			<div className="mt-4 w-[40%] mx-auto">
				<form>
					<div className="flex flex-col">
						<label className="text-xl">Encryption strength</label>
						<input
							type="text"
							className="border border-neutral-400 outline-none mt-2 w-[80%] h-12 rounded-lg"
						/>
					</div>
					<div className="flex flex-col mt-4">
						<label htmlFor="" className="text-xl">
							Password
						</label>
						<input
							type="password"
							className="border border-neutral-400 outline-none mt-2 w-[80%] h-12 rounded-lg"
						/>
					</div>
					<div className="flex flex-col mt-4">
						<label htmlFor="" className="text-xl">
							Confirm Password
						</label>
						<input
							type="password"
							className="border border-neutral-400 outline-none mt-2 w-[80%] h-12 rounded-lg"
						/>
					</div>
					<div className="mt-4 flex justify-end w-[80%] space-x-4">
						<button className="bg-neutral-200 py-2 px-4 rounded-xl text-black">
							Cancel
						</button>
						<button className="bg-blue-600 py-2 px-4 rounded-xl text-white">
							Encrypt
						</button>
					</div>
				</form>
			</div>
		</section>
	);
};

export default FileEncrypt;
