"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AiOutlineSearch, AiOutlineMenu } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Navbar = () => {
	const router = useRouter();
	const [searchQuery, setSearchQuery] = useState("");
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

	return (
		<nav className="bg-black text-white p-4">
			<div className="container mx-auto flex justify-between items-center">
				<Link href="/" className="text-2xl font-serif">
					BaseCrate
				</Link>

				<div className="hidden md:flex items-center space-x-4">
					<div className="relative">
						<input
							type="text"
							placeholder="Track Your Investment"
							className="bg-[#363840] text-white p-2 rounded-lg w-64"
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
						/>
						<button
							onClick={() => router.push(`/searching/${searchQuery}`)}
							className="absolute right-2 top-1/2 transform -translate-y-1/2"
						>
							<AiOutlineSearch className="text-[#8a939b]" />
						</button>
					</div>

					<button
						onClick={() => router.push("/dashboard")}
						className="flex items-center space-x-1 hover:text-gray-300"
					>
						<CgProfile />
						<span>Dashboard</span>
					</button>

					<ConnectButton />
				</div>

				<button onClick={toggleMenu} className="md:hidden">
					<AiOutlineMenu size={24} />
				</button>
			</div>

			{isMenuOpen && (
				<div className="md:hidden mt-4 space-y-4">
					<div className="relative">
						<input
							type="text"
							placeholder="Track Your Investment"
							className="bg-[#363840] text-white p-2 rounded-lg w-full"
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
						/>
						<button
							onClick={() => router.push(`/searching/${searchQuery}`)}
							className="absolute right-2 top-1/2 transform -translate-y-1/2"
						>
							<AiOutlineSearch className="text-[#8a939b]" />
						</button>
					</div>

					<button
						onClick={() => {
							router.push("/dashboard");
							setIsMenuOpen(false);
						}}
						className="flex items-center space-x-1 hover:text-gray-300 w-full"
					>
						<CgProfile />
						<span>Dashboard</span>
					</button>

					<div className="w-full">
						<ConnectButton />
					</div>
				</div>
			)}
		</nav>
	);
};

export default Navbar;