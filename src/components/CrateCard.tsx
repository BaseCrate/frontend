import React from 'react';
import { CiDollar } from "react-icons/ci";
import Link from 'next/link';

interface CrateCardProps {
    crateData: {
        name: string;
        category: string;
        containsTokens: string[];
        oneMonthReturn: number;
        oneYearReturn: number;
        // totalStakers: number;
    };
}

const CrateCard: React.FC<CrateCardProps> = ({ crateData }) => {
    const { name, category, containsTokens, oneMonthReturn, oneYearReturn } = crateData;

    return (
        <div className="card my-5 bg-base-200 shadow-xl">
            <div className=" p-5 justify-between items-center">
                <div className="flex flex-row w-full items-center gap-4">
                    <CiDollar className="bg-yellow-300 rounded-xl text-3xl" />
                    <div>
                        <h2 className="text-left text-xl font-semibold">{name}</h2>
                        <div className="text-[12px]">Category: {category}</div>
                    </div>
                </div>
                <div className="divider divider-neutral"></div>

                <div>
                    <div className="pb-4">Contains Tokens: {containsTokens.join(', ')}</div>
                </div>
                <div className="text-sm">
                    <div className="my-1 border-t border-gray-300"></div>
                    <div className="">
                        <div className="flex items-center justify-between">
                            <div className="">1 month return</div>
                            <div>{oneMonthReturn.toFixed(2)}%</div>
                        </div>
                    </div>

                    <div className="my-1 border-t border-gray-300"></div>
                    <div className="">
                        <div className="flex items-center justify-between">
                            <div className="">1 year return</div>
                            <div>{oneYearReturn.toFixed(2)}%</div>
                        </div>
                    </div>

                    <div className="my-1 border-t border-gray-300"></div>
                    <div className="">
                        {/* <div className="flex items-center justify-between">
                            <div className="">TOTAL NUM. STAKERS</div>
                            <div>{totalStakers.toFixed(3)}</div>
                        </div> */}
                    </div>

                    <div>
                        <button className="bg-black text-white my-2 px-4 py-2 rounded-3xl">
                            Invest Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CrateCard;

// const CrateCard = () => {
//     return (
//         <div className="card my-5 bg-base-200 shadow-xl">
//             {/* <Link href="/operator/0x321980af329232423423"> */}
//             <div className=" p-5 justify-between items-center">
//                 <div className='flex flex-row w-full items-center gap-4'>
//                     <CiDollar className='bg-yellow-300 rounded-xl text-3xl' />
//                     <div>
//                         <h2 className="text-left text-xl font-semibold ">DeFi Crate 1</h2>
//                         <div className='text-[12px]'> Category : DeFi</div>
//                     </div>

//                 </div>
//                 <div className="divider divider-neutral"></div>

//                 <div>
//                     <div className='pb-4'> Contains Tokens: ETH, USDC, UNI</div>
//                 </div>
//                 <div className='text-sm'>

//                     <div className="my-1 border-t border-gray-300"></div>
//                     <div className="">
//                         <div className='flex items-center justify-between'>
//                             <div className=''> 1 month return </div>
//                             <div> 50.00%</div>
//                         </div>
//                     </div>

//                     <div className="my-1 border-t border-gray-300"></div>
//                     <div className="">
//                         <div className='flex items-center justify-between'>
//                             <div className=''>1 year return</div>
//                             <div> 20.00%</div>
//                         </div>
//                     </div>

//                     <div className="my-1 border-t border-gray-300"></div>
//                     <div className="">
//                         <div className='flex items-center justify-between'>
//                             <div className=''>TOTAL NUM. STAKERS</div>
//                             <div> 0.000</div>
//                         </div>
//                     </div>

//                     <div>
//                         <button className='bg-black text-white my-2 px-4 py-2 rounded-3xl'>
//                             Invest Now
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             {/* <div className='flex flex-row gap-4'>
//                 <div className="flex items-center justify-center">
//                     <div className="w-px h-12 bg-green-300"></div>
//                     <div className='flex flex-col px-2'>
//                         <div> 0.000</div>
//                         <div className='text-xs'>Restaked</div>
//                     </div>
//                 </div>
//                 <div className="flex items-center justify-center">
//                     <div className="w-px h-12 bg-green-300"></div>
//                     <div className='flex flex-col px-2'>
//                         <div> 7320223</div>
//                         <div className='text-xs'>TVL</div>
//                     </div>
//                 </div>
//             </div> */}
//             {/* </div> */}
//         </div >
//     );
// };

// export default CrateCard;