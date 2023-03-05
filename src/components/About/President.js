
import React from 'react'
import bbb from "./bbb.jpg"

export const President = () => {


    const temp = [{
        name : "Hon. Balasaheb B. Thorat",
        position : "Ex. Minister of Revenue , Government of Maharashtra",
        desc : "Amrutvahini Sheti and Shikshan Vikas Sanstha is established with the mission of the upliftment of the rural people. Since its establishment, the Sanstha has expanded the horizon of education in the rural area of Sangamner. High-quality education is made available to the children of farmers, labourers, and people of all strata at an affordable cost. All institutes working under the patronage of Amrutvahini Sheti and Shikshan Vikas Sanstha deliver education at par with global standards, accredited by esteemed organizations like NBA and NACC, and thereby fulfill the dreams of the youths."
    }]
    

    return (
        <>
            <div>
                <b><center className='mt-10 text-4xl'>
                    <h1>    President's Message</h1>

                </center></b>
            </div>

            {temp.map((post , po)=>{
                return (<>
                
                <div class="flex justify-center ml-20 mr-20 mt-10 mb-10">
                <div class="flex flex-col rounded-lg bg-white shadow-lg dark:bg-neutral-700  md:flex-row">

                    <img class="h-full w-full rounded-t-lg md:w-full md:rounded-none md:rounded-l-lg"
                        src={bbb}
                        alt="no" />


                    <div class="flex flex-col p-6">
                        <h5
                            class="mb-2 text-4xl font-medium text-neutral-800 dark:text-neutral-50">
                            {post.name}
                        </h5>
                        <p class="text-xl text-neutral-500 dark:text-neutral-300">
                            {post.position}
                        </p>
                        <br/>

                        <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                            {post.desc}
                        </p>

                    </div>
                </div>
            </div>

                </>)
            })}
           

        </>
    )
}
