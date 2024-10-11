"use client";
import React, { useState } from 'react';
import { CiDollar } from 'react-icons/ci';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';
import { useRouter } from 'next/navigation';
import CrateCard from './CrateCard';

interface GridComponentProps {
    title: string;
    value: string;
    label: string;
    onClick?: () => void;
}

const categories = ['All','DeFi', 'Meme', 'GameFi'];

const crateData = [
    {
        name: 'DeFi Crate 1',
        category: 'DeFi',
        containsTokens: ['ETH', 'USDC', 'UNI'],
        oneMonthReturn: 50.00,
        oneYearReturn: 20.00,
    },
    {
        name: 'DeFi Crate 1',
        category: 'DeFi',
        containsTokens: ['ETH', 'USDC', 'UNI'],
        oneMonthReturn: 50.00,
        oneYearReturn: 20.00,
    },
    {
        name: 'DeFi Crate 1',
        category: 'DeFi',
        containsTokens: ['ETH', 'USDC', 'UNI'],
        oneMonthReturn: 50.00,
        oneYearReturn: 20.00,
    },
    {
        name: 'Meme Crate 1',
        category: 'Meme',
        containsTokens: ['ETH', 'USDC', 'UNI'],
        oneMonthReturn: 50.00,
        oneYearReturn: 20.00,
    },
    {
        name: 'GameFi Crate 1',
        category: 'GameFi',
        containsTokens: ['ETH', 'USDC', 'UNI'],
        oneMonthReturn: 50.00,
        oneYearReturn: 20.00,
    },
    // Add more crate data objects here
];


const Grid: React.FC = () => {
    const router = useRouter()
    const [selectedCategory, setSelectedCategory] = useState<string | null>('All');

    const filteredCrates = crateData.filter((crate) => {
        if (selectedCategory === 'All') {
            return true; // Show all crates if no category is selected
        }
        return crate.category === selectedCategory;
    });

    return (
        <div>
            <div className='py-4'>
                <div className='text-xl font-bold'>Select Your Crate</div>
            </div>
            <div className="flex gap-2">
                {categories.map((category) => (
                    <button
                        key={category}
                        className={`px-4 py-2 rounded-md ${selectedCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredCrates.map((crateData, index) => (
                    <CrateCard crateData={crateData} key={index} />
                ))}
            </div>

            {/* 
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[...Array(1)].map((_, index) => (
                    <CrateCard crateData={crateData}
                        key={index}
                    // title={`Card ${index + 1}`}
                    />
                ))}
            </div> */}
        </div >
    );
};

export default Grid;

const GridComponent: React.FC<GridComponentProps> = ({ title, value, label, onClick }) => {
    return (

        <div className="flex flex-col items-center justify-center">
            <div className="w-px h-12 bg-green-300"></div>
            <div className="flex flex-col px-2">
                <div>{value}</div>
                <div className="text-xs">{label}</div>
            </div>
            {onClick && (
                <HoverBorderGradient
                    containerClassName="rounded-2xl"
                    as="button"
                    onClick={onClick}
                    className="dark:bg-black bg-black text-white dark:text-white flex items-center space-x-2"
                >
                    {title}
                </HoverBorderGradient>
            )}
        </div>
    );
};
