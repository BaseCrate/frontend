"use client"
import React from 'react'
import { CiDollar } from "react-icons/ci";
import { useRouter } from "next/navigation";
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';

const CratesTable = () => {
    const router = useRouter();

    return (
        <div>
            <div className="card w-full my-5 bg-base-200 shadow-xl">
                <div className="flex p-5 justify-between items-center">
                    <div className="flex flex-row items-center gap-2">
                        <CiDollar className="bg-yellow-300 rounded-xl text-xl" />
                        <h2 className="text-left text-lg font-semibold ">Nibiru</h2>
                    </div>{" "}
                    <div className="flex flex-row gap-4">
                        <div className="flex items-center justify-center">
                            <div className="w-px h-12 bg-green-300"></div>
                            <div className="flex flex-col px-2">
                                <div> 0.000</div>
                                <div className="text-xs">Restaked</div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <div className="w-px h-12 bg-green-300"></div>
                            <div className="flex flex-col px-2">
                                <div> 0.000</div>
                                <div className="text-xs">Restaked Points</div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <div className="w-px h-12 bg-green-300"></div>
                            <div className="flex flex-col px-2">
                                <div> 7320223</div>
                                <div className="text-xs">TVL</div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <div className="flex flex-col px-2">
                                <HoverBorderGradient
                                    containerClassName="rounded-2xl"
                                    as="button"
                                    onClick={() => {
                                        router.push("./restake/fund/?state=deposit");
                                    }}
                                    className="dark:bg-black bg-black text-white dark:text-white flex items-center space-x-2"
                                >
                                    Restake
                                </HoverBorderGradient>
                                {/* <button
                        onClick={() => {
                        router.push("./restake/withdraw");
                        }}
                        className="bg-black text-white p-1 px-4 rounded-xl"
                    > Withdraw
                    </button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CratesTable