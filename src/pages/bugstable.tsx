import React, { useState } from "react";
import BugsHeader from "@/components/BugsHeader";
import { MdOutlineEdit } from "react-icons/md";
import { RiDeleteBin7Line } from "react-icons/ri";
import { SlPencil } from "react-icons/sl";

const BugsTable: React.FC = () => {
	const [searchInput, setSearchInput] = useState("");

	const handleSubmit = () => {};
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
				<button className="flex flex-row items-baseline border border-slate-500 p-2 rounded-md gap-x-1 manrope">
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
						<tr className="border-b">
							<td className="py-2 px-4">1</td>
							<td className="py-2 px-4">Issue with login</td>
							<td className="py-2 px-4">Open</td>
							<td className="py-2 px-4">High</td>
							<td className="py-2 px-4">John Doe</td>
							<td className="py-2 px-4">None</td>
							<td className="py-2 px-4">
								<div className="flex flex-row gap-x-2">
									<MdOutlineEdit />
									<RiDeleteBin7Line />
								</div>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</>
	);
};

export default BugsTable;
