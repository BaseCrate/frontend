"use client";
import Image from 'next/image';
import { useState } from 'react';
// import { Pie } from 'react-chartjs-2';
import { Chart } from "react-google-charts";
import { useAccount } from 'wagmi';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const profile = () => {
    const router = useRouter();
    const { address, isConnected } = useAccount();
    // const [walletAddress, setWalletAddress] = useState(account>.address);

    const [userProfile, setUserProfile] = useState({
        username: '0xshikhar.eth',
        twitterHandle: "0xe0b8e7fe69bc47569dd1e5e36d550a04bc45169c1cc4dd3b71658729b49fb7d0",
        avatar: '/images/avatar.png',
        stats: {
            matchesPlayed: 10,
            matchesWon: 6,
            matchesLost: 4
        },
        ongoingBets: [
            { sport: "India VS England", team: 'India', odds: 1.5, betAmount: 100, potentialWin: 150, image: "/images/Indianlogo.jpg" },
            { sport: "Manchister VS Real Mermaid", team: 'Manchister', odds: 1.5, betAmount: 100, potentialWin: 150, image: "/images/ManchesterLogo.png" },
            { sport: "Basketball", team: 'Spain', odds: 2.0, betAmount: 120, potentialWin: 240, image: "/images/FC_Barcelona.png" },
            { sport: "DOTA", team: 'RPG Gammer', odds: 2.0, betAmount: 120, potentialWin: 240, image: "/images/esport.png" },
            // Add more bets as needed
        ],
        pastBets: [
            { match: 'Match 1', result: 'Won', amountWon: 100 },
            { match: 'Match 2', result: 'Lost', amountLost: 50 },
            // Add more past bets as needed
        ],
    });

    const data = [
        ["Task", "Hours per Day"],
        ["Work", 11],
        ["Eat", 2],
        ["Commute", 2],
        ["Watch TV", 2],
        ["Sleep", 7],
    ];

    const options = {
        title: "My Daily Activities",
        pieHole: 0.4, // Creates a Donut Chart. Does not do anything when is3D is enabled
        is3D: true, // Enables 3D view
        // slices: {
        //   1: { offset: 0.2 }, // Explodes the second slice
        // },
        pieStartAngle: 100, // Rotates the chart
        sliceVisibilityThreshold: 0.02, // Hides slices smaller than 2%
        legend: {
            position: "bottom",
            alignment: "center",
            textStyle: {
                color: "#233238",
                fontSize: 14,
            },
        },
        colors: ["#8AD1C2", "#9F8AD1", "#D18A99", "#BCD18A", "#D1C28A"],
    };


    return (
        <div className="bg-black text-white min-h-screen p-4">
            <div className="container mx-auto">
                {/* Profile and Statistics Sections */}
                {/* ... same as before */}<div className="p-4 rounded-lg bg-gradient-to-r from-gray-700 to-gray-900 mb-6">
                    <div className="flex items-center justify-around px-4 ">
                        <div className="flex  items-center space-x-4 justify-between">
                            <Image src={userProfile.avatar} alt="Avatar" width={100} height={100} className="rounded-full" />
                            <div className="flex flex-col">
                                <h1 className="text-3xl font-bold">{userProfile.username}</h1>
                                <div className='text-sm'> Wallet Address : 0xe0b8e7fe69bc47569dd1e5e36d550a04bc45169c1cc4dd3b71658729b49fb7d0</div>
                            </div>
                        </div>
                        {/* <button className="bg-custom-color text-black px-4 py-2 rounded hover:bg-custom-color-500 transition duration-300">
                            Connect to {userProfile.twitterHandle}
                        </button> */}
                        <div className=' justify-end m-4 flex gap-4'>

                            {/* <button className="bg-custom-color  text-black px-4 py-2 rounded hover:bg-custom-color-500 transition duration-300"
                                onClick={() => router.push('https://global-stg.transak.com/?apiKey=4aae77ea-df1a-4a88-9095-89625873c08e')}
                            >
                                Buy APT Token
                            </button> */}

                            <button className="bg-custom-color text-black px-4 py-2 rounded hover:bg-custom-color-500 transition duration-300"
                                onClick={console.log(address)}
                            >
                                Wallet Balance

                            </button>


                        </div>
                    </div>
                </div>

                <div className="p-4 rounded-lg bg-gradient-to-r from-gray-700 to-gray-900 mb-6">
                    <h2 className="text-2xl font-semibold">Statistics</h2>
                    <div className="mt-4 h-64"> {/* Adjust height as needed */}
                        <Chart
                            chartType="PieChart"
                            data={data}
                            options={options}
                            width={"100%"}
                            height={"400px"}
                        />
                    </div>
                </div>

                <div className="p-4 rounded-lg bg-gradient-to-r from-gray-700 to-gray-900 mb-6">
                    <h2 className="text-2xl font-semibold">Additional Statistics</h2>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                        {/* {additionalStatsData.map((data, index) => (
                            <div key={index} className="bg-gray-800 border border-gray-600 rounded-lg p-4">
                                <div className="text-lg font-semibold text-yellow-300">{data.label}</div>
                                <div className="text-2xl font-bold text-green-400 mt-2">{data.value.toFixed(2)}</div>
                            </div>
                        ))} */}
                    </div>
                </div>
                {/* Ongoing Bets Section */}
                <div className="p-4 rounded-lg bg-gradient-to-r from-gray-700 to-gray-900 mb-6">
                    <h2 className="text-2xl font-semibold">Ongoing Bets</h2>
                    <div className="flex flex-wrap justify-center gap-4 mt-4">
                        {userProfile.ongoingBets && userProfile.ongoingBets.map((bet, index) => (
                            <div key={index} className="bg-gray-800 border border-gray-600 rounded-lg p-4 max-w-sm">
                                {/* Bet card content */}
                                {/* ... same as before */}
                                <div className="flex justify-between items-center mb-4">
                                    <div className="flex items-center">
                                        <span className="text-lg font-semibold text-yellow-300">{bet.sport} </span>
                                        <span className='m-3 text-yellow-300'> {bet.team} </span>
                                        <img src={bet.image}
                                            alt="Team Flag"
                                            className="w-7 h-6 mr-2" />
                                    </div>
                                    <span className="text-md text-yellow-300 font-semibold">
                                        x{bet.odds.toFixed(2)}
                                    </span>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="betAmount" className="text-sm font-medium text-gray-300">
                                        Bet Amount
                                    </label>
                                    <div className="mt-1 relative rounded-md shadow-sm">
                                        <input
                                            type="number"
                                            id="betAmount"
                                            value={bet.betAmount}
                                            className="block w-full pl-4 pr-12 sm:text-sm bg-gray-700 border-gray-600 rounded-md text-white"
                                            placeholder="0"
                                            readOnly
                                        />
                                    </div>
                                </div>
                                <div className="text-right">
                                    <span className="text-sm font-medium text-gray-300">Potential Win:</span>
                                    <span className="text-lg font-bold text-green-400 ml-2">
                                        ${bet.potentialWin.toFixed(2)}
                                    </span>
                                    <button className="bg-custom-color mx-2 text-black px-3 py-1 rounded hover:bg-custom-color-500 transition duration-300" href='_' onClick={() => (window.open('https://x.com/BaseCrate', '_blank'))}>
                                        Share on X
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Past Bets Section */}
                <div className="p-4 rounded-lg bg-gradient-to-r from-gray-700 to-gray-800 mb-6">
                    <h2 className="text-2xl font-semibold">Past Bets</h2>
                    <div className="flex flex-wrap justify-center gap-4 mt-4">
                        {userProfile.pastBets && userProfile.pastBets.map((bet, index) => (
                            <div key={index} className="bg-gray-800 border border-gray-600 rounded-lg p-4 max-w-sm">
                                <div className="text-sm">
                                    Match: {bet.match}, Result: {bet.result}, Amount: ${bet.result === 'Won' ? bet.amountWon : bet.amountLost}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default profile;
