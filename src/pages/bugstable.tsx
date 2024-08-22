import React, { useEffect, useState } from "react";
import { MdOutlineEdit } from "react-icons/md";
import { RiDeleteBin7Line } from "react-icons/ri";
import { useSelector } from "react-redux";
import { SlPencil } from "react-icons/sl";
import BugsHeader from "@/components/BugsHeader";
import BugModal from "@/components/BugModal";
import { useAppDispatch } from "@/app/hooks";
import { Bug, deleteBug, selectBugs } from "@/app/bugsSlice";

const BugsTable: React.FC = () => {
	const dispatch = useAppDispatch();
	const bugs = useSelector(selectBugs);
	const [searchInput, setSearchInput] = useState("");
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [tableData, setTableData] = useState<Bug[]>([]);

	const closeModal = () => {
		setIsModalOpen(false);
	};
	const openModal = () => {
		setIsModalOpen(true);
	};

	const handleDelete = (id: string) => {
		dispatch(deleteBug(id));

		const updatedBugs = tableData.filter((bug) => bug.id !== id);
		setTableData(updatedBugs);
		localStorage.setItem("bugs", JSON.stringify(updatedBugs));
	};

	useEffect(() => {
		const storedBugs = localStorage.getItem("bugs");
		if (storedBugs) {
			try {
				const parsedBugs: Bug[] = JSON.parse(storedBugs);
				setTableData(parsedBugs);
			} catch (error) {
				console.error("Failed to parse bugs from localStorage:", error);
				setTableData([]);
			}
		} else {
			setTableData([]);
		}
	}, [dispatch]);

	return (
		<>
			<BugsHeader />
			<div className="flex justify-end mt-4 mr-8 gap-x-6">
				<input
					type="text"
					value={searchInput}
					onChange={(e) => setSearchInput(e.target.value)}
					placeholder="Search.."
					className="px-2 border border-slate-500 rounded-md manrope"
				/>
				<button
					onClick={openModal}
					className="flex flex-row items-baseline border border-slate-500 p-2 rounded-md gap-x-1 manrope"
				>
					<SlPencil /> Create Ticket
				</button>
			</div>
			<div className="flex items-center justify-center  manrope p-4">
				<table className="min-w-full border-collapse border border-gray-200">
					<thead className="main-green-color">
						<tr className="border-b">
							<th className="py-2 px-4 text-left">#ID</th>
							<th className="py-2 px-4 text-left">Ticket Title</th>
							<th className="py-2 px-4 text-left">Status</th>
							<th className="py-2 px-4 text-left">Priority</th>
							<th className="py-2 px-4 text-left">Assignee</th>
							<th className="py-2 px-4 text-left">Attachment</th>
							<th className="py-2 px-4 text-left">Actions</th>
						</tr>
					</thead>
					<tbody>
						{bugs.map((bug) => (
							<tr key={bug.id} className="border-b">
								<td className="py-2 px-4">{bug.id}</td>
								<td className="py-2 px-4">{bug.title}</td>
								<td className="py-2 px-4">{bug.status}</td>
								<td className="py-2 px-4">{bug.priority}</td>
								<td className="py-2 px-4">{bug.assignee}</td>
								<td className="py-2 px-4">{bug.attachment ? "Attached" : "None"}</td>
								<td className="py-2 px-4">
									<div className="flex flex-row gap-x-2">
										<button>
											<MdOutlineEdit />
										</button>
										<button onClick={() => handleDelete(bug.id)}>
											<RiDeleteBin7Line />
										</button>
									</div>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<BugModal isOpen={isModalOpen} onCloseRequest={closeModal} />
		</>
	);
};

export default BugsTable;
