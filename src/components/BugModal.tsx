import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useAppDispatch } from "@/app/hooks";
import { addBug } from "@/app/bugsSlice";
import { Bug } from "@/app/bugsSlice";

interface BugModalProps {
	isOpen: boolean;
	onCloseRequest: () => void;
}

const BugModal: React.FC<BugModalProps> = ({ isOpen, onCloseRequest }) => {
	const dispatch = useAppDispatch();

	const [title, setTitle] = useState("");
	const [status, setStatus] = useState<"open" | "closed">("open");
	const [priority, setPriority] = useState<"low" | "medium" | "high">("medium");
	const [assignee, setAssignee] = useState("");
	const [attachment, setAttachment] = useState("");

	const handleSubmit = (e: React.FormEvent) => {
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

		onCloseRequest();

		setTitle("");
		setStatus("open");
		setPriority("medium");
		setAssignee("");
		setAttachment("");
	};

	if (!isOpen) return null;

	return ReactDOM.createPortal(
		<div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
			<div className="bg-white p-6 rounded-md relative max-w-4xl w-full">
				<button
					onClick={onCloseRequest}
					className="absolute top-2 right-2  py-1 px-2 rounded"
					aria-label="Close modal"
				>
					X
				</button>
				<h2 className="text-xl mb-4 manrope">Create a New Bug</h2>
				<form onSubmit={handleSubmit}>
					<div className="mb-2">
						<label htmlFor="priority">Title</label>
						<input
							type="text"
							className="w-full p-2 border border-gray-300 rounded"
							aria-label="Bug Title"
							onChange={(e) => setTitle(e.target.value)}
						/>
					</div>
					<div className="mb-2">
						<label htmlFor="priority">Priority</label>
						<select
							id="priority"
							value={priority}
							onChange={(e) => setPriority(e.target.value as "low" | "medium" | "high")}
							className="w-full p-2 border border-gray-300 rounded"
							aria-label="Bug Priority"
						>
							<option value="low">Low</option>
							<option value="medium">Medium</option>
							<option value="high">High</option>
						</select>
					</div>
					<div className="mb-2">
						<label htmlFor="status">Status</label>
						<select
							id="status"
							value={status}
							onChange={(e) => setStatus(e.target.value as "open" | "closed")}
							className="w-full p-2 border border-gray-300 rounded"
							aria-label="Bug Status"
						>
							<option value="open">Open</option>
							<option value="closed">Closed</option>
						</select>
					</div>
					<div className="mb-2">
						<label htmlFor="assignee">Assignee</label>
						<input
							type="text"
							placeholder="Assignee"
							className="w-full p-2 border border-gray-300 rounded"
							aria-label="Bug Assignee"
							onChange={(e) => setAssignee(e.target.value)}
						/>
					</div>
					<div className="mb-2">
						<label htmlFor="attachment">Attachment</label>
						<label
							htmlFor="attachment"
							className="w-full p-2 border border-gray-300 rounded cursor-pointer bg-gray-100 text-gray-700 flex items-center justify-center"
						>
							<span className="mr-2">Upload File</span>
							<input type="file" id="attachment" className="hidden" />
						</label>
					</div>

					<button
						type="submit"
						className="w-full main-purple-color text-white py-2 mt-6 px-4 rounded"
					>
						Submit
					</button>
				</form>
			</div>
		</div>,
		document.body
	);
};

export default BugModal;
