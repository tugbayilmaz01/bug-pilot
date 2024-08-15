import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useAppDispatch } from "@/app/hooks";
import { addBug } from "@/app/bugsSlice";

interface BugModalProps {
	isOpen: boolean;
	onCloseRequest: () => void;
}

const BugModal: React.FC<BugModalProps> = ({ isOpen, onCloseRequest }) => {
	const dispatch = useAppDispatch();

	const [title, setTitle] = useState("");
	const [status, setStatus] = useState("open");
	const [priority, setPriority] = useState("medium");
	const [assignee, setAssignee] = useState("");
	const [attachment, setAttachment] = useState("");

	/* 	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		const newBug = {
			id: Date.now().toString(),
			title,
			status,
			priority,
			assignee,
			attachment: { name: attachment },
		};

		dispatch(addBug(newBug));

		setTitle("");
		setStatus("open");
		setPriority("medium");
		setAssignee("");
		setAttachment("");
	}; */

	if (!isOpen) return null;

	return ReactDOM.createPortal(
		<div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
			<div className="bg-white p-6 rounded-md relative max-w-4xl w-full">
				<button
					onClick={onCloseRequest}
					className="absolute top-2 right-2 main-purple-color text-white py-1 px-2 rounded"
					aria-label="Close modal"
				>
					X
				</button>
				<h2 className="text-xl mb-4 manrope">Create a New Bug</h2>
				<form onSubmit={handleSubmit}>
					<div className="mb-4">
						<input
							type="text"
							placeholder="Title"
							className="w-full p-2 border border-gray-300 rounded"
							aria-label="Bug Title"
						/>
					</div>
					<div className="mb-4">
						<input
							type="text"
							placeholder="Status"
							className="w-full p-2 border border-gray-300 rounded"
							aria-label="Bug Status"
						/>
					</div>
					<div className="mb-4">
						<input
							type="text"
							placeholder="Priority"
							className="w-full p-2 border border-gray-300 rounded"
							aria-label="Bug Priority"
						/>
					</div>
					<div className="mb-4">
						<input
							type="text"
							placeholder="Assignee"
							className="w-full p-2 border border-gray-300 rounded"
							aria-label="Bug Assignee"
						/>
					</div>
					<div className="mb-4">
						<input
							type="text"
							placeholder="Attachment"
							className="w-full p-2 border border-gray-300 rounded"
							aria-label="Bug Attachment"
						/>
					</div>
					<button type="submit" className="main-purple-color text-white py-2 px-4 rounded">
						Submit
					</button>
				</form>
			</div>
		</div>,
		document.body
	);
};

export default BugModal;
